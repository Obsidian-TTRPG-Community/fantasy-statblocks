export interface Attributes {
    ancestryhp: number;
    classhp: number;
    bonushp: number;
    bonushpPerLevel: number;
    speed: number;
    speedBonus: number;
}

export interface AbilitiesBreakdown {
    ancestryFree: string[];
    ancestryBoosts: string[];
    ancestryFlaws: string[];
    backgroundBoosts: string[];
    classBoosts: string[];
    mapLevelledBoosts: { [level: string]: string[] };
}

export interface Abilities {
    str: number;
    dex: number;
    con: number;
    int: number;
    wis: number;
    cha: number;
    breakdown: AbilitiesBreakdown;
}

export interface Proficiencies {
    classDC: number;
    perception: number;
    fortitude: number;
    reflex: number;
    will: number;
    heavy: number;
    medium: number;
    light: number;
    unarmored: number;
    advanced: number;
    martial: number;
    simple: number;
    unarmed: number;
    castingArcane: number;
    castingDivine: number;
    castingOccult: number;
    castingPrimal: number;
    acrobatics: number;
    arcana: number;
    athletics: number;
    crafting: number;
    deception: number;
    diplomacy: number;
    intimidation: number;
    medicine: number;
    nature: number;
    occultism: number;
    performance: number;
    religion: number;
    society: number;
    stealth: number;
    survival: number;
    thievery: number;
}

export interface SpecificProficiencies {
    trained: string[];
    expert: string[];
    master: string[];
    legendary: string[];
}

export interface Weapon {
    name: string;
    qty: number;
    prof: string;
    die: string;
    pot: number;
    str: string;
    mat: string | null;
    display: string;
    runes: string[];
    damageType: string;
    attack: number;
    damageBonus: number;
    extraDamage: string[];
    increasedDice: boolean;
    isInventor: boolean;
}

export interface Armor {
    name: string;
    qty: number;
    prof: string;
    pot: number;
    res: string;
    mat: string | null;
    display: string;
    worn: boolean;
    runes: string[];
}

export interface Spellcaster {
    name: string;
    magicTradition: string;
    spellcastingType: string;
    ability: string;
    proficiency: number;
    focusPoints: number;
    innate: boolean;
    perDay: number[];
    spells: {
        spellLevel: number;
        list: string[];
    }[];
    prepared: {
        spellLevel: number;
        list: string[];
    }[];
    blendedSpells: any[];
}

// the focus spells that are associated with a given ability score
export interface Focus {
    abilityBonus: number;
    proficiency: number;
    itemBonus: number;
    focusCantrips: string[];
    focusSpells: string[];
}
// focus is a dictionary of string -> FocusTradition
// the key must be a string with the following values: int, wis, cha
export interface FocusAbility {
    [key: string]: Focus;
}
// focus is a dictionary of string -> Focus
// the key must be a string with the following values: arcane, divine, occult, primal
export interface FocusTradition {
    [key: string]: FocusAbility;
}


export interface AcTotal {
    acProfBonus: number;
    acAbilityBonus: number;
    acItemBonus: number;
    acTotal: number;
    shieldBonus: number | null;
}
export interface Familiar {
    type: string;
    name: string;
    equipment: string[];
    specific: string | null;
    abilities: string[];
}


export interface Build {
    name: string;
    class: string;
    dualClass: string | null;
    level: number;
    ancestry: string;
    heritage: string;
    background: string;
    alignment: string;
    gender: string;
    age: string;
    deity: string;
    size: number;
    sizeName: string;
    keyability: keyof Abilities;
    languages: string[];
    rituals: string[];
    resistances: string[];
    inventorMods: string[];
    attributes: Attributes;
    abilities: Abilities;
    proficiencies: Proficiencies;
    feats: string[][];
    specials: string[];
    lores: string[][];
    equipment: [string, number][]
    specificProficiencies: SpecificProficiencies;
    weapons: Weapon[];
    armor: Armor[];
    spellCasters: Spellcaster[];
    focusPoints: number;
    focus: FocusTradition;
    pets: any[];
    familiars: Familiar[];
    acTotal: AcTotal;
}

export interface PathbuilderCharacter {
    success: boolean;
    build: Build;
}
