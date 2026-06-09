import {
    addIcon,
    MarkdownPostProcessorContext,
    Notice,
    parseYaml,
    Plugin,
    WorkspaceLeaf
} from "obsidian";
import domtoimage from "dom-to-image";

import { getBestiaryByName } from "./data/srd-bestiary";
import StatBlockRenderer from "./view/statblock";
import { nanoid } from "./util/util";
import {
    EXPORT_ICON,
    EXPORT_SYMBOL,
    SAVE_ICON,
    SAVE_SYMBOL
} from "./data/constants";
import type { Monster, StatblockAPI, StatblockParameters } from "../index";
import StatblockSettingTab from "./settings/settings";
import fastCopy from "fast-copy";

import { sort } from "fast-sort";
import {
    type Plugins,
    ExpectedValue,
    HomebrewCreature
} from "obsidian-overload";
import { Watcher } from "./watcher/watcher";
import type { Layout, ParsedDice, StatblockItem } from "../types/layout";
import { Layout5e } from "./layouts/basic 5e/basic5e";
import { StatblockSuggester } from "./suggest";
import { DefaultLayouts } from "./layouts";
import type { StatblockData } from "index";
import LayoutManager from "./layouts/manager";
import CommunityTemplateManager from "./community/manager";
import { CREATURE_VIEW, CreatureView } from "./combatant";
import { API } from "./api/api";
import { Linkifier } from "./util/linkify";

declare global {
    interface Window {
        bestiary: Map<string, Monster>;
        FantasyStatblocks: API;
    }
}
declare module "obsidian" {
    interface App {
        plugins: {
            getPlugin<T extends keyof Plugins>(plugin: T): Plugins[T];
        };
        commands: {
            listCommands: () => Command[];
            executeCommandById: (id: string) => boolean;
        };
        customCss: {
            getSnippetsFolder(): string;
            enabledSnippets: Set<string>;
            snippets: string[];
            requestLoadSnippets(): void;
            setCssEnabledStatus(snippet: string, enabled: boolean): void;
        };
    }
    interface Workspace {
        on(
            name: "dice-roller:rendered-result",
            callback: (result: number) => void
        ): EventRef;
        on(name: "dice-roller:unload", callback: () => void): EventRef;
        on(name: "dice-roller:loaded", callback: () => void): EventRef;
    }
}

export const DICE_ROLLER_SOURCE = "FANTASY_STATBLOCKS_PLUGIN";

const DEFAULT_DATA: StatblockData = {
    monsters: [],
    defaultLayouts: [...DefaultLayouts.map((l) => fastCopy(l))],
    layouts: [],
    default: Layout5e.name,
    useDice: true,
    renderDice: false,
    export: true,
    showAdvanced: false,
    version: {
        major: null,
        minor: null,
        patch: null
    },
    paths: ["/"],
    autoParse: false,
    disableSRD: false,
    tryToRenderLinks: true,
    debug: false,
    notifiedOfFantasy: false,
    hideConditionHelp: false,
    alwaysImport: false,
    defaultLayoutsIntegrated: false,
    atomicWrite: true,
    communityTemplateSource: "",
    communityTemplateSnippets: {}
};

export default class StatBlockPlugin extends Plugin implements StatblockAPI {
    settings: StatblockData;
    data: Map<string, Monster>;
    bestiary: Map<string, Monster>;
    manager = new LayoutManager();
    communityTemplates = new CommunityTemplateManager(this);

    private names: string[];
    #creatures: Monster[];
    api: API = new API(this);

    getBestiaryCreatures() {
        return this.api.getBestiaryCreatures();
    }
    getBestiaryNames() {
        return this.api.getBestiaryNames();
    }
    hasCreature(name: string): boolean {
        return this.api.hasCreature(name);
    }
    getCreatureFromBestiary(name: string): Partial<Monster> | null {
        return this.api.getCreatureFromBestiary(name);
    }

