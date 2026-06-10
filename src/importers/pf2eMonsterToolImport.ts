import { Monster, Trait } from "index";


export async function buildMonsterFromPF2EMonsterToolFile(
    file: File
): Promise<Monster[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (event: any) => {
            try {
                let json = JSON.parse(event.target.result);
                const stats: [number, number, number, number, number, number] = [
                    getValue(json.strength),
                    getValue(json.dexterity),
                    getValue(json.constitution),
                    getValue(json.intelligence),
                    getValue(json.wisdom),
                    getValue(json.charisma)
                ]
                const ac = getValue(json.ac)
                const abilities = getAbilities(json.specials)
                const spellcasting = getSpells(json.spelltype, json.focuspoints, json.cantriplevel, json.spelldc, json.spellattack, json.spells, json.constant)
                const creatureType = json.creature || "Creature"
                const monster: Monster = {
                    layout: "Basic Pathfinder 2e Layout",
                    name: json.name,
                    level: creatureType + " " + json.level.toString(),
                    size: json.size,
                    trait_03: json.type,
                    modifier: getValue(json.perception),
                    perception: getPerception(json.perception),
                    abilities_top: abilities.filter(a => a.type === ABILITY_TOP).map(a => {return {name: a.name, desc: a.desc}}),
                    abilities_mid: abilities.filter(a => a.type === ABILITY_MID).map(a => {return {name: a.name, desc: a.desc}}),
                    abilities_bot: abilities.filter(a => a.type === ABILITY_BOT).map(a => {return {name: a.name, desc: a.desc}}),
                    type: json.type,
                    subtype: "",
                    alignment: json.alignment,
                    ac: ac,
                    armorclass: getACStats(ac, getValue(json.fortitude), getValue(json.reflex), getValue(json.will)),
                    hp: getValue(json.hp) || 1,
                    health: getHealthStats(json.hp, json.immunity, json.resistance, json.weakness),
                    attacks: getAttacks(json.strikes),
                    spellcasting: spellcasting,
                    speed: json.speed || "5 feet",
                    stats: stats,
                    abilityMods: stats,
                    damage_vulnerabilities: json.weakness,
                    damage_resistances: json.resistance,
                    damage_immunities: "",
                    condition_immunities: json.immunity,
                    senses: json.perception.note,
                    languages: json.languages,
                    cr: json.level,
                    bestiary: false, // not sure what this does
                    skills: getSkills(json)
                };

                // For styling reasons, the remaining pf2e traits start at index traits_04.
                const traits = getTraits(json.traits);
                for (let traitIndex = 0; traitIndex < traits.length; traitIndex++) {
                    const traitIndexStr = (traitIndex + 4).toString().padStart(2, '0');
                    const traitKeyString = `trait_${traitIndexStr}`;
                    monster[traitKeyString] = traits[traitIndex];
                }
                monster["traits_04"] = traits[0];

                resolve([monster]);
            } catch (e) {
                console.error(`reject!!!`, e);
                reject(e);
            }
        };
        reader.readAsText(file);
    });
};

type PF2EMonsterValue = {
    value: string | number,
    benchmark: string,
    note: string
};

type PF2eMonsterAbility = {
    id: string,
    name: string,
    traits: string,
    range: string,
    actions: string,
    type: string,
    description: string
};

type PF2EMonsterStrike = {
    id: string,
    name: string,
    traits: string,
    attack: string,
    damage: string,
    type: "Melee" | "Ranged"
};

const REACTION = "⬲ ";
export const ONE_ACTION = "⬻ ";
const TWO_ACTION = "⬺ ";
const THREE_ACTION = "⬽ ";
const FREE_ACTION = "⭓ ";
const NO_ACTION = "";

const ABILITY_TOP = "general";
const ABILITY_MID = "defense";
const ABILITY_BOT = "offense";

function getValue(json_parameter: PF2EMonsterValue): number {
    const value = json_parameter.value;
    return parseInt(value.toString()) || 0;
};

function getAbilities(json_abilities: PF2eMonsterAbility[]): Trait[] {
    return json_abilities.map(a => {
        const action_string = convert_action_to_icon(a.actions);
        const desc = transformDice(boldAbilityKeywords(a.description));
        return {
            name: a.name, 
            desc: action_string + desc, // Strings like "1 minute" should be moved into the description
            type: a.type
        };
    });
};

function getPerception(perception: PF2EMonsterValue): Trait[] {
    const perceptionValue = addSign(getValue(perception));
    const perceptionNote = perception.note ? ` ${perception.note};` : "";
    return [{
        name: "Perception",
        desc: `Perception ${perceptionValue};${perceptionNote}`
    }]
}

export function getModifierToDiceRoll(modifier: number): string {
    if (modifier < 0) {
        return `${modifier} (1d20${modifier})`;
    } else {
        return `+${modifier} (1d20+${modifier})`;
    }
};

// Add sign to a number.
export function addSign(num: number): string {
    if (num >= 0) {
        return `+${num}`
    }
    return num.toString()
}

