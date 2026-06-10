import { Monster, Trait } from "index";
import { ONE_ACTION, getACStats, addSign, getModifierToDiceRoll, toTitleCase } from "./pf2eMonsterToolImport";
import { Abilities, Proficiencies, PathbuilderCharacter, Weapon, Armor, Build, FocusTradition } from "./Pathbuilder.d";

const skillAbilityMap: Record<string, keyof Abilities> = {
    acrobatics: "dex",
    arcana: "int",
    athletics: "str",
    crafting: "int",
    deception: "cha",
    diplomacy: "cha",
    intimidation: "cha",
    medicine: "wis",
    nature: "wis",
    occultism: "int",
    performance: "cha",
    religion: "wis",
    society: "int",
    stealth: "dex",
    survival: "wis",
    thievery: "dex",
    lore: "int"
};

const creatureSize : string[] = ["Tiny", "Small", "Medium", "Large", "Huge"];

export async function buildMonsterFromPathbuilderFile(file: File): Promise<Monster[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data : PathbuilderCharacter = JSON.parse(reader.result as string);
                const pc = data.build;
                const attributes = pc.attributes;
                const abilities = pc.abilities;
                const proficiencies = pc.proficiencies;

                const ac = pc.acTotal.acTotal;
                const str = abilityModifier(abilities.str);
                const dex = abilityModifier(abilities.dex);
                const con = abilityModifier(abilities.con);
                const int = abilityModifier(abilities.int);
                const wis = abilityModifier(abilities.wis);
                const cha = abilityModifier(abilities.cha);

                const perception = wis + proficiencies.perception + pc.level;
                const hp = attributes.ancestryhp + ((attributes.classhp + attributes.bonushp + con + attributes.bonushpPerLevel) * pc.level);

                const fort = proficiencyBonus(abilities.con, proficiencies.fortitude, pc.level);
                const ref = proficiencyBonus(abilities.dex, proficiencies.reflex, pc.level);
                const will = proficiencyBonus(abilities.wis, proficiencies.will, pc.level);

                const monster: Monster = {
                    layout: "Basic Pathfinder 2e Layout",
                    source: "Pathbuilder",
                    sourcebook: file.name,
                    columns: 2,
                    name: pc.name,
                    player: true,
                    level: pc.level,
                    rare_01: "unique",
                    trait_01: pc.ancestry,
                    trait_02: pc.heritage,
                    trait_03: pc.background,
                    alignment: pc.alignment,
                    size: creatureSize[pc.size],
                    modifier: perception,
                    perception: getPerception(perception),
                    type: pc.class,
                    subtype: "",
                    ac: ac,
                    armorclass: getACStats(ac, fort, ref, will),
                    hp: hp,
                    // name: HP, desc: the hp and if there are resistances, put them in parentheses
                    health: getHealthStats(hp, pc.resistances),
                    attacks: getWeapons(pc.weapons),
                    abilities_top: [
                        {name: 'Class DC', desc: String(10+proficiencyBonus(abilities[pc.keyability] as number, proficiencies.classDC, pc.level))},
                        getItems(pc.equipment),
                        getArmor(pc.armor)],
                    abilities_bot: [stringArrayToTrait("Feats", pc.feats.map(feat => feat[0])), stringArrayToTrait("Specials", pc.specials)],
                    abilityMods: [addSign(str), addSign(dex), addSign(con), addSign(int), addSign(wis), addSign(cha)],
                    skills: [
                        getSkills(abilities, proficiencies, pc.level),
                        { name: "Lore",
                          desc: pc.lores.map(lore => `[[${lore[0]}]] ${getModifierToDiceRoll(proficiencyBonus(abilities.int, Number(lore[1]), pc.level))}`).join(", ")
                        }
                    ],
                    speed: `${attributes.speed + attributes.speedBonus} feet`,
                    spellcasting: getSpells(pc),

                    damage_vulnerabilities: "",
                    damage_resistances: pc.resistances.join(", "),
                    damage_immunities: "",
                    condition_immunities: "",
                    senses: "",
                    languages: pc.languages.join(", "),
                    cr: pc.level,
                    bestiary: false,
                    stats: null
                };
                resolve([monster]);
            } catch (e) {
                console.error("Error importing Pathbuilder file", e);
                reject(e);
            }
        };
        reader.readAsText(file);
    });
}

/**
 * Return an array of Traits for the spells and focus spells for the PC.
 * @param pc the PC object
 * @returns an array of Traits, each with the name of the spell level and the list of spells
 */
