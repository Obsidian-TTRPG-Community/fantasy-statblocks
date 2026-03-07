import {
    App,
    ButtonComponent,
    Modal,
    TFile,
    getFrontMatterInfo,
    parseYaml,
    stringifyYaml
} from "obsidian";
import { Layout5e } from "src/layouts/basic 5e/basic5e";
import { MarkdownRenderChild } from "obsidian";
import type { Monster, StatblockParameters, Trait } from "../../index";

import Statblock from "./Statblock.svelte";
import type StatBlockPlugin from "src/main";

import fastCopy from "fast-copy";
import type {
    CollapseItem,
    GroupItem,
    IfElseItem,
    InlineItem,
    JavaScriptItem,
    Layout,
    LayoutItem,
    StatblockItem
} from "src/layouts/layout.types";
import { append } from "src/util/util";
import { Linkifier } from "src/parser/linkify";
import { Bestiary } from "src/bestiary/bestiary";
import copy from "fast-copy";

type RendererParameters = {
    container: HTMLElement;
    plugin: StatBlockPlugin;
    context?: string;
    layout?: Layout;
} & (
    | {
          monster: Monster;
      }
    | {
          params: Partial<StatblockParameters>;
      }
);

export default class StatBlockRenderer extends MarkdownRenderChild {
    topBar!: HTMLDivElement;
    bottomBar!: HTMLDivElement;
    loaded: boolean = false;
    statblockEl!: HTMLDivElement;
    contentEl!: HTMLDivElement;
    container: HTMLElement;
    monster!: Monster;
    plugin: StatBlockPlugin;
    params!: Partial<StatblockParameters>;
    context: string;
    layout!: Layout;
    rawSource: string = "";
    constructor(
        public rendererParameters: RendererParameters,
        public icons = true
    ) {
        super(rendererParameters.container);

        this.container = rendererParameters.container;
        this.plugin = rendererParameters.plugin;
        this.context = rendererParameters.context ?? "";

        this.setCreature(rendererParameters);

        this.setLayout();

        this.init();
    }
    setLayout() {
        this.layout =
            this.rendererParameters.layout ??
            this.plugin.manager
                .getAllLayouts()
                .find(
                    (layout) =>
                        layout.name ==
                            (this.params.layout ?? this.monster.layout) ||
                        layout.name ==
                            (this.params.statblock ?? this.monster.statblock)
                ) ??
            this.plugin.manager.getDefaultLayout();
    }
    get canSave() {
        return "name" in this.params;
    }