    getExtensions(
        monster: Partial<Monster>,
        extended: Set<string>
    ): Partial<Monster>[] {
        let extensions: Partial<Monster>[] = [fastCopy(monster)];
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
                if (extended.has(extension)) {
                    console.info(
                        "Circular extend dependency detected in " +
                            [...extended]
                    );
                    continue;
                }
                extended.add(monster.name);
                const extensionMonster = this.bestiary.get(extension);
                if (!extensionMonster) continue;
                extensions.push(
                    ...this.getExtensions(extensionMonster, extended)
                );
            }
        }

        return extensions;
    }

    watcher = new Watcher(this);
    private _sorted: Monster[] = [];

    getRoller(str: string) {
        if (!this.canUseDiceRoller) return;
        const roller = this.app.plugins
            .getPlugin("obsidian-dice-roller")
            ?.api.getRollerSync(str, DICE_ROLLER_SOURCE);
        return roller;
    }
    getRollerString(str: string) {
        if (!this.canUseDiceRoller) return str;
        return this.app.plugins
            .getPlugin("obsidian-dice-roller")
            ?.api.getRollerString(str, DICE_ROLLER_SOURCE);
    }
    get canUseDiceRoller() {
        if (this.app.plugins.getPlugin("obsidian-dice-roller") != null) {
            if (!this.app.plugins.getPlugin("obsidian-dice-roller").api) {
                new Notice(
                    "Please update Dice Roller to the latest version to use with Initiative Tracker."
                );
            } else {
                return true;
            }
        }
        return false;
    }

    get sorted() {
        if (this._sorted.length != this.data.size)
            this._sorted = sort<Monster>(Array.from(this.data.values())).asc(
                (m) => m.name
            );
        return this._sorted;
    }
    get sources() {
        return new Set(
            Array.from(this.data.values())
                .map((m) => m.source)
                .flat()
        );
    }

    get creature_view() {
        const leaves = this.app.workspace.getLeavesOfType(CREATURE_VIEW);
        const leaf = leaves?.length ? leaves[0] : null;
        if (leaf && leaf.view && leaf.view instanceof CreatureView)
            return leaf.view;
    }
    async onload() {
        console.log("Fantasy StatBlocks loaded");
        await this.loadSettings();
        await this.loadMonsterData();
        await this.saveSettings();

        this.manager.initialize(this.settings);

        this.watcher.load();

        Linkifier.load();
        this.register(() => Linkifier.unload());

        this.addCommand({
            id: "parse-frontmatter",
            name: "Parse Frontmatter for Creatures",
            callback: () => {
                this.watcher.start(true);
            }
        });
        this.addCommand({
            id: "open-creature-view",
            name: "Open Creature Pane",
            callback: async () => {
                const leaf = this.app.workspace.getRightLeaf(true);
                await leaf.setViewState({
                    type: CREATURE_VIEW
                });
                this.app.workspace.revealLeaf(leaf);
            }
        });
        this.addRibbonIcon("skull", "Open Creature Pane", async () => {
            const leaf = this.app.workspace.getRightLeaf(true);
            await leaf.setViewState({
                type: CREATURE_VIEW
            });
            this.app.workspace.revealLeaf(leaf);
        });

        addIcon(
            "dropzone-grip",
            `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-lines-vertical" class="svg-inline--fa fa-grip-lines-vertical fa-w-8" role="img" viewBox="0 0 256 512"><path fill="currentColor" d="M96 496V16c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16zm128 0V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16z"/></svg>`
            /*  `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grip-vertical" class="svg-inline--fa fa-grip-vertical fa-w-10" role="img" viewBox="0 0 320 512"><path fill="currentColor" d="M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"/></svg>`*/
        );
        addIcon(
            "statblock-conditioned",
            `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far" data-icon="question-circle" class="svg-inline--fa fa-question-circle fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"/></svg>`
        );
        addIcon(
            "dice-roller-dice",
            `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dice" class="svg-inline--fa fa-dice fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"/></svg>`
        );

        addIcon(
            "markdown-icon",
            `<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"/></svg>`
        );

        this.addSettingTab(new StatblockSettingTab(this.app, this));

        addIcon(SAVE_SYMBOL, SAVE_ICON);
        addIcon(EXPORT_SYMBOL, EXPORT_ICON);

        this.bestiary = new Map([
            ...getBestiaryByName(this.settings.disableSRD),
            ...this.data
        ]);

        Object.defineProperty(window, "bestiary", {
            configurable: true,
            get: () => {
                new Notice(
                    createFragment((e) => {
                        e.createSpan({
                            text: "The Fantasy Statblocks bestiary will be deprecated in a future version. Use "
                        });
                        e.createEl("code", {
                            text: "FantasyStatblocks.getBestiary()"
                        });
                        e.createSpan({ text: " instead." });
                    })
                );
                return this.bestiary;
            }
        });

        this.register(() =>
            Object.defineProperty(window, "bestiary", { value: null })
        );

        (window["FantasyStatblocks"] = this.api) &&
            this.register(() => delete window["FantasyStatblocks"]);

        this.registerMarkdownCodeBlockProcessor(
            "statblock",
            this.postprocessor.bind(this)
        );

        this.registerEditorSuggest(new StatblockSuggester(this));

        this.registerView(
            CREATURE_VIEW,
            (leaf: WorkspaceLeaf) => new CreatureView(leaf, this)
        );
        this.registerEvent(
            this.app.workspace.on("dice-roller:unload", () => {
                //why did i do this?
                /* this.settings.useDice = false; */
            })
        );
        if (this.canUseDiceRoller) {
            this.app.plugins
                .getPlugin("obsidian-dice-roller")
                ?.api.registerSource(DICE_ROLLER_SOURCE, {
                    showDice: true,
                    shouldRender: this.settings.renderDice,
                    showFormula: false,
                    showParens: false,
                    expectedValue: ExpectedValue.Average,
                    text: null
                });
        }
        this.registerEvent(
            this.app.workspace.on("dice-roller:loaded", () => {
                this.app.plugins
                    .getPlugin("obsidian-dice-roller")
                    ?.api.registerSource(DICE_ROLLER_SOURCE, {
                        showDice: true,
                        shouldRender: this.settings.renderDice,
                        showFormula: false,
                        showParens: false,
                        expectedValue: ExpectedValue.Average,
                        text: null
                    });
            })
        );
    }
    async loadSettings() {
        const settings: StatblockData = await this.loadData();

        if (settings != undefined && !("version" in settings)) {
            //1.X settings;
            this.settings = { ...DEFAULT_DATA };
            this.settings.monsters = settings;

            await this.loadMonsterData();

            new Notice(
                "5e Statblocks is now TTRPG Statblocks. Check out the ReadMe for more information!"
            );
        } else {
            if (
                settings &&
                settings?.version?.major >= 2 &&
                settings?.version?.minor >= 25 &&
                !settings?.notifiedOfFantasy
            ) {
                new Notice("TTRPG Statblocks is now Fantasy Statblocks!");
                settings.notifiedOfFantasy = true;
            }
            this.settings = {
                ...DEFAULT_DATA,
                ...settings
            };
        }
        if (!this.settings.defaultLayoutsIntegrated) {
            for (const layout of this.settings.layouts) {
                layout.id = nanoid();
            }
            this.settings.default = (
                this.layouts.find(
                    ({ name }) => name == this.settings.default
                ) ?? Layout5e
            ).id;

            this.settings.defaultLayoutsIntegrated = true;
        }
        if (this.settings.defaultLayouts.length != DefaultLayouts.length) {
            for (const layout of DefaultLayouts) {
                if (this.settings.defaultLayouts.find((l) => l.id == layout.id))
                    continue;
                this.settings.defaultLayouts.push(fastCopy(layout));
            }
            for (const layout of this.settings.defaultLayouts) {
                if (DefaultLayouts.find((l) => l.id == layout.id)) continue;
                this.settings.layouts.push(layout);
                this.settings.defaultLayouts.splice(
                    this.settings.defaultLayouts.indexOf(layout),
                    1
                );
            }
            this.settings.layouts = this.settings.layouts.filter(
                (layout) =>
                    !this.settings.defaultLayouts.find((l) => l.id == layout.id)
            );
        }
        for (const layout of DefaultLayouts) {
            if (!layout.version) continue;
            const existing = this.settings.defaultLayouts.find(
                (l) => l.id === layout.id
            );
            if (existing.version >= layout.version) continue;
            if (existing.edited) {
                existing.updatable = true;
                continue;
            }
            existing.blocks = fastCopy(layout.blocks);
        }

        function fixSpells(...blocks: StatblockItem[]) {
            for (const block of blocks) {
                if (block.type == "spells") {
                    if (!block.properties.length)
                        block.properties.push("spells");
                }
                if ("nested" in block) {
                    fixSpells(...block.nested);
                }
            }
        }
        for (const layout of this.settings.layouts) {
            fixSpells(...layout.blocks);
        }

        const version = this.manifest.version.split(".");
        this.settings.version = {
            major: Number(version[0]),
            minor: Number(version[1]),
            patch: Number(version[2])
        };
    }
    async saveSettings() {
        this.settings.monsters = this._transformData(this.data);
        this.bestiary = new Map([
            ...getBestiaryByName(this.settings.disableSRD),
            ...this.data
        ]);

        await this.saveData(this.settings);
    }
    async loadData(): Promise<StatblockData> {
        return (await super.loadData()) as StatblockData;
    }
    async saveData(settings: StatblockData) {
        if (this.settings.atomicWrite) {
            try {
                await this.app.vault.adapter.write(
                    `${this.manifest.dir}/temp.json`,
                    JSON.stringify(settings, null, null)
                );

                await this.app.vault.adapter.remove(
                    `${this.manifest.dir}/data.json`
                );
                await this.app.vault.adapter.rename(
                    `${this.manifest.dir}/temp.json`,
                    `${this.manifest.dir}/data.json`
                );
            } catch (e) {
                super.saveData(settings);
            }
        } else {
            super.saveData(settings);
        }
    }

    async loadMonsterData() {
        const data = this.settings.monsters;

        if (!data) this.data = new Map();

        this.data = new Map(
            data?.map(([name, monster]) => {
                return [name, fastCopy(monster)];
            }) ?? []
        );
    }

    async saveMonster(
        monster: Monster,
        sortFields: boolean = true,
        save: boolean = true
    ) {
        if (!monster.name) return;
        this.data.set(monster.name, monster);
        this.bestiary.set(monster.name, monster);
        this.api.setChanged(true);

        if (save) {
            await this.saveSettings();
        }

        if (sortFields)
            this._sorted = sort<Monster>(Array.from(this.data.values())).asc(
                (m) => m.name
            );
    }
    async saveMonsters(monsters: Monster[]) {
        for (let monster of monsters) {
            await this.saveMonster(monster, false, false);
        }
        this._sorted = sort<Monster>(Array.from(this.data.values())).asc(
            (m) => m.name
        );
        await this.saveSettings();
    }

    async updateMonster(oldMonster: Monster, newMonster: Monster) {
        this.data.delete(oldMonster.name);
        await this.saveMonster(newMonster);
    }

    async deleteMonsters(...monsters: string[]) {
        for (const monster of monsters) {
            if (!this.data.has(monster)) continue;
            this.data.delete(monster);
            this.bestiary.delete(monster);
            this.api.setChanged(true);
        }
        await this.saveSettings();

        this._sorted = sort<Monster>(Array.from(this.data.values())).asc(
            (m) => m.name
        );
    }

    async deleteMonster(monster: string, sortFields = true, save = true) {
        if (!this.data.has(monster)) return;
        this.data.delete(monster);
        this.bestiary.delete(monster);

        if (getBestiaryByName(this.settings.disableSRD).has(monster)) {
            this.bestiary.set(
                monster,
                getBestiaryByName(this.settings.disableSRD).get(monster)
            );
        }
        this.api.setChanged(true);

        if (save) await this.saveSettings();

        if (sortFields)
            this._sorted = sort<Monster>(Array.from(this.data.values())).asc(
                (m) => m.name
            );
    }

    private _transformData(
        data: Map<string, Monster>
    ): Array<[string, Monster]> {
        return [...(data ?? [])].map(([name, monster]) => {
            return [name, fastCopy(monster)];
        });
    }
    onunload() {
        this.watcher.unload();
        console.log("Fantasy StatBlocks unloaded");

        this.app.workspace
            .getLeavesOfType(CREATURE_VIEW)
            .forEach((leaf) => leaf.detach());
    }

    exportAsPng(name: string, containerEl: Element) {
        function filter(node: HTMLElement) {
            return !node.hasClass || !node.hasClass("clickable-icon");
        }
        const content =
            containerEl.querySelector<HTMLDivElement>(".statblock-content");
        if (content) delete content.style["boxShadow"];
        domtoimage
            .toPng(containerEl, {
                filter: filter,
                style: { height: "100%" }
            })
            .then((url) => {
                const link = document.createElement("a");
                link.download = name + ".png";
                link.href = url;
                link.click();
                link.detach();
            })
            .catch((e) => {
                new Notice(
                    `There was an error creating the image: \n\n${e.message}`
                );
                console.error(e);
            });
    }

    parseForDice(property: string) {
        const roller = (prop: ParsedDice) => {
            if (typeof prop !== "string") return prop;

            let text: string;
            let original: string;

            if (/\d+\s\(\d+d\d+(?:\s*[+\-]\s*\d+)?\)/.test(prop)) {
                let [, base, dice] =
                    prop.match(/(\d+)\s\((\d+d\d+(?:\s*[+\-]\s*\d+)?)\)/) ?? [];
                if (!isNaN(Number(base)) && dice) {
                    text = dice;
                }
            } else if (/. [\+\-]\d+/.test(prop)) {
                let [, save, sign, number] =
                    prop.match(/(.) ([\+\-])(\d+)/) ?? [];
                let mult = 1;
                if (sign === "-") {
                    mult = -1;
                }
                if (!isNaN(Number(number))) {
                    text = `1d20+${mult * Number(number)}`;
                    original = `${save} ${sign}${number}`;
                }
            } else if (/[\+\-]\d+ to hit/.test(prop)) {
                let [, sign, number] = prop.match(/([\+\-])(\d+)/) ?? [];

                let mult = 1;
                if (sign === "-") {
                    mult = -1;
                }
                if (!isNaN(Number(number))) {
                    text = `1d20+${mult * Number(number)}`;
                    original = prop;
                }
            }
            return { text, original };
        };

        /**
         * Rolling to hit: +15 to hit
         */
        let regexes = [
            /([\+\-]\d+ to hit)/,
            /(\d+\s\(\d+d\d+(?:\s*[+\-]\s*\d+)?\))/,
            /. [\+\-]\d+/
        ];
        let split: ParsedDice[] = [property];

        for (const regex of regexes) {
            let temp: ParsedDice[] = [];
            for (const prop of split) {
                if (typeof prop !== "string") {
                    temp.push(prop);
                    continue;
                }
                const splitProp = prop.split(regex);
                for (const prop of splitProp) {
                    if (!regex.test(prop)) {
                        temp.push(prop);
                    } else {
                        temp.push(roller(prop));
                    }
                }
            }
            split = [...temp];
        }

        return split;
    }

    get layouts() {
        return this.manager.getAllLayouts();
    }

    get defaultLayout() {
        return this.manager.getDefaultLayout();
    }

    getLayoutOrDefault(monster: Monster): Layout {
        return this.manager.getLayoutOrDefault(monster.layout);
    }

    async postprocessor(
        source: string,
        el: HTMLElement,
        ctx: MarkdownPostProcessorContext
    ) {
        try {
            /** Replace Links */
            source = Linkifier.transformSource(source);

            /** Get Parameters */
            let params: StatblockParameters = parseYaml(source);

            el.addClass("statblock-plugin-container");
            el.parentElement?.addClass("statblock-plugin-parent");

            let statblock = new StatBlockRenderer({
                container: el,
                plugin: this,
                params,
                context: ctx.sourcePath
            });

            ctx.addChild(statblock);
        } catch (e) {
            console.error(`Obsidian Statblock Error:\n${e}`);
            let pre = createEl("pre");
            pre.setText(`\`\`\`statblock
There was an error rendering the statblock:
${e.stack
    .split("\n")
    .filter((line: string) => !/^at/.test(line?.trim()))
    .join("\n")}
\`\`\``);
        }
    }

    render(creature: HomebrewCreature, el: HTMLElement, display?: string) {
        const monster: Monster = Object.assign<
            Partial<Monster>,
            HomebrewCreature
        >(
            {},
            fastCopy(this.bestiary.get(creature.name) ?? {}),
            //@ts-ignore
            fastCopy(creature)
        ) as Monster;
        if (!monster) return null;
        if (display) {
            monster.name = display;
        }
        return new StatBlockRenderer({
            container: el,
            monster,
            plugin: this,
            context: "STATBLOCK_RENDERER"
        });
    }
}
