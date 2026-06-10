import fastCopy from "fast-copy";
import type { Monster } from "index";
import type StatBlockPlugin from "src/main";
import { Watcher } from "src/watcher/watcher";
import { BESTIARY_BY_NAME } from "./srd-bestiary";
import { stringify } from "src/util/util";
import type { EventRef, Events, Workspace } from "obsidian";

declare module "obsidian" {
    interface Workspace {
        trigger(name: "fantasy-statblocks:bestiary:resolved"): void;
        trigger(name: "fantasy-statblocks:bestiary:updated"): void;
        trigger(
            name: "fantasy-statblocks:bestiary:creature-added",
            creature: Monster
        ): void;
        trigger<T extends string>(
            name: `fantasy-statblocks:bestiary:indexed:${T}`
        ): void;
        trigger<T extends string>(
            name: `fantasy-statblocks:bestiary:sorted:${T}`,
            values: Array<Monster>
        ): void;
        on(
            name: `fantasy-statblocks:bestiary:creature-added`,
            callback: (creature: Monster) => void
        ): EventRef;
        on<T extends string>(
            name: `fantasy-statblocks:bestiary:indexed:${T}`,
            callback: () => void
        ): EventRef;
        on<T extends string>(
            name: `fantasy-statblocks:bestiary:sorted:${T}`,
            callback: (values: Array<Monster>) => void
        ): EventRef;
    }
}

class BestiaryClass {
    #bestiary: Map<string, Monster> = new Map();
    #local: Map<string, Monster> = new Map();
    #ephemeral: Map<string, Monster> = new Map();

    #resolved = false;

    enableSRD: boolean;

    #indices: Map<string, Map<string, Set<string>>> = new Map();

    #sorters: Map<string, (a: Monster, b: Monster) => number> = new Map();
    #sorted: Map<string, Array<Monster>> = new Map();

    getSortedBy(field: string): Array<Monster> {
        return this.#sorted.get(field) ?? [];
    }
    onSortedBy(
        field: string,
        cb: (values: Array<Monster>) => void
    ): () => void {
        let ref = this.#events.on(
            `fantasy-statblocks:bestiary:sorted:${field}`,
            (values) => cb(values)
        );

