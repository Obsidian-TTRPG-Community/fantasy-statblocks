import type { Component } from "obsidian";
import type { Creature, HomebrewCreature } from "obsidian-overload";
import type { DefaultLayout, Layout } from "types/layout";

export type ability =
    | "strength"
    | "dexterity"
    | "constitution"
    | "intelligence"
    | "wisdom"
    | "charisma";
export type fage_ability =
    | "accuracy"
    | "communication"
    | "constitution"
    | "dexterity"
    | "fighting"
    | "intelligence"
    | "perception"
    | "strength"
    | "willpower";

export interface Monster {
    image?: string;
    name: string;
    size: string;
    type: string;
    subtype: string;
    alignment: string;
    ac: number;
    hp: number;
    hit_dice?: string;
    speed: string;
    stats: [number, number, number, number, number, number];
    fage_stats?: [
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number
    ];
    saves?: { [K in ability]?: number } | { [K in ability]?: number }[];
    skillsaves?: { [key: string]: number } | { [key: string]: number }[];
    damage_vulnerabilities: string;
    damage_resistances: string;
    damage_immunities: string;
    condition_immunities: string;
    senses: string;
    languages: string;
    cr: string | number;
    traits?: Trait[];
    spells?: Spell[];
    actions?: Trait[];
    bonus_actions?: Trait[];
    legendary_actions?: Trait[];
    legendary_description?: string;
    mythic_actions?: Trait[];
    mythic_description?: string;
    reactions?: Trait[];
    lair_actions?: Trait[];
    source?: string | string[];
    spellsNotes?: string;
    "statblock-link"?: string;

    /** Fate Core */
    description?: string;
    aspects?: string;
    temporaryAspects?: string;
    stress?: number[];
    consequences?: Trait[];
    skills?: Trait[];
    stunts?: Trait[];
    items?: Trait[];
    extras?: Trait[];

    /** 13th Age */
    flavor_text?: string;
    initiative?: number;
    vulnerability?: string;
    mook?: boolean;
    triggered_actions?: Trait[];
    nastier_traits?: Trait[];

    /** Statblock Parameters */
    export?: boolean;
    dice?: boolean;
    render?: boolean;
    layout?: string;
    statblock?: string;
    columns?: number;
    columnWidth?: number;
    columnHeight?: number;
    forceColumns?: boolean;

    note?: string;
    mtime?: number;

    /* Extensions */

    monster?: string;
    creature?: string;
    extends?: string | string[];
    bestiary: boolean;
}

export interface StatblockParameters
    extends Omit<
        Monster,
        | "traits"
        | "actions"
        | "bonus_actions"
        | "legendary_actions"
        | "reactions"
    > {
    traits?: { desc: string; name: string }[];
    actions?: Trait[];
    bonus_actions?: Trait[];
    legendary_actions?: Trait[];
    reactions?: Trait[];
}

export type Spell = string | { [key: string]: string };

export interface Trait {
    name: string;
    desc: string;
    traits?: Trait[];
    [key: string]: any;
}

export interface StatblockData {
    monsters: Array<[string, Monster]>;
    defaultLayouts: DefaultLayout[];
    layouts: Layout[];
    default: string;
    useDice: boolean;
    renderDice: boolean;
    export: boolean;
    showAdvanced: boolean;
    version: {
        major: number;
        minor: number;
        patch: number;
    };
    paths: string[];
    autoParse: boolean;
    disableSRD: boolean;
    tryToRenderLinks: boolean;
    debug: boolean;
    notifiedOfFantasy: boolean;
    hideConditionHelp: boolean;
    alwaysImport: boolean;
    defaultLayoutsIntegrated: boolean;
    atomicWrite: boolean;
    /**
     * Override URL for the community template registry `index.json`.
     * Empty/undefined falls back to the official registry.
     */
    communityTemplateSource?: string;
    /**
     * Maps an installed community layout id to the CSS snippet basename(s) it
     * installed, so they can be cleaned up when the layout is removed.
     */
    communityTemplateSnippets?: { [layoutId: string]: string[] };
}

export interface StatblockAPI {
    render(
        creature: Creature,
        statblockEl: HTMLDivElement,
        display?: string
    ): Component;
    saveMonsters(homebrew: HomebrewCreature[]): unknown;
    hasCreature(name: string): boolean;
    getCreatureFromBestiary(name: string): Partial<Monster> | null;
    getBestiaryNames(): string[];
    getBestiaryCreatures(): Monster[];
    settings: StatblockData;
    data: Map<string, Monster>;
    bestiary: Map<string, Monster>;
}
