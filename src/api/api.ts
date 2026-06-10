import fastCopy from "fast-copy";
import type { Monster } from "index";
import { Component, MarkdownRenderer } from "obsidian";
import type { HomebrewCreature } from "obsidian-overload";
import { Bestiary } from "src/bestiary/bestiary";
import type StatBlockPlugin from "src/main";
import { LinkStringifier } from "src/parser/stringifier";
import StatBlockRenderer from "src/view/statblock";

declare global {
    interface Window {
        FantasyStatblocks: API;
    }
}

declare module "obsidian" {
    interface Workspace {
        on(name: "fantasy-statblocks:loaded", callback: () => void): EventRef;
        on(
            name: "fantasy-statblocks:bestiary:resolved",
            callback: () => void
        ): EventRef;
        on(
            name: "fantasy-statblocks:bestiary:updated",
            callback: () => void
        ): EventRef;
    }
}
export class API {
    #plugin: StatBlockPlugin;
    constructor(plugin: StatBlockPlugin) {
        this.#plugin = plugin;
    }

    getVersion(): {
        major: number;
        minor: number;
        patch: number;
    } {
        return this.#plugin.settings.version;
    }

    /**
     * Get the fully defined plugin bestiary.
     *
     * @returns {Map<string, Monster>}
     */
    getBestiary() {
        return Bestiary.getBestiary();
    }

    /**
     * Get a list of bestiary creatures.
     *
     * @returns {Monster[]}
     */
    getBestiaryCreatures(): Monster[] {
        return Bestiary.getBestiaryCreatures();
    }

    /**
     * Get a list of bestiary names.
     *
     * @returns {string[]}
     */
    getBestiaryNames(): string[] {
        return Bestiary.getBestiaryNames();
    }

    /**
     * Returns true if the bestiary contains the creature.
     *
     * @param {string} name
     * @returns {boolean}
     */
    hasCreature(name: string): boolean {
        return Bestiary.hasCreature(name);
    }

    /**
     * Retrieve a fully defined creature out of the bestiary, resolving all extensions.
     *
     * @param {string} name Name of the creautre to retrieve.
     * @returns {Partial<Monster> | null} The creature from the bestiary, or null if not present.
     */
    getCreatureFromBestiary(name: string): Partial<Monster> | null {
        return Bestiary.getCreatureFromBestiarySync(name);
    }
    /**
     * Retrieve a fully defined creature out of the bestiary, resolving all extensions.
     *
     * @param {string} name Name of the creautre to retrieve.
     * @returns {Partial<Monster> | null} The creature from the bestiary, or null if not present.
     */
    async getCreature(name: string): Promise<Partial<Monster> | null> {
        return await Bestiary.getCreatureFromBestiary(name);
    }

    /**
     * Gets an array of monsters sorted by the specified field.
     *
     * @param {string} field - The field by which monsters should be sorted.
     * @returns {Array<Monster>} - An array of monsters sorted by the specified field.
     */
    getSortedBy(field: string): Array<Monster> {
        return Bestiary.getSortedBy(field);
    }
    /**
     * Registers a callback to be invoked when monsters are sorted by the specified field.
     *
     * @param {string} field - The field by which monsters are sorted.
     * @param {(values: Array<Monster>) => void} cb - The callback function to be invoked when sorting occurs.
     * @returns {() => void} - A function that can be used to unregister the callback.
     */
    onSortedBy(
        field: string,
        cb: (values: Array<Monster>) => void
    ): () => void {
        return Bestiary.onSortedBy(field, cb);
    }
    /**
     * Registers a custom sorter function for sorting monsters by the specified field.
     *
     * @param {string} field - The field by which monsters should be sorted.
     * @param {(a: Monster, b: Monster) => number} compareFn - The comparison function used for sorting.
     */
    registerSorter(
        field: string,
        compareFn: (a: Monster, b: Monster) => number
    ) {
        return Bestiary.registerSorter(field, compareFn);
    }

    /**
     * Gets an array of indices.
     *
     * @returns {Array<string>} - An array of indices.
     */
    getIndices() {
        return Bestiary.getIndices();
    }
    /**
     * Gets the index map for the specified field.
     *
     * @param {string} field - The field for which the index map is retrieved.
     * @returns {Map<string, Set<string>>} - The index map for the specified field.
     */
    getIndex(field: string): Map<string, Set<string>> {
        return Bestiary.getIndex(field);
    }
    /**
     * Registers an index for the specified field.
     *
     * @param {string} field - The field for which the index is registered.
     */
    registerIndex(field: string) {
        return Bestiary.registerIndex(field);
    }
    /**
     * Registers a callback to be invoked when the specified index is updated.
     *
     * @param {string} index - The index for which the callback is registered.
     * @param {() => void} callback - The callback function to be invoked when the index is updated.
     * @returns {() => void} - A function that can be used to unregister the callback.
     */
    onIndexUpdated(index: string, callback: () => void): () => void {
        return Bestiary.onIndexUpdated(index, callback);
    }

    isResolved(): boolean {
        return Bestiary.isResolved();
    }
    onResolved(callback: () => void) {
        return Bestiary.onResolved(callback);
    }
    onUpdated(callback: () => void) {
        return Bestiary.onUpdated(callback);
    }

    render(
        creature: HomebrewCreature,
        el: HTMLElement,
        display?: string
    ): Component {
        const monster: Monster = Object.assign<
            Partial<Monster>,
            HomebrewCreature
        >(
            {},
            fastCopy(this.getCreatureFromBestiary(creature.name ?? "") ?? {}),
            //@ts-ignore
            fastCopy(creature)
        ) as Monster;
        if (!monster) return new Component();
        if (display) {
            monster.name = display;
        }
        return new StatBlockRenderer({
            container: el,
            monster,
            plugin: this.#plugin,
            context: "STATBLOCK_RENDERER"
        });
    }

    //Links
    isStatblockLink(link: string): boolean {
        return LinkStringifier.isStatblockLink(link);
    }
    parseStatblockLink(link: string): string {
        return LinkStringifier.stringifyLinks(link);
    }
    /**
     * Replaces any already transformed links back into their original link type.
     * @param source
     * @returns {string} The corrected string.
     */
    stringifyLinks(source: string): string {
        return LinkStringifier.stringifyLinks(source);
    }
    /**
     * This method can be used to replace any markdown or wikilinks in a source, so that it
     * can safely be transformed into YAML.
     *
     * @param {string} source The string to be transformed.
     * @returns {string} A transformed source, with links replaced.
     */
    transformLinks(source: string): string {
        return LinkStringifier.transformSource(source);
    }

    /**
     * Renders markdown string to an HTML element using Obsidian's Markdown renderer.
     * @param markdown — The markdown source code
     * @param el — The element to append to
     * @param sourcePath — The normalized path of this markdown file, used to resolve relative internal links
     * @param component — A parent component to manage the lifecycle of the rendered child components.
     */
    renderMarkdown(
        markdown: string,
        el: HTMLElement,
        sourcePath = "",
        component = this.#plugin
    ): void {
        MarkdownRenderer.render(
            this.#plugin.app,
            markdown,
            el,
            sourcePath,
            component
        );
    }
}