    async build(): Promise<Monster> {
        let built: Partial<Monster> = Object.assign(
            {},
            this.monster ?? {},
            this.params ?? {}
        );

        if (!Object.values(built).length) {
            built = Object.assign({}, built, {
                note: this.context
            });
        }
        if (built.note) {
            const note = Array.isArray(built.note)
                ? (<string[]>built.note).flat(Infinity).pop()
                : built.note;
            const file =
                await this.plugin.app.metadataCache.getFirstLinkpathDest(
                    `${note}`,
                    this.context ?? ""
                );
            if (file && file instanceof TFile) {
                const info = getFrontMatterInfo(
                    await this.plugin.app.vault.cachedRead(file)
                );
                if (info.exists) {
                    Object.assign(
                        built,
                        fastCopy(
                            parseYaml(
                                Linkifier.transformYamlSource(info.frontmatter)
                            ) ?? {}
                        ),
                        this.params
                    );
                }
            }
        }
        if ("image" in built) {
            if (Array.isArray(built.image)) {
                built.image = built.image.flat(2).join("");
            }
        }

        const extensions = Bestiary.getExtensions(built, new Set());
        /**
         * At this point, the built creature has been fully resolved from all
         * extensions and in-memory creature definitions.
         */
        for (const extension of extensions.reverse()) {
            built = Object.assign(built, extension);
        }
        built = Object.assign(built, this.monster ?? {}, this.params ?? {});

        /**
         * Traits logic:
         * Defined in Params: ALWAYS SHOW
         * then, defined in memory
         * then, defined via extension
         *
         * Traits defined using `trait+: ...` will always just add to the underlying trait.
         */

        for (const block of this.unwrapBlocks(this.layout.blocks)) {
            if (!("properties" in block)) continue;
            for (let property of block.properties) {
                /** Ignore properties that aren't in the final built creature. */
                if (
                    !(property in built) &&
                    !(`${property}+` in built) &&
                    !(`${property}-` in built)
                ) {
                    continue;
                }
                switch (block.type) {
                    case "traits": {
                        /**
                         * Traits can be defined directly, as additive (+) or subtractive (-).
                         *
                         * Directly defined traits can be overidden by name up the extension tree.
                         * Parameters > `creature` > `extends`
                         * Directly defined parameter traits are *always shown*.
                         *
                         * Additive traits are *always* displayed, no matter where they originate.
                         *
                         * Subtractive traits are *always* removed, unless the trait is directly defined in the parameters.
                         * Subtractive traits only work on directly defined traits.
                         *
                         */
                        const $TRAIT_MAP: Map<string, Trait> = new Map();
                        const $ADDITIVE_TRAITS: Trait[] = [];

                        /**
                         * Resolve extension traits first.
                         */
                        for (const creature of [...extensions]) {
                            /**
                             * Directly defined traits.
                             *
                             * Because these can be overridden, they go into a map by name.
                             */
                            for (const trait of getTraitsList(
                                property,
                                creature
                            )) {
                                $TRAIT_MAP.set(trait.name, trait);
                            }

                            /**
                             * Deleted traits. These are always removed.
                             */
                            for (const trait of getTraitsList(
                                `${property}-` as keyof Monster,
                                creature
                            )) {
                                $TRAIT_MAP.delete(trait.name);
                            }

                            /**
                             * Modifiable traits. These traits modify existing traits by name.
                             * If the trait does not exist, it is ignored.
                             */

                            for (const trait of getTraitsList(
                                `${property}~` as keyof Monster,
                                creature
                            )) {
                                if ($TRAIT_MAP.has(trait.name)) {
                                    $TRAIT_MAP.set(trait.name, trait);
                                }
                            }

                            /**
                             * Additive traits. These traits are always shown.
                             */
                            for (const trait of getTraitsList(
                                `${property}+` as keyof Monster,
                                creature
                            )) {
                                $ADDITIVE_TRAITS.push(trait);
                            }
                        }
                        Object.assign(built, {
                            [property]: [
                                ...$TRAIT_MAP.values(),
                                ...$ADDITIVE_TRAITS
                            ]
                        });
                        break;
                    }
                    case "saves": {
                        /** TODO: Reimplement combinatorial saves */
                        let saves: {
                            [x: string]: any;
                        }[] =
                            (built[property] as {
                                [x: string]: any;
                            }[]) ?? [];
                        if (
                            property in built &&
                            !Array.isArray(built[property]) &&
                            typeof built[property] == "object"
                        ) {
                            saves = Object.entries(built[property] ?? {}).map(
                                ([key, value]) => {
                                    return { [key]: value };
                                }
                            );
                        }
                        Object.assign(built, {
                            [property]: saves
                        });
                        let additive: {
                            [x: string]: any;
                        }[] = [];
                        if (
                            `${property}+` in built &&
                            !Array.isArray(
                                built[`${property}+` as keyof Monster]
                            ) &&
                            typeof built[`${property}+` as keyof Monster] ==
                                "object"
                        ) {
                            additive = Object.entries(
                                built[property] ?? {}
                            ).map(([key, value]) => {
                                return { [key]: value };
                            });
                        }
                        if (additive.length) {
                            Object.assign(built, {
                                [property]: append(
                                    built[property] as { [x: string]: any }[],
                                    additive
                                )
                            });
                        }
                        break;
                    }
                    default: {
                        if (`${property}+` in built && property in built) {
                            const additive = append(
                                built[property] as string | any[],
                                built[`${property}+` as keyof Monster] as
                                    | string
                                    | any[]
                            );
                            if (additive) {
                                Object.assign(built, {
                                    [property]: additive
                                });
                            }
                        }
                    }
                }
            }
        }

        built = this.transformLinks(built);

        if ("image" in built && Array.isArray(built.image)) {
            built.image = built.image.flat(2).join("");
        }

        return built as Monster;
    }

