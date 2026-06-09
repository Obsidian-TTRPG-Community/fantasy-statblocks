import {
    App,
    ButtonComponent,
    Modal,
    TFile,
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
    SavesItem,
    StatblockItem,
    TraitsItem
} from "types/layout";
import type Collapse from "./ui/Collapse.svelte";
import { append } from "src/util/util";
import { Linkifier } from "src/util/linkify";

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
    topBar: HTMLDivElement;
    bottomBar: HTMLDivElement;
    loaded: boolean = false;
    statblockEl: HTMLDivElement;
    contentEl: HTMLDivElement;
    container: HTMLElement;
    monster: Monster;
    plugin: StatBlockPlugin;
    params: Partial<StatblockParameters>;
    context: string;
    layout: Layout;
    constructor(public rendererParameters: RendererParameters) {
        super(rendererParameters.container);

        this.container = rendererParameters.container;
        this.plugin = rendererParameters.plugin;
        this.context = rendererParameters.context ?? "";
        if ("params" in rendererParameters) {
            this.params = rendererParameters.params;
            this.monster = Object.assign(
                {},
                this.plugin.bestiary.get(this.params.monster) ??
                    this.plugin.bestiary.get(this.params.creature)
            );
        } else {
            this.params = {};
            this.monster = rendererParameters.monster;
        }
        this.setLayout();

        this.init();
    }
    setLayout() {
        // An explicitly supplied layout (e.g. previewing a not-yet-installed
        // community template) takes precedence over name-based resolution.
        if (this.rendererParameters.layout) {
            this.layout = this.rendererParameters.layout;
            return;
        }
        this.layout =
            this.plugin.layouts.find(
                (layout) =>
                    layout.name ==
                        (this.params.layout ?? this.monster.layout) ||
                    layout.name ==
                        (this.params.statblock ?? this.monster.statblock)
            ) ?? this.plugin.defaultLayout;
    }
    get canSave() {
        return "name" in this.params;
    }

    async build(): Promise<Partial<Monster>> {
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
            const file = await app.metadataCache.getFirstLinkpathDest(
                `${note}`,
                this.context ?? ""
            );
            if (file && file instanceof TFile) {
                const cache = await app.metadataCache.getFileCache(file);
                Object.assign(
                    built,
                    fastCopy(cache.frontmatter) ?? {},
                    this.params
                );
            }
        }
        if ("image" in built) {
            if (Array.isArray(built.image)) {
                built.image = built.image.flat(2).join("");
            }
        }

        const extensions = this.getExtensions(built);

        /**
         * At this point, the built creature has been fully resolved from all
         * extensions and in-memory creature definitions.
         */
        built = Object.assign({}, ...extensions, built);

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
                        const $TRAIT_MAP: Map<string, Trait> = new Map();
                        let $ADDITIVE_TRAITS: Trait[] = [];
                        let $DELETE_TRAITS: Set<string> = new Set();
                        /** Add traits from the extensions group first. */
                        for (const extension of extensions) {
                            let traits = getTraitsList(property, extension);
                            for (const trait of traits) {
                                $TRAIT_MAP.set(trait.name, trait);
                            }

                            traits = getTraitsList(
                                `${property}+` as keyof Monster,
                                extension
                            );
                            for (const trait of traits) {
                                $ADDITIVE_TRAITS.push(trait);
                            }
                            traits = getTraitsList(
                                `${property}-` as keyof Monster,
                                extension
                            );
                            for (const trait of traits) {
                                $DELETE_TRAITS.add(trait.name);
                            }
                        }
                        //next, underlying monster object
                        let traits = getTraitsList(property, this.monster);
                        for (const trait of traits) {
                            if (!(property in this.params)) {
                                $TRAIT_MAP.delete(trait.name);
                                $ADDITIVE_TRAITS.push(trait);
                            } else {
                                $TRAIT_MAP.set(trait.name, trait);
                            }
                        }
                        traits = getTraitsList(
                            `${property}+` as keyof Monster,
                            this.monster
                        );
                        for (const trait of traits) {
                            $ADDITIVE_TRAITS.push(trait);
                        }
                        traits = getTraitsList(
                            `${property}-` as keyof Monster,
                            this.monster
                        );
                        for (const trait of traits) {
                            $DELETE_TRAITS.add(trait.name);
                        }

                        /** Remove these traits first, so you don't get hit by the params */
                        traits = getTraitsList(
                            `${property}-` as keyof Monster,
                            this.params
                        );
                        for (const trait of traits) {
                            $DELETE_TRAITS.add(trait.name);
                        }
                        for (const trait of $DELETE_TRAITS) {
                            $TRAIT_MAP.delete(trait);
                            $ADDITIVE_TRAITS = $ADDITIVE_TRAITS.filter(
                                (t) => t.name !== trait
                            );
                        }
                        //finally, the parameters should always be added
                        traits = getTraitsList(property, this.params);
                        for (const trait of traits) {
                            $TRAIT_MAP.delete(trait.name);
                            $ADDITIVE_TRAITS.push(trait);
                        }

                        traits = getTraitsList(
                            `${property}+` as keyof Monster,
                            this.params
                        );

                        for (const trait of traits) {
                            $ADDITIVE_TRAITS.push(trait);
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
        this.monster = built as Monster;

        return built;
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

    async init() {
        const statblock = new Statblock({
            target: this.containerEl,
            props: {
                context: this.context,
                monster: await this.build(),
                statblock: this.layout.blocks,
                layout: this.layout.name,
                plugin: this.plugin,
                renderer: this,
                canSave: this.canSave
            }
        });
        statblock.$on("save", async () => {
            if (
                this.plugin.bestiary.has(this.monster.name) &&
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
            });
        });

        statblock.$on("export", () => {
            this.plugin.exportAsPng(
                this.monster.name,
                this.containerEl.firstElementChild
            );
        });
    }
    transformLinks(monster: Partial<Monster>): Partial<Monster> {
        const built = parseYaml(
            Linkifier.transformYamlSource(
                stringifyYaml(monster).replace(/\\#/g, "#")
            )
        );
        return built;
    }
    getExtensions(monster: Partial<Monster>): Partial<Monster>[] {
        let extensions: Partial<Monster>[] = [];
        if (
            !("extends" in monster) ||
            !(
                Array.isArray(monster.extends) ||
                typeof monster.extends == "string"
            )
        ) {
            return extensions;
        }
        if (monster.extends && monster.extends.length) {
            for (const extension of [monster.extends].flat()) {
                const extensionMonster = this.plugin.bestiary.get(extension);
                if (!extensionMonster) continue;
                extensions.push(
                    extensionMonster,
                    ...this.getExtensions(extensionMonster)
                );
            }
        }

        return extensions;
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
