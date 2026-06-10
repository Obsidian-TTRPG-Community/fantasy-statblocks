import { nanoid } from "src/util/util";
import type { DefaultLayout, Layout, StatblockItem } from "../../layout.types";
/** You may need to edit the import path above if you are multiple folders deep. */


/** Rename layout below. */
/** For example, export const Layout13thAgeMonster: DefaultLayout */

export const LayoutBnBFamiliar: DefaultLayout = {
    blocks: [
        {
            "type": "inline",
            "id": "aabbab5bb92a",
            "properties": [],
            "nested": [
                {
                    "type": "image",
                    "id": "a80b9a1a791b",
                    "properties": [
                        "Token"
                    ],
                    "fallback": "-",
                    "conditioned": true
                }
            ]
        },
        {
            "type": "inline",
            "id": "19788a293819",
            "properties": [],
            "nested": [
                {
                    "type": "heading",
                    "id": "bb98085bdbab",
                    "properties": [
                        "Name"
                    ],
                    "fallback": "Unknown",
                    "conditioned": false,
                    "size": 1
                },
                {
                    "type": "property",
                    "id": "f97b886ba819",
                    "properties": [
                        "Type"
                    ],
                    "fallback": "Unknown",
                    "display": "",
                    "conditioned": true,
                    "markdown": true,
                    "dice": false
                }
            ],
            "hasRule": true
        },
        {
            "type": "group",
            "id": "c81968abe80b",
            "properties": [],
            "nested": [
                {
                    "type": "inline",
                    "id": "4809ea49d92a",
                    "properties": [],
                    "nested": [
                        {
                            "type": "inline",
                            "id": "48f93a487988",
                            "properties": [],
                            "nested": [
                                {
                                    "type": "property",
                                    "id": "4dc7e12b6c6c",
                                    "properties": [
                                        "MovementType"
                                    ],
                                    "fallback": "-",
                                    "display": " ",
                                    "conditioned": true,
                                    "callback": "const Move = monster.MovementType;\nconst Types = ['move', 'flight', 'swim', 'burrow', 'teleport', 'leap', 'hover', 'climb',];\nconst Symbols = ['⭇', '󡔂', '󡔄', '󡔆', '󡔃', '󡔁', '󡔀', '󡔅',];\n\nlet Output = '';\nfor (let i = 0; i < Types.length; i++) {\n  for (let j = 0; j <= 10; j++) {\n    if (Move.includes(`${Types[i]} ${j}`)) {\n      Output += `${Symbols[i]} ${j} Square${j > 1 ? 's' : ''}\\n`;\n    }\n  }\n}\n\nreturn Output.trim();",
                                    "markdown": false,
                                    "hasRule": false
                                },
                                {
                                    "type": "inline",
                                    "id": "294ad96ad9ba",
                                    "properties": [],
                                    "nested": [
                                        {
                                            "type": "property",
                                            "id": "4a3beb0948e9",
                                            "properties": [
                                                "Health"
                                            ],
                                            "fallback": "-",
                                            "display": "Health:",
                                            "conditioned": true
                                        },
                                        {
                                            "type": "property",
                                            "id": "7ac8d84999bb",
                                            "properties": [
                                                "Regen"
                                            ],
                                            "fallback": "-",
                                            "display": "HP Regen:",
                                            "conditioned": true,
                                            "dice": true
                                        },
                                        {
                                            "type": "property",
                                            "id": "ea8b1b5bfb4a",
                                            "properties": [
                                                "Shield"
                                            ],
                                            "fallback": "",
                                            "display": "Shield:",
                                            "conditioned": true
                                        },
                                        {
                                            "type": "property",
                                            "id": "596b79ab7b6a",
                                            "properties": [
                                                "Charge"
                                            ],
                                            "fallback": "-",
                                            "display": "SH Charge:",
                                            "conditioned": true,
                                            "dice": true
                                        },
                                        {
                                            "type": "property",
                                            "id": "f8aa6b4a396a",
                                            "properties": [
                                                "Armor"
                                            ],
                                            "fallback": "-",
                                            "display": "Armor:",
                                            "conditioned": true
                                        },
                                        {
                                            "type": "property",
                                            "id": "8a2a6a691918",
                                            "properties": [
                                                "Repair"
                                            ],
                                            "fallback": "-",
                                            "display": "AR Repair:",
                                            "conditioned": true,
                                            "dice": true
                                        },
                                        {
                                            "type": "property",
                                            "id": "2b5b9b0b689b",
                                            "properties": [
                                                "Traits"
                                            ],
                                            "fallback": "-",
                                            "conditioned": true,
                                            "display": "Traits:"
                                        }
                                    ],
                                    "cls": "familiar-tams"
                                }
                            ],
                            "cls": ""
                        }
                    ],
                    "hasRule": false,
                    "cls": "move-shat"
                },
                {
                    "type": "table",
                    "id": "cb4bdb99abdb",
                    "properties": [
                        "Abilityscore"
                    ],
                    "headers": [
                        "ACC",
                        "DMG",
                        "SPD",
                        "MST"
                    ],
                    "calculate": false,
                    "fallback": "-",
                    "conditioned": true,
                    "dice": true
                },
                {
                    "type": "property",
                    "id": "494b58086a5a",
                    "properties": [
                        "Damage"
                    ],
                    "fallback": "-",
                    "display": "Damage:",
                    "conditioned": true,
                    "dice": true,
                    "hasRule": true
                }
            ],
            "hasRule": false,
            "conditioned": true
        },
        {
            "type": "group",
            "id": "eaa94ab86ba9",
            "properties": [],
            "nested": [
                {
                    "type": "property",
                    "id": "3a4a88da394a",
                    "properties": [
                        "Weapon"
                    ],
                    "fallback": "N/A",
                    "markdown": true,
                    "display": "Weapon:",
                    "dice": true,
                    "conditioned": true
                },
                {
                    "type": "property",
                    "id": "5a8b7b08b8ca",
                    "properties": [
                        "Special"
                    ],
                    "fallback": "N/A",
                    "display": "Special:",
                    "markdown": true,
                    "hasRule": false,
                    "dice": true,
                    "conditioned": true
                },
                {
                    "type": "traits",
                    "id": "b9da9b7a6958",
                    "properties": [
                        "SuperSpecial"
                    ],
                    "fallback": "-",
                    "conditioned": true,
                    "dice": true,
                    "markdown": true
                }
            ],
            "hasRule": true,
            "conditioned": true
        },
        {
            "type": "group",
            "id": "799ada4bc8c9",
            "properties": [],
            "nested": [
                {
                    "type": "table",
                    "id": "5a2bdb7819b8",
                    "properties": [
                        "Hit-Crit"
                    ],
                    "headers": [
                        "2-7",
                        "8-15",
                        "16+"
                    ],
                    "calculate": false,
                    "fallback": "-",
                    "conditioned": true,
                    "dice": true
                },
                {
                    "type": "traits",
                    "id": "ea68aaba0819",
                    "properties": [
                        "Actions"
                    ],
                    "fallback": "-",
                    "heading": "Actions",
                    "conditioned": true,
                    "markdown": true,
                    "dice": true
                },
                {
                    "type": "traits",
                    "id": "d979ba0a69da",
                    "properties": [
                        "Skills"
                    ],
                    "fallback": "-",
                    "headingProp": false,
                    "heading": "Skills",
                    "conditioned": true,
                    "markdown": true,
                    "dice": true
                }
            ],
            "conditioned": false,
            "hasRule": true
        },
        {
            "type": "image",
            "id": "999b68298919",
            "properties": [
                "Image"
            ],
            "fallback": "-",
            "conditioned": true
        }
    ],
    id: "basic-bnb-familiar-layout",
    name: "Basic BnB Familiar Layout",
    edited: false /** This is Optional, but we suggest leaving it. */
};