    /**
     * This is used to return a list of "saves" or "traits" block in the layout.
     */
    unwrapBlocks(
        blocks: StatblockItem[]
    ): Exclude<
        StatblockItem,
        | GroupItem
        | InlineItem
        | IfElseItem
        | JavaScriptItem
        | CollapseItem
        | LayoutItem
    >[] {
        let ret: Exclude<
            StatblockItem,
            | GroupItem
            | InlineItem
            | IfElseItem
            | JavaScriptItem
            | CollapseItem
            | LayoutItem
        >[] = [];
        for (const block of blocks) {
            switch (block.type) {
                case "group":
                case "inline":
                case "collapse": {
                    ret.push(...this.unwrapBlocks(block.nested));
                    break;
                }
                case "layout":
                case "ifelse":
                case "javascript": {
                    continue;
                }
                default:
                    ret.push(block);
                    break;
            }
        }

        return ret;
    }

    /**
     * Inject column-break items into layout blocks based on [column-break] markers in source
     */
    injectColumnBreaks(blocks: StatblockItem[]): StatblockItem[] {
        const columnBreakMatches = this.rawSource.match(/^\s*\[column-break\]\s*$/gm);
        const columnBreakCount = columnBreakMatches?.length || 0;
        
        // If no column breaks found, return blocks as-is
        if (columnBreakCount === 0) {
            return blocks;
        }

        // Find the positions where [column-break] appears in the raw source
        const sourceLines = this.rawSource.split('\n');
        const columnBreakLineNumbers: number[] = [];
        
        sourceLines.forEach((line, index) => {
            if (line.trim() === '[column-break]') {
                columnBreakLineNumbers.push(index);
            }
        });

        // For each column break, find the YAML key that appears before it
        const blockPositions: number[] = [];
        
        for (const breakLineNum of columnBreakLineNumbers) {
            // Find the last top-level YAML key before this break
            let lastKeyName = '';
            let lastKeyLine = -1;
            
            for (let i = breakLineNum - 1; i >= 0; i--) {
                const line = sourceLines[i];
                // Match top-level keys (lines that start without whitespace and contain ':')
                const keyMatch = line.match(/^([a-zA-Z_-]+):/);
                if (keyMatch) {
                    lastKeyName = keyMatch[1];
                    lastKeyLine = i;
                    break;
                }
            }
            
            // Find the last block with a property matching this key name
            let insertIdx = blocks.length - 1;
            if (lastKeyName) {
                for (let i = blocks.length - 1; i >= 0; i--) {
                    const block = blocks[i];
                    // Check if this block corresponds to the key we found
                    if ('properties' in block && block.properties.length > 0) {
                        const blockProperty = block.properties[0];
                        // Match property names (they might be transformed, e.g., "trait" -> "traits")
                        if (blockProperty === lastKeyName || blockProperty.startsWith(lastKeyName)) {
                            insertIdx = i;
                            break;
                        }
                    }
                }
            }
            
            blockPositions.push(insertIdx);
        }

        // Insert column-break items in reverse order to avoid index shifting
        for (let i = blockPositions.length - 1; i >= 0; i--) {
            const insertIndex = blockPositions[i];
            const columnBreakId = `column-break-${Date.now()}-${i}-${Math.random()}`;
            
            const columnBreakItem: StatblockItem = {
                type: 'column-break' as const,
                id: columnBreakId
            } as any;
            
            // Insert after the block at insertIndex
            if (insertIndex + 1 <= blocks.length) {
                blocks.splice(insertIndex + 1, 0, columnBreakItem);
            } else {
                blocks.push(columnBreakItem);
            }
        }

        return blocks;
    }