function getSpells(pc : Build): Trait[] {
    const spells: Trait[] =
        pc.spellCasters.map(spellCaster => { // this returns an array of arrays of Traits
            return spellCaster.spells.map(spellLevel => { // returns an array of Traits
                // if the spellLevel list is empty, return an empty trait, otherwise return a Trait with the spellLevel name and the list of spells
                if (spellLevel.list.length === 0) {
                    return {} as Trait;
                }
                else return {
                    name: `${spellCaster.name} ${spellLevel.spellLevel === 0 ? "Cantrips" : `Rank ${spellLevel.spellLevel} (${spellCaster.perDay[spellLevel.spellLevel]})`}`,
                    desc: `[[${spellLevel.list.join("]], [[")}]]`
                }
            })
        }).flat() // flatten the array of arrays of Traits to an array of Traits
    console.log("getSpells - spells", spells);
    const focusSpells = getFocusSpells(pc.focus, pc.level);
    console.log("getSpells - focusSpells", focusSpells);

    return [spells, focusSpells].flat();
}

/**
 * Return an array of Traits for the focus spells and focus cantrips for the PC.
 * @param focusTraditions the focusTraditions object from the PC object
 * @param pcLevel the level of the PC (for calculating the proficiency bonus)
 * @returns an array of Traits, each with the name of the focus tradition and the list of focus spells or focus cantrips
 */
function getFocusSpells(focusTraditions: FocusTradition, pcLevel: number): Trait[] {
    const focusTraits: Trait[] = [];
    Object.keys(focusTraditions).forEach(tradition => { // tradition = "arcane", "divine", "occult", "primal"
        const focusAbility = focusTraditions[tradition];
        Object.keys(focusAbility).forEach(ability => { // ability = "int", "wis", "cha"
            const focus = focusAbility[ability];
            const focusCantrips = focus.focusCantrips;
            if (focusCantrips?.length > 0) {
                focusTraits.push({
                    name: `${toTitleCase(tradition)} Focus Cantrips ${addSign(focus.abilityBonus+focus.proficiency+pcLevel)}`,
                    desc: `[[${focusCantrips.join("]], [[")}]]`
                });
            }
            const focusSpells = focus.focusSpells;
            if (focusSpells?.length > 0) {
                focusTraits.push({
                    name: `${toTitleCase(tradition)} Focus Spells ${addSign(focus.abilityBonus+focus.proficiency+pcLevel)}`,
                    desc: `[[${focusSpells.join("]], [[")}]]`
                });
            }
        });
    });
    return focusTraits;
}

/**
 * Create a Trait with the name "HP" and the hit points of the PC. If the PC has resistances, add them to the description.
 * @param hp the hit points of the PC
 * @param resistances any resistances the PC has
 * @returns a Trait with the name "HP" and the hit points of the PC. If the PC has resistances, add them to the description.
 */
function getHealthStats(hp: number, resistances: string[]): Trait[] {
    const resistanceString = resistances.join(", ");
    return [{
        name: "HP",
        desc: `${hp} ${resistanceString ? `__Resistances__ (${resistanceString})` : ""}`
    }];
}

/**
 * Format the weapons of the PC as an array of Traits, each with the name "Melee" and the weapon name, attack bonus, damage die, and damage type.
 * @param weapons the array of weapons the PC has
 * @returns an array of Traits, each with the name "Melee" and the weapon name, attack bonus, damage die, and damage type
 */
function getWeapons(weapons: Weapon[]): Trait[] {
    return weapons.map(weapon => {
        // if the weapon has a damage bonus, add it to the damage die. Use a leading plus sign if the bonus is positive, otherwise it will be negative
        let damage_bonus = weapon.damageBonus ? addSign(weapon.damageBonus) : "";
        let damage_die = "1";
        if (weapon.str == "striking") {
            damage_die = "2"
        } else if (weapon.str == "greater striking") {
            damage_die="3"
        }
        return {
            name: weapon.name,
            desc: ONE_ACTION + `[[${weapon.name}|${weapon.display}]] ${addSign(weapon.attack)} __Damage__ ${damage_die}${weapon.die}${damage_bonus} _(${weapon.damageType})_` 
        };
    });
}

/**
 * Create a Trait with the name "Perception" and the perception ability score of the PC.
 * @param perception the perception ability score
 * @returns a Trait with the name "Perception" and the perception ability score of the PC.
 */
function getPerception(perception: number): Trait[] {
    const perceptionValue = addSign(perception);
    const perceptionNote =  "";
    return [{
        name: "Perception",
        desc: `${perceptionValue} (1d20${perceptionValue});${perceptionNote}`
    }]
}

/**
 * Format the skills of the PC as a Trait with the name "Skills" and the trained or better skills of the PC.
 * @param abilities the abilities of the PC (str, dex, con, int, wis, cha)
 * @param proficiencies the proficiencies of the PC (acrobatics, arcana, athletics, crafting, deception, diplomacy, intimidation, medicine, nature, occultism, performance, religion, society, stealth, survival, thievery)
 * @param level the level of the PC
 * @returns an array of Traits, each with the name "Skills" and the trained or better skills of the PC.
 */