export function getACStats(ac: number, fortitude: number, reflex: number, will: number): Trait[] {
    const fortStr = getModifierToDiceRoll(fortitude);
    const refStr = getModifierToDiceRoll(reflex);
    const willStr = getModifierToDiceRoll(will);
    const construct = `${ac}; __Fort__: ${fortStr}; __Ref__: ${refStr}; __Will__: ${willStr};`;
    return [{
        name: "AC",
        desc: construct
    }];
};

function convert_action_to_icon(action_string: string): string {
    const action_map: {[key: string]: string} = {
        "reaction": REACTION,
        "one": ONE_ACTION,
        "two": TWO_ACTION,
        "three": THREE_ACTION,
        "free": FREE_ACTION,
        "none": NO_ACTION
    };
    const lookup = action_map[action_string]
    return lookup ? lookup : action_string;
};

function getHealthStats(hp: PF2EMonsterValue, immunity: PF2EMonsterValue, resistance: PF2EMonsterValue, weakness: PF2EMonsterValue): Trait[] {
    const hpValue = getValue(hp) || 1;
    const immunityValue = getValue(immunity);
    const resistanceValue = getValue(resistance);
    const weaknessValue = getValue(weakness);
    
    const hpNoteStr = hp.note ? ` (${hp.note});` : "";
    const immunityStr = immunityValue ? ` __Immunities__ ${immunityValue};` : "";
    const resistanceStr = resistanceValue ? ` __Resistances__ ${resistanceValue};` : "";
    const weaknessStr = weaknessValue ? ` __Weaknesses__ ${weaknessValue};` : "";

    return [{
        name: "HP",
        desc: `${hpValue};${hpNoteStr}${immunityStr}${resistanceStr}${weaknessStr}`
    }];
};

function getAttacks(strikes: PF2EMonsterStrike[]): Trait[] {
    return strikes.map(s => {
        const traits = s.traits ? ` (${s.traits});` : "";
        const damage = s.damage ? ` __Damage__ ${transformDice(s.damage)}`: "";
        const attack = addSign(parseInt(s.attack));
        return {
            name: s.type,
            desc: ONE_ACTION + ` ${s.name} ${attack}${traits}${damage}`
        }
    });
};

function getSpells(spellType: string, focusPoints: number, cantriplevel: number, spellDc: PF2EMonsterValue, spellAttack: PF2EMonsterValue, spells: string[], constantSpells: string) : Trait[] {
    const all_spells = spells.join(',').split(',').map(s => s.trim()).filter(s => s !== "");
    if (all_spells.length === 0) {
        return [];
    };
    const focusPointsStr = focusPoints ? `${focusPoints} Focus Points, ` : ""
    const maxSpellLevel = 10; //Spells are reversed, so spell[0] is 10th level and spell[10] are cantrips.
    var spellList = "";
    for (let i = 0; i < maxSpellLevel; i++) {
        const spellLevel = spells[i];
        const spellLevelStr = spellLevel ? ` __${toOrdinal(maxSpellLevel-i)}__ ${spellLevel};` : "";
        spellList += spellLevelStr;
    }
    spellList += spells[maxSpellLevel] ? ` __Cantrips (${toOrdinal(cantriplevel)})__ ${spells[maxSpellLevel]};` : "";
    spellList += constantSpells ? ` __Constant__ ${constantSpells};` : "";
    return [{
        name: spellType,
        desc: `${focusPointsStr}DC ${getValue(spellDc)}; attack ${getValue(spellAttack)}; ${spellList}`
    }];
};

function getSkills(json: any): Trait[] {
    const pf2eSkills = ["acrobatics","arcana","athletics","crafting","deception","diplomacy","intimidation","medicine","nature","occultism","performance","religion","society","stealth","survival","thievery"]
    const notableSkills = pf2eSkills.map(s => {return {skill: s, value: getValue(json[s]), note: json[s].note}}).filter(s => s.value !== 0)
    const desc = notableSkills.map(s => `__${toTitleCase(s.skill)}__: ${getModifierToDiceRoll(s.value)}` + (s.note ? ` (${s.note})` : ""), "").join(' ')
    if (desc.length === 0) {
        return []
    }
    return [{
        name: "Skills",
        desc: desc
    }]
}

function getTraits(traits: string): string[] {
    const traitArray = traits.split(',')
    traitArray.forEach(t => t.trim())
    return traitArray
}

/**
 * Replace `"Hello World 3d12+15 And 2d6"` to `"Hello World 3d12+15 (3d12+15) And 2d6 (2d6)"`
 * @param str 
 * @returns 
 */
function transformDice(str: string): string {
    return str.replace(/ ?(\d+d\d+( ?[+-] ?\d+)?)/g, ' $1 ($1)');
};

function boldAbilityKeywords(str: string): string {
    return str.replace(/((Trigger)|(Requirements)|(Effect))/g, '__$1__');
}

function toOrdinal(n: number): string {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export function toTitleCase(str: string): string {
    return str.replace(
      /\w\S*/g,
      text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
}
