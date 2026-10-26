import { nanoid } from "src/util/util";
import type { DefaultLayout, Layout, StatblockItem } from "../layout.types";
/** You may need to edit the import path above if you are multiple folders deep. */

const statValueCallback = (index: number) => `return monster.stats?.[${index}];`;

const statModifierCallback = (index: number) => `const score = monster.stats?.[${index}];
if (score == null) return "";
const modifier = Math.floor((score - 10) / 2);
return (modifier >= 0 ? "+" : "") + String(modifier);`;

const savingThrowCallback = (index: number, saveKey: string) => `const score = monster.stats?.[${index}];
if (score == null) return "";
let modifier = Math.floor((score - 10) / 2);
if (monster.saves) {
    for (const save of monster.saves) {
        if (save.${saveKey} != null) {
            modifier = Number(save.${saveKey});
            break;
        }
    }
}
return (modifier >= 0 ? "+" : "") + String(modifier);`;

export const Statblock55e: StatblockItem[] = [
    {
        type: "inline",
        id: nanoid(),
        properties: [],
        hasRule: false,
        cls: "header-subheader-group",
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
                        cls: "heading-box",
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
                                cls: "encounter-actions-group",
                                nested: [
                                    {
                                        type: "action",
                                        id: nanoid(),
                                        icon: "sword",
                                        callback: `(async() => {
    if (typeof InitiativeTracker === "undefined") {
        console.warn("Cannot create encounter: Initiative Tracker not loaded");
        return;
    }

    if (!InitiativeTracker.plugin.view) {
        await InitiativeTracker.plugin.addTrackerView();
    }
    InitiativeTracker.newEncounter({
        roll: true,
        creatures: [monster]
    });
    if (InitiativeTracker.plugin.view) {
        InitiativeTracker.plugin.app.workspace.revealLeaf(InitiativeTracker.plugin.view.leaf);
    }
})();
`
                                    },
                                    {
                                        type: "action",
                                        id: nanoid(),
                                        icon: "plus-with-circle",
                                        callback: `(async() => {
    if (typeof InitiativeTracker === "undefined") {
        console.warn("Cannot add creature: Initiative Tracker not loaded");
        return;
    }

    if (!InitiativeTracker.plugin.view) {
        await InitiativeTracker.plugin.addTrackerView();
    }
    InitiativeTracker.addCreatures([monster]);
    if (InitiativeTracker.plugin.view) {
        InitiativeTracker.plugin.app.workspace.revealLeaf(InitiativeTracker.plugin.view.leaf);
    }
})();
`
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
                type: "inline",
                id: nanoid(),
                properties: [],
                hasRule: false,
                cls: "ac-initiative-group",
                nested: [
                    {
                        type: "property",
                        id: nanoid(),
                        properties: ["ac"],
                        display: "AC",
                        conditioned: true,
                        callback:
                            'const ac = [monster.ac];if ("ac_class" in monster) {ac.push(`(${monster.ac_class})`);}return ac.join(" ");'
                    },
                    {
                        type: "property",
                        id: nanoid(),
                        properties: ["initiative"],
                        display: "Initiative",
                        conditioned: false,
                        callback: `const score = monster.stats?.[1];
if (score == null) return "";
const modifier = Math.floor((score - 10) / 2);
let initiative = modifier + (monster.initiative ?? 0);
return \`\${initiative >= 0 ? "+" : ""}\${initiative} (\${initiative + 10})\`;`
                    },
                    {
                        type: "text",
                        id: nanoid(),
                        properties: [""],
                        fallback: " ",
                        text: ""
                    },
                ]
            },
            {
                type: "property",
                id: nanoid(),
                properties: ["hp"],
                display: "HP",
                dice: true,
                diceProperty: "hit_dice",
                diceCallback: `if ("hit_dice" in monster) {
  return [{ text: monster.hit_dice }, \`(\${monster.hit_dice})\`];
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
        ]
    },

    {
        type: "group",
        id: nanoid(),
        properties: ["stats", "saves"],
        nested: [
            {
                type: "inline",
                id: nanoid(),
                properties: [],
                nested: [
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: ""
                            },
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: "MOD"
                            },
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: "SAVE"
                            }
                        ],
                        cls: "label-box"
                    },
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: ""
                            },
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: "MOD"
                            },
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: "SAVE"
                            }
                        ],
                        cls: "label-box"
                    },
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: ""
                            },
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: "MOD"
                            },
                            {
                                type: "text",
                                id: nanoid(),
                                properties: [""],
                                fallback: " ",
                                text: "SAVE"
                            }
                        ],
                        cls: "label-box"
                    }
                ],
                cls: "stats-box-label"
            },
            {
                type: "inline",
                id: nanoid(),
                properties: [],
                nested: [
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statValueCallback(0),
                                display: "Str"
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statModifierCallback(0),
                                display: ""
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: savingThrowCallback(0, "strength"),
                                display: ""
                            }
                        ],
                        cls: "strength-box"
                    },
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statValueCallback(1),
                                display: "Dex"
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statModifierCallback(1),
                                display: ""
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: savingThrowCallback(1, "dexterity"),
                                display: ""
                            }
                        ],
                        cls: "dexterity-box"
                    },
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statValueCallback(2),
                                display: "Con"
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statModifierCallback(2),
                                display: ""
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: savingThrowCallback(2, "constitution"),
                                display: ""
                            }
                        ],
                        cls: "constitution-box"
                    }
                ],
                cls: "stats-box-upper"
            },
            {
                type: "inline",
                id: nanoid(),
                properties: [],
                nested: [
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statValueCallback(3),
                                display: "Int"
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statModifierCallback(3),
                                display: ""
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: savingThrowCallback(3, "intelligence"),
                                display: ""
                            }
                        ],
                        cls: "intelligence-box"
                    },
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statValueCallback(4),
                                display: "Wis"
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statModifierCallback(4),
                                display: ""
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: savingThrowCallback(4, "wisdom"),
                                display: ""
                            }
                        ],
                        cls: "wisdom-box"
                    },
                    {
                        type: "inline",
                        id: nanoid(),
                        properties: [],
                        nested: [
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statValueCallback(5),
                                display: "Cha"
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: statModifierCallback(5),
                                display: ""
                            },
                            {
                                type: "property",
                                id: nanoid(),
                                properties: [""],
                                fallback: "-",
                                callback: savingThrowCallback(5, "charisma"),
                                display: ""
                            }
                        ],
                        cls: "charisma-box"
                    }
                ],
                cls: "stats-box-lower"
            }
        ],
        hasRule: false,
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
        hasRule: false,
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
                display: "Immunities",
                properties: ["damage_immunities", "condition_immunities"],
                conditioned: true,
                callback: `let damages = monster.damage_immunities;
let conditions = monster.condition_immunities;
return [damages, conditions].filter(Boolean).join('; ');`
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
                        display: "CR",
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
    const prof_bonus = Math.max(Math.floor(2 + ((CR[monster.cr]?.value ?? 0) - 1) / 4), 2);
    return \`\${CR[
        monster.cr
    ].cr} (XP \${CR[
        monster.cr
    ].xp.toLocaleString()}; PB +\${prof_bonus})\`;
}
return "";`
                    }
                ]
            }
        ],
        conditioned: true,
        hasRule: false
    },

    {
        type: "traits",
        id: nanoid(),
        properties: ["traits"],
        heading: "Traits",
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
        type: "spells",
        id: nanoid(),
        properties: ["spells"],
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
        type: "traits",
        id: nanoid(),
        properties: ["reactions"],
        heading: "Reactions",
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

export const Layout55e: DefaultLayout = {
    blocks: Statblock55e,
    id: "basic-5-5e-layout",
    name: "Basic 5.5e Layout",
    edited: false
};