function getSkills(abilities: Abilities, proficiencies: Proficiencies, level: number): Trait {
    const pf2eSkills = ["acrobatics","arcana","athletics","crafting","deception","diplomacy","intimidation","medicine","nature","occultism","performance","religion","society","stealth","survival","thievery"]

    // collect all the proficiencies where the proficiency is greater than 0 (trained or better)
    const trainedSkills : string[] = pf2eSkills.filter(skill => {const skillName = skill as keyof typeof proficiencies; return proficiencies[skillName] > 0});
    // concatenate all the trained skills into a string of the form "skill1 modifier1 (dice roll), skill2 modifier2 (dice roll), ..."
    const mappedSkills = trainedSkills.map(skill => {
        const skillName = skill as keyof typeof proficiencies;
        const abilityName = skill as keyof typeof skillAbilityMap;
        const ability = abilities[skillAbilityMap[abilityName]];
        const proficiency = proficiencies[skillName];
        const modifier = proficiencyBonus(ability as number, proficiency, level);
        return `${toTitleCase(skillName)} ${addSign(modifier)}`}).join(", ");
    return {
        name: "Skills",
        desc: mappedSkills
    };
}

/**
 * Map the PC equipment to a trait named "Items" with each equipment string in markdown links.
 * @param equipment - an array of array of strings. Each inner array has as the first element the name of the item and the second element is the quantity.
 */
function getItems(equipment: [string, number][]): Trait {
    const patterns = [
        { prefix: "Scroll of ", length: 10 },
        { prefix: "Potion of ", length: 9 },
        { prefix: "Wand of ", length: 7 }
    ];
    /**
     * format the item name as a markdown link, but renaming certain items so that they make valid links.
     * @param name the name of the item
     * @returns the name of the item formatted as a (hopefully) valid markdown link
     */
    function formatItemName(name: string): string {
        for (const { prefix, length } of patterns) {
            if (name.startsWith(prefix)) {
                return `${prefix}[[${name.slice(length)}]]`;
            }
        }
    
        const suffixMatch = name.match(/ \+(\d)$/);
        if (suffixMatch) {
            name = name.slice(0, -3) + ` (+${suffixMatch[1]})`;
        }
    
        return `[[${name}]]`;
    }
    
    /**
     * Format all the equipment as (hopefully) valid markdown links with the quantity of each item (if greater than 1).
     * @param equipment the array of equipment names and quantities
     * @returns the array of formatted items
     */
    function formatEquipment(equipment: [string, number][]): [string, number][] {
        return equipment.map(([name, qty]) => [formatItemName(name), qty]);
    }
    
    /**
     * Generate the desciption of the items as a comma-separated list of markdown links with quantities if greater than 1.
     * @param foundryItems the array of formatted items
     * @returns a string suitable for the description of the "Items" trait
     */
    function generateDescription(foundryItems: [string, number][]): string {
        return foundryItems
            .map(([name, qty]) => `${qty > 1 ? `${qty}x ` : ""}${name}`)
            .join(", ");
    }
    
    const foundryItems = formatEquipment(equipment);
    
    return {
        name: "Items",
        desc: generateDescription(foundryItems)
    };
}

/**
 * Format the armor of the PC as a Trait with the name "Armor" and the list of armor objects in markdown links.
 * @param armor the array of armor objects
 * @returns a Trait with the name "Armor" and the list of armor objects in markdown links
 */
function getArmor(armor: Armor[]): Trait {
    return {
        name: "Armor",
        desc: armor.map(armor => `${armor.qty>1?String(armor.qty)+"x ":""}[[${armor.name}${armor.display?"|"+armor.display:""}]]`).join(", ")
    };
}

/**
 * Format the array of strings as a Trait with the name of the array and the strings in markdown links.
 * @param name the name of the trait
 * @param array an array of strings to be formatted as markdown links
 * @returns a Trait with the name of the array and the strings in markdown links
 */
function stringArrayToTrait(name: string, array: string[]): Trait {
    return {
        name: name,
        desc: "[["+array.join("]], [[")+"]]"
    };
}

/**
 * Convert an ability score to an ability modifier.
 * @param ability the ability score (1-20)
 * @returns the ability modifier (-5 to +5)
 */
function abilityModifier(ability: number): number {
    return Math.floor((ability - 10) / 2);
}

/**
 * Calculate the proficiency bonus for a given ability score, proficiency bonus, and level.
 * @param ability the ability score (1-20)
 * @param proficiency the proficiency bonus (0-4)
 * @param level the level of the PC
 * @returns 
 */
function proficiencyBonus(ability: number, proficiency: number, level: number): number {
    return abilityModifier(ability) + proficiency + level;
}