        return () => {
            this.#events.offref(ref);
        };
    }

    registerSorter(
        field: string,
        compareFn: (a: Monster, b: Monster) => number
    ) {
        if (!this.#sorters.has(field)) {
            this.#sorters.set(field, compareFn);
        }
        this.#triggerSort(field);
    }

    #triggerSort(...fields: string[]) {
        if (!this.isResolved()) return;
        setTimeout(() => {
            for (const field of fields && fields.length
                ? fields
                : [...this.#sorters.keys()]) {
                this.#sorted.set(
                    field,
                    this.getBestiaryCreatures().sort((a, b) =>
                        this.#sorters.get(field)(a, b)
                    )
                );
                this.#events.trigger(
                    `fantasy-statblocks:bestiary:sorted:${field}`,
                    this.getSortedBy(field)
                );
            }
        }, 0);
    }

    getIndices() {
        return this.#indices;
    }
    getIndex(field: string): Map<string, Set<string>> {
        return this.#indices.get(field) ?? new Map();
    }
    registerIndex(field: string) {
        if (this.#indices.has(field)) return;
        this.#indices.set(field, new Map());
    }

    onIndexUpdated(index: string, callback: () => void): () => void {
        if (!this.#indices.has(index)) return () => {};
        let ref: EventRef = this.#events.on(
            `fantasy-statblocks:bestiary:indexed:${index}`,
            () => callback()
        );

        return () => {
            this.#events.offref(ref);
        };
    }
    #events: Workspace;
    initialize(plugin: StatBlockPlugin) {
        this.registerIndex("source");
        this.registerSorter("name", (a, b) => a.name.localeCompare(b.name));

        this.#events = plugin.app.workspace;

        Watcher.initialize(plugin).load();

        plugin.addCommand({
            id: "parse-frontmatter",
            name: "Parse Frontmatter for Creatures",
            callback: () => {
                Watcher.start(true);
            }
        });
        plugin.register(() => Watcher.unload());

        plugin.registerEvent(
            plugin.app.workspace.on("fantasy-statblocks:srd-change", (srd) => {
                this.enableSRD = srd;
                if (srd) {
                    this.#bestiary = new Map([
                        ...BESTIARY_BY_NAME,
                        ...this.#bestiary
                    ]);
                } else {
                    this.#bestiary = new Map([
                        ...this.#local,
                        ...this.#ephemeral
                    ]);
                }
            })
        );
        this.enableSRD = !plugin.settings.disableSRD;
        if (this.enableSRD) {
            this.#bestiary = new Map(BESTIARY_BY_NAME);
        }
        for (const [, creature] of plugin.settings.monsters) {
            this.addLocalCreature(creature);
        }
    }

    #addToIndex(creature: Monster) {
        setTimeout(() => {
            for (const [field, map] of this.#indices) {
                if (field in creature) {
                    let values = [];
                    if (Array.isArray(creature[field as keyof Monster])) {
                        for (const _v of creature[
                            field as keyof Monster
                        ] as Array<any>) {
                            values.push(stringify(_v));
                        }
                    } else {
                        values.push(
                            stringify(creature[field as keyof Monster])
                        );
                    }

                    for (const value of values) {
                        if (!map.has(value)) {
                            map.set(value, new Set([creature.name]));
                        } else {
                            map.get(value).add(creature.name);
                        }
                    }

                    this.#events.trigger(
                        `fantasy-statblocks:bestiary:indexed:${field}`
                    );
                }
            }
        }, 0);
    }
    #removeFromIndex(creature: Monster) {
        setTimeout(() => {
            for (const [field, map] of this.#indices) {
                if (field in creature) {
                    const value = stringify(creature[field as keyof Monster]);
                    if (map.has(value)) {
                        map.get(value).delete(creature.name);
                    }
                    this.#events.trigger(
                        `fantasy-statblocks:bestiary:indexed:${field}`
                    );
                }
            }
        }, 0);
    }

    hasLocal(name: string) {
        return this.#local.has(name);
    }
    getLocal(name: string) {
        return this.#local.get(name);
    }
    isLocal(name: string) {
        return (
            this.#local.has(name) &&
            this.#bestiary.get(name) === this.#local.get(name)
        );
    }
    addLocalCreature(creature: Monster) {
        if (!creature.name) return;
        this.#local.set(creature.name, creature);
        this.#bestiary.set(creature.name, creature);
        this.#addToIndex(creature);
        this.#triggerUpdatedCallbacks();
        this.#triggerSort();
    }
    removeLocalCreature(name: string) {
        if (
            this.#bestiary.has(name) &&
            this.#bestiary.get(name) === this.#local.get(name)
        ) {
            this.#bestiary.delete(name);
        }
        this.#removeFromIndex(this.#local.get(name));
        this.#local.delete(name);
        if (this.#ephemeral.has(name)) {
            this.#bestiary.set(name, this.#ephemeral.get(name));
        } else if (this.enableSRD && BESTIARY_BY_NAME.has(name)) {
            this.#bestiary.set(name, BESTIARY_BY_NAME.get(name));
        }
        this.#triggerUpdatedCallbacks();
        this.#triggerSort();
    }
    addEphemeralCreature(creature: Monster) {
        if (!creature.name) return;
        this.#ephemeral.set(creature.name, creature);
        this.#bestiary.set(creature.name, creature);
        this.#events.trigger(
            "fantasy-statblocks:bestiary:creature-added",
            creature
        );
        this.#addToIndex(creature);
        this.#triggerSort();
        this.#triggerUpdatedCallbacks();
    }
    removeEphemeralCreature(name: string) {
        this.#removeFromIndex(this.#bestiary.get(name));
        this.#bestiary.delete(name);
        this.#ephemeral.delete(name);
        this.#triggerUpdatedCallbacks();
        this.#triggerSort();
    }

    removeCreatures(...names: string[]) {
        for (const name of names) {
            if (this.isLocal(name)) {
                this.removeLocalCreature(name);
            } else {
                this.removeEphemeralCreature(name);
            }
        }
    }

    isResolved() {
        return this.#resolved;
    }
    setResolved(resolved: boolean) {
        this.#resolved = resolved;
        if (resolved) {
            this.#events.trigger("fantasy-statblocks:bestiary:resolved");

            this.#triggerUpdatedCallbacks();
            this.#triggerSort();
        }
    }

    onResolved(callback: () => void): () => void {
        let ref: EventRef;
        if (this.isResolved()) {
            callback();
        } else {
            ref = this.#events.on("fantasy-statblocks:bestiary:resolved", () =>
                callback()
            );
        }
        return () => {
            if (!ref) return;
            this.#events.offref(ref);
        };
    }
    onUpdated(callback: () => void): () => void {
        let ref: EventRef;
        if (this.isResolved()) {
            callback();
        } else {
            ref = this.#events.on("fantasy-statblocks:bestiary:updated", () =>
                callback()
            );
        }
        return () => {
            if (!ref) return;
            this.#events.offref(ref);
        };
    }

    #triggerUpdatedCallbacks() {
        if (this.isResolved()) {
            this.#events.trigger("fantasy-statblocks:bestiary:updated");
        }
    }
    size() {
        return this.#bestiary.size;
    }

    /**
     * Get the fully defined plugin bestiary.
     *
     * @returns {Map<string, Monster>}
     */
    getBestiary() {
        return this.#bestiary;
    }

    /**
     * Get a list of bestiary creatures.
     *
     * @returns {Monster[]}
     */
    getBestiaryCreatures(): Monster[] {
        return Array.from(this.#bestiary.values());
    }

    /**
     * Get a list of bestiary names.
     *
     * @returns {string[]}
     */
    getBestiaryNames(): string[] {
        return Array.from(this.#bestiary.keys()).sort();
    }

    /**
     * Returns true if the bestiary contains the creature.
     *
     * @param {string} name
     * @returns {boolean}
     */
    hasCreature(name: string): boolean {
        return this.#bestiary.has(name);
    }
    getExtensions(
        creature: Partial<Monster>,
        extended: Set<string>
    ): Partial<Monster>[] {
        let extensions: Partial<Monster>[] = [fastCopy(creature)];
        if (
            !("extends" in creature) ||
            !(
                Array.isArray(creature.extends) ||
                typeof creature.extends == "string"
            )
        ) {
            return extensions;
        }
        if (creature.extends && creature.extends.length) {
            for (const extension of [creature.extends].flat()) {
                if (extended.has(extension)) {
                    console.info(
                        "Circular extend dependency detected in " +
                            [...extended]
                    );
                    continue;
                }
                extended.add(creature.name);
                const extensionMonster = this.#bestiary.get(extension);
                if (!extensionMonster) continue;
                extensions.push(
                    ...this.getExtensions(extensionMonster, extended)
                );
            }
        }

        return extensions;
    }
    getExtensionNames(
        creature: Partial<Monster>,
        extended: Set<string>
    ): string[] {
        let extensions: string[] = [creature.name];
        if (
            !("extends" in creature) ||
            !(
                Array.isArray(creature.extends) ||
                typeof creature.extends == "string"
            )
        ) {
            return extensions;
        }
        if (creature.extends && creature.extends.length) {
            for (const extension of [creature.extends].flat()) {
                if (extended.has(extension)) {
                    console.info(
                        "Circular extend dependency detected in " +
                            [...extended]
                    );
                    continue;
                }
                extended.add(creature.name);
                const extensionMonster = this.#bestiary.get(extension);
                if (!extensionMonster) continue;
                extensions.push(
                    ...this.getExtensionNames(extensionMonster, extended)
                );
            }
        }

        return extensions;
    }

    /**
     * Retrieve a fully defined creature out of the bestiary, resolving all extensions.
     *
     * @param {string} name Name of the creature to retrieve.
     * @returns {Partial<Monster> | null} The creature from the bestiary, or null if not present.
     */
    async getCreatureFromBestiary(
        name: string
    ): Promise<Partial<Monster> | null> {
        return new Promise((resolve) => {
            this.onResolved(() => {
                if (!this.hasCreature(name)) resolve(null);
                let creature = this.#bestiary.get(name);
                resolve(
                    Object.assign(
                        {},
                        ...this.getExtensions(creature, new Set(creature.name)),
                        creature
                    ) as Monster
                );
            });
        });
    }
    /**
     * Retrieve a fully defined creature out of the bestiary, resolving all extensions.
     *
     * @param {string} name Name of the creautre to retrieve.
     * @returns {Partial<Monster> | null} The creature from the bestiary, or null if not present.
     */
    getCreatureFromBestiarySync(name: string): Partial<Monster> | null {
        if (!this.isResolved())
            throw new Error("The bestiary is not fully resolved.");
        if (!this.hasCreature(name)) return null;
        let creature = this.#bestiary.get(name);
        return Object.assign(
            {},
            ...this.getExtensions(creature, new Set(creature.name)),
            creature
        ) as Monster;
    }

    //temp
    get(name: string) {
        return this.#bestiary.get(name);
    }
}

export const Bestiary = new BestiaryClass();
