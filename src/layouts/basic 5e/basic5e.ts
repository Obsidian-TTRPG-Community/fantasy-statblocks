import { nanoid } from "src/util/util";
import type { DefaultLayout, StatblockItem } from "../layout.types";

export const Statblock5e: StatblockItem[] = [
    {
        type: "inline",
        id: nanoid(),
        properties: [],
        hasRule: true,
        nested: [
            {
                type: "group",
                id: nanoid(),
                properties: ["name", "size", "type", "subtype", "alignment"],
                nested: [
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        hasRule: false,
                        nested: [
                            {
                                type: "heading",
                                id: nanoid(),
                                properties: ["name"],
                                conditioned: true,
                                size: 1
                            },
                            {
                                type: "inline",
                                id: nanoid(),
                                properties: [],
                                hasRule: false,
                                nested: [
                                    {
                                        type: "action",
                                        id: nanoid(),
                                        icon: "sword",
                                        callback:
                                            "try { InitiativeTracker.newEncounter({roll: true, creatures: [monster]}); } catch(e) {}"
                                    },
                                    {
                                        type: "action",
                                        id: nanoid(),
                                        icon: "plus-with-circle",
                                        callback:
                                            "try { InitiativeTracker.addCreatures([monster]); } catch(e) {}"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "subheading",
                        id: nanoid(),
                        properties: ["size", "type", "subtype", "alignment"],
                        conditioned: true,
                        separator: ", "
                    }
                ],
                conditioned: true
            },
            {
                type: "image",
                id: nanoid(),
                properties: ["image"]
            }
        ]
    },

    {
        type: "group",
        id: nanoid(),
        properties: ["ac", "hp", "speed"],
        nested: [
            {
                type: "property",
                id: nanoid(),
                properties: ["ac"],
                display: "Armor Class",
                conditioned: true,
                callback:
                    'const ac = [monster.ac];if ("ac_class" in monster) {ac.push(`(${monster.ac_class})`);}return ac.join(" ");'
            },
            {
                type: "property",
                id: nanoid(),
                properties: ["hp"],
                display: "Hit Points",
                dice: true,
                diceProperty: "hit_dice",
                diceCallback: `if ("hit_dice" in monster) {
  return [{ text: monster["hit_dice"] }];
} else {
  return property;
}`,
                callback:
                    'let str = [monster.hp];\nif (monster.hit_dice?.length) {\n  str.push(`(${monster.hit_dice})`);\n}\nreturn str.join(" ");',
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Speed",
                properties: ["speed"],
                conditioned: true
            }
        ],
        hasRule: true,
        conditioned: true
    },

    {
        type: "table",
        id: nanoid(),
        properties: ["stats"],
        headers: ["Str", "Dex", "Con", "Int", "Wis", "Cha"],
        calculate: true,
        hasRule: true,
        conditioned: true
    },
    {
        type: "table",
        id: nanoid(),
        properties: ["fage_stats"],
        headers: [
            "Accuracy",
            "Communication",
            "Constitution",
            "Dexterity",
            "Fighting",
            "Intelligence",
            "Perception",
            "Strength",
            "Willpower"
        ],
        calculate: false,
        hasRule: true,
        conditioned: true
    },

    {
        type: "group",
        id: nanoid(),
        properties: [
            "saves",
            "skillsaves",
            "damage_immunities",
            "damage_resistances",
            "damage_vulnerabilities",
            "condition_immunities",
            "cr",
            "languages",
            "senses"
        ],
        nested: [
            {
                type: "saves",
                id: nanoid(),
                display: "Saves",
                properties: ["saves"],
                conditioned: true
            },
            {
                type: "saves",
                id: nanoid(),
                display: "Skills",
                properties: ["skillsaves"],
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Damage Resistances",
                properties: ["damage_resistances"],
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Damage Immunities",
                properties: ["damage_immunities"],
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Condition Immunities",
                properties: ["condition_immunities"],
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Damage Vulnerabilities",
                properties: ["damage_vulnerabilities"],
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Senses",
                properties: ["senses"],
                conditioned: true
            },
            {
                type: "property",
                id: nanoid(),
                display: "Languages",
                properties: ["languages"],
                fallback: "-"
            },
            {
                type: "inline",
                id: nanoid(),
                properties: [],
                conditioned: true,
                nested: [
                    {
                        type: "property",
                        id: nanoid(),
                        display: "Challenge",
                        properties: ["cr"],
                        callback: `const CR = {
    "0": {
        cr: "0",
        value: 0,
        xp: 10
    },
    "1/8": {
        cr: "1/8",
        value: 0.125,
        xp: 25
    },
    "1/4": {
        cr: "1/4",

        value: 0.25,
        xp: 50
    },
    "1/2": {
        cr: "1/2",
        value: 0.5,
        xp: 100
    },
    "0.125": {
        cr: "1/8",
        value: 0.125,
        xp: 25
    },
    "0.25": {
        cr: "1/4",

        value: 0.25,
        xp: 50
    },
    "0.5": {
        cr: "1/2",
        value: 0.5,
        xp: 100
    },
    "1": {
        cr: "1",
        value: 1,
        xp: 200
    },
    "2": {
        cr: "2",
        value: 2,
        xp: 450
    },
    "3": {
        cr: "3",
        value: 3,
        xp: 700
    },
    "4": {
        cr: "4",
        value: 4,
        xp: 1100
    },
    "5": {
        cr: "5",
        value: 5,
        xp: 1800
    },
    "6": {
        cr: "6",
        value: 6,
        xp: 2300
    },
    "7": {
        cr: "7",
        value: 7,
        xp: 2900
    },
    "8": {
        cr: "8",
        value: 8,
        xp: 3900
    },
    "9": {
        cr: "9",
        value: 9,
        xp: 5000
    },
    "10": {
        cr: "10",
        value: 10,
        xp: 5900
    },
    "11": {
        cr: "11",
        value: 11,
        xp: 7200
    },
    "12": {
        cr: "12",
        value: 12,
        xp: 8400
    },
    "13": {
        cr: "13",
        value: 13,
        xp: 10000
    },
    "14": {
        cr: "14",
        value: 14,
        xp: 11500
    },
    "15": {
        cr: "15",
        value: 15,
        xp: 13000
    },
    "16": {
        cr: "16",
        value: 16,
        xp: 15000
    },
    "17": {
        cr: "17",
        value: 17,
        xp: 18000
    },
    "18": {
        cr: "18",
        value: 18,
        xp: 20000
    },
    "19": {
        cr: "19",
        value: 19,
        xp: 22000
    },
    "20": {
        cr: "20",
        value: 20,
        xp: 25000
    },
    "21": {
        cr: "21",
        value: 21,
        xp: 33000
    },
    "22": {
        cr: "22",
        value: 22,
        xp: 41000
    },
    "23": {
        cr: "23",
        value: 23,
        xp: 50000
    },
    "24": {
        cr: "24",
        value: 24,
        xp: 62000
    },
    "25": {
        cr: "25",
        value: 25,
        xp: 75000
    },
    "26": {
        cr: "26",
        value: 26,
        xp: 90000
    },
    "27": {
        cr: "27",
        value: 27,
        xp: 105000
    },
    "28": {
        cr: "28",
        value: 28,
        xp: 120000
    },
    "29": {
        cr: "29",
        value: 29,
        xp: 135000
    },
    "30": {
        cr: "30",
        value: 30,
        xp: 155000
    }
};                        
if ("cr" in monster && monster.cr in CR) {
    return \`\${CR[
        monster.cr
    ].cr} (\${CR[
        monster.cr
    ].xp.toLocaleString()} XP)\`;
}
return "";`
                    },
                    {
                        type: "property",
                        id: nanoid(),
                        display: "Proficiency Bonus",
                        properties: ["cr"],
                        callback: `const CR = {
    "0": {
        cr: "0",
        value: 0,
        xp: 0
    },
    "1/8": {
        cr: "1/8",
        value: 0.125,
        xp: 25
    },
    "1/4": {
        cr: "1/4",

        value: 0.25,
        xp: 50
    },
    "1/2": {
        cr: "1/2",
        value: 0.5,
        xp: 100
    },
    "0.125": {
        cr: "1/8",
        value: 0.125,
        xp: 25
    },
    "0.25": {
        cr: "1/4",

        value: 0.25,
        xp: 50
    },
    "0.5": {
        cr: "1/2",
        value: 0.5,
        xp: 100
    },
    "1": {
        cr: "1",
        value: 1,
        xp: 200
    },
    "2": {
        cr: "2",
        value: 2,
        xp: 450
    },
    "3": {
        cr: "3",
        value: 3,
        xp: 700
    },
    "4": {
        cr: "4",
        value: 4,
        xp: 1100
    },
    "5": {
        cr: "5",
        value: 5,
        xp: 1800
    },
    "6": {
        cr: "6",
        value: 6,
        xp: 2300
    },
    "7": {
        cr: "7",
        value: 7,
        xp: 2900
    },
    "8": {
        cr: "8",
        value: 8,
        xp: 3900
    },
    "9": {
        cr: "9",
        value: 9,
        xp: 5000
    },
    "10": {
        cr: "10",
        value: 10,
        xp: 5900
    },
    "11": {
        cr: "11",
        value: 11,
        xp: 7200
    },
    "12": {
        cr: "12",
        value: 12,
        xp: 8400
    },
    "13": {
        cr: "13",
        value: 13,
        xp: 10000
    },
    "14": {
        cr: "14",
        value: 14,
        xp: 11500
    },
    "15": {
        cr: "15",
        value: 15,
        xp: 13000
    },
    "16": {
        cr: "16",
        value: 16,
        xp: 15000
    },
    "17": {
        cr: "17",
        value: 17,
        xp: 18000
    },
    "18": {
        cr: "18",
        value: 18,
        xp: 20000
    },
    "19": {
        cr: "19",
        value: 19,
        xp: 22000
    },
    "20": {
        cr: "20",
        value: 20,
        xp: 25000
    },
    "21": {
        cr: "21",
        value: 21,
        xp: 33000
    },
    "22": {
        cr: "22",
        value: 22,
        xp: 41000
    },
    "23": {
        cr: "23",
        value: 23,
        xp: 50000
    },
    "24": {
        cr: "24",
        value: 24,
        xp: 62000
    },
    "25": {
        cr: "25",
        value: 25,
        xp: 75000
    },
    "26": {
        cr: "26",
        value: 26,
        xp: 90000
    },
    "27": {
        cr: "27",
        value: 27,
        xp: 105000
    },
    "28": {
        cr: "28",
        value: 28,
        xp: 120000
    },
    "29": {
        cr: "29",
        value: 29,
        xp: 135000
    },
    "30": {
        cr: "30",
        value: 30,
        xp: 155000
    }
};           
if ("cr" in monster && monster.cr in CR) {
    return \`+\${Math.max(
            Math.floor(2 + ((CR[monster.cr]?.value ?? 0) - 1) / 4),
            2
        )}\`;
}
return "";`
                    }
                ]
            }
        ],
        conditioned: true,
        hasRule: true
    },

    {
        type: "traits",
        id: nanoid(),
        properties: ["traits"],
        conditioned: true,
        dice: true
    },
    {
        type: "spells",
        id: nanoid(),
        properties: ["spells"],
        conditioned: true,

        dice: true
    },
    {
        type: "text",
        id: nanoid(),
        properties: ["spellsNotes"],
        conditioned: true,

        text: null
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["actions"],
        heading: "Actions",
        conditioned: true,

        dice: true
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["bonus_actions"],
        heading: "Bonus Actions",
        conditioned: true,

        dice: true
    },
    {
        type: "group",
        id: nanoid(),
        properties: ["legendary_description", "legendary_actions"],
        heading: "Legendary Actions",
        nested: [
            {
                type: "text",
                id: nanoid(),
                properties: ["legendary_description"],
                conditioned: true,
                text: null
            },
            {
                type: "traits",
                id: nanoid(),
                properties: ["legendary_actions"],
                conditioned: true,
                dice: true
            }
        ],
        conditioned: true
    },
    {
        type: "group",
        id: nanoid(),
        properties: ["mythic_description", "mythic_actions"],
        heading: "Mythic Actions",
        nested: [
            {
                type: "text",
                id: nanoid(),
                properties: ["mythic_description"],
                conditioned: true,
                text: null
            },
            {
                type: "traits",
                id: nanoid(),
                properties: ["mythic_actions"],
                conditioned: true,
                dice: true
            }
        ],
        conditioned: true
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["reactions"],
        heading: "Reactions",
        conditioned: true,

        dice: true
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["lair_actions"],
        heading: "Lair Actions",
        conditioned: true,

        dice: true
    },
    {
        type: "traits",
        id: nanoid(),
        properties: ["regional_effects"],
        heading: "Regional Effects",
        conditioned: true,
        dice: true
    }
];

export const Layout5e: DefaultLayout = {
    blocks: Statblock5e,
    id: "basic-5e-layout",
    name: "Basic 5e Layout",
    edited: false,
    version: 9
};