    setCreature(
        params:
            | {
                  monster: Monster;
              }
            | {
                  params: Partial<StatblockParameters>;
              }
    ) {
        if ("params" in params) {
            this.params = params.params;
            this.monster = Object.assign(
                {},
                Bestiary.get(this.params.monster) ??
                    Bestiary.get(this.params.creature)
            );
        } else {
            this.params = {};
            this.monster = params.monster;
        }
    }

    $ui!: Statblock;
    async init() {
        this.containerEl.empty();
        this.monster = (await this.build()) as Monster;
        
        // Inject column-break items based on ---column--- markers in source
        const blocksWithBreaks = this.injectColumnBreaks([...this.layout.blocks]);
        
        this.$ui = new Statblock({
            target: this.containerEl,
            props: {
                context: this.context,
                monster: this.monster,
                statblock: blocksWithBreaks,
                layout: this.layout,
                plugin: this.plugin,
                renderer: this,
                canSave: this.canSave,
                icons: this.icons ?? true
            }
        });
        this.$ui.$on("save", async () => {
            if (
                Bestiary.hasCreature(this.monster.name) &&
                !(await confirmWithModal(
                    this.plugin.app,
                    "This will overwrite an existing monster in settings. Are you sure?"
                ))
            )
                return;
            this.plugin.saveMonster({
                ...fastCopy(this.monster),
                source: this.monster.source ?? "Homebrew",
                layout: this.layout.name
            } as Monster);
        });

        this.$ui.$on("export", () => {
            this.plugin.exportAsPng(
                this.monster.name,
                this.containerEl.firstElementChild!
            );
        });

        let extensionNames = Bestiary.getExtensionNames(
            this.monster,
            new Set()
        );
        this.plugin.registerEvent(
            this.plugin.app.workspace.on(
                "fantasy-statblocks:bestiary:creature-added",
                async (creature) => {
                    if (extensionNames.includes(creature.name)) {
                        this.monster = copy(creature);
                        this.monster = await this.build();
                        this.$ui.$set({ monster: this.monster });
                    }
                }
            )
        );
    }
    transformLinks(monster: Partial<Monster>): Partial<Monster> {
        const built = parseYaml(
            Linkifier.transformYamlSource(
                stringifyYaml(monster).replace(/\\#/g, "#")
            )
        );
        return built;
    }
}

export async function confirmWithModal(
    app: App,
    text: string,
    buttons: { cta: string; secondary: string } = {
        cta: "Yes",
        secondary: "No"
    }
): Promise<boolean> {
    return new Promise((resolve, reject) => {
        const modal = new ConfirmModal(app, text, buttons);
        modal.onClose = () => {
            resolve(modal.confirmed);
        };
        modal.open();
    });
}

export class ConfirmModal extends Modal {
    constructor(
        app: App,
        public text: string,
        public buttons: { cta: string; secondary: string }
    ) {
        super(app);
    }
    confirmed: boolean = false;
    async display() {
        new Promise((resolve) => {
            this.contentEl.empty();
            this.contentEl.addClass("confirm-modal");
            this.contentEl.createEl("p", {
                text: this.text
            });
            const buttonEl = this.contentEl.createDiv(
                "fantasy-calendar-confirm-buttons"
            );
            new ButtonComponent(buttonEl)
                .setButtonText(this.buttons.cta)
                .setCta()
                .onClick(() => {
                    this.confirmed = true;
                    this.close();
                });
            new ButtonComponent(buttonEl)
                .setButtonText(this.buttons.secondary)
                .onClick(() => {
                    this.close();
                });
        });
    }
    onOpen() {
        this.display();
    }
}

function getTraitsList(
    property: keyof Monster,
    obj: Partial<Monster>
): Trait[] {
    const traitArray: Trait[] = [];
    if (property in obj && Array.isArray(obj[property])) {
        for (const trait of obj[property] as any[]) {
            if (
                !Array.isArray(trait) &&
                typeof trait == "object" &&
                "name" in trait
            ) {
                traitArray.push(trait);
            }
            if (Array.isArray(trait) && trait.length >= 1) {
                traitArray.push({
                    name: trait[0],
                    desc: trait.slice(1).join("")
                });
            }
        }
    }
    return traitArray;
}
