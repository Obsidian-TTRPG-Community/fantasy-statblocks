import { nanoid } from "src/util/util";
import type { DefaultLayout, Layout, StatblockItem } from "../../layout.types";

export const LayoutBnBBestiary: DefaultLayout = {
    blocks: [
        {
            "type": "group",
            "id": "0a58d8280a7b",
            "properties": [],
            "nested": [
                {
                    "type": "image",
                    "id": "48db7bfb6809",
                    "properties": [
                        "Token"
                    ],
                    "fallback": "-",
                    "conditioned": true
                }
            ]
        },
        {
            "type": "group",
            "id": "b8e9ea5a5b68",
            "properties": [],
            "nested": [
                {
                    "type": "inline",
                    "id": "7a3a6b3ad9d9",
                    "properties": [],
                    "nested": [
                        {
                            "type": "heading",
                            "id": "0a982a598818",
                            "properties": [
                                "Name"
                            ],
                            "size": 1,
                            "fallback": "-"
                        },
                        {
                            "type": "property",
                            "id": "cb1a28885afb",
                            "properties": [
                                "Type"
                            ],
                            "fallback": "Unknown.",
                            "conditioned": false,
                            "display": " "
                        }
                    ]
                },
                {
                    "type": "subheading",
                    "id": "4b3848590a48",
                    "properties": [
                        "TitleOfMob",
                        "FlavorText",
                        "TypeOfBoss"
                    ],
                    "separator": " , ",
                    "fallback": "-",
                    "conditioned": true
                }
            ],
            "hasRule": true
        },
        {
            "type": "group",
            "id": "fb98fb48f93a",
            "properties": [],
            "nested": [
                {
                    "type": "inline",
                    "id": "3898c8ea0bf9",
                    "properties": [],
                    "nested": [
                        {
                            "type": "property",
                            "id": "a8980a09e92a",
                            "properties": [
                                "BadassRank"
                            ],
                            "fallback": " ",
                            "conditioned": false,
                            "display": " "
                        },
                        {
                            "type": "property",
                            "id": "c83a18fb2ac9",
                            "properties": [
                                "MovementType"
                            ],
                            "fallback": " ",
                            "display": " ",
                            "callback": "const Move = monster.MovementType;\nconst Types = ['move', 'flight', 'swim', 'burrow', 'teleport', 'leap', 'hover', 'climb',];\nconst Symbols = ['⭇', '󡔂', '󡔄', '󡔆', '󡔃', '󡔁', '󡔀', '󡔅',];\n\nlet Output = '';\nfor (let i = 0; i < Types.length; i++) {\n  for (let j = 0; j <= 10; j++) {\n    if (Move.includes(`${Types[i]} ${j}`)) {\n      Output += `${Symbols[i]} ${j} Square${j > 1 ? 's' : ''}\\n`;\n    }\n  }\n}\n\nreturn Output.trim();"
                        },
                        {
                            "type": "inline",
                            "id": "59e8dad80b6b",
                            "properties": [],
                            "nested": [
                                {
                                    "type": "property",
                                    "id": "d8d98b8b6bfa",
                                    "properties": [
                                        "Health"
                                    ],
                                    "fallback": "Dead",
                                    "conditioned": true,
                                    "display": "Health:"
                                },
                                {
                                    "type": "property",
                                    "id": "c969ebe85aca",
                                    "properties": [
                                        "Shield"
                                    ],
                                    "fallback": "N/A",
                                    "display": "Shield:",
                                    "conditioned": true
                                },
                                {
                                    "type": "property",
                                    "id": "b95a6a68e89b",
                                    "properties": [
                                        "Armor"
                                    ],
                                    "fallback": "N/A",
                                    "conditioned": true,
                                    "display": "Armor:"
                                },
                                {
                                    "type": "property",
                                    "id": "cb4a68db0ad8",
                                    "properties": [
                                        "Traits"
                                    ],
                                    "fallback": "N/A",
                                    "display": "Traits:",
                                    "conditioned": true,
                                    "markdown": true
                                }
                            ],
                            "cls": "shat"
                        }
                    ],
                    "cls": "bomshat"
                }
            ]
        },
        {
            "type": "group",
            "id": "2a99795abbb8",
            "properties": [],
            "nested": [
                {
                    "type": "property",
                    "id": "1a4aaa3b78e9",
                    "properties": [
                        "Weapon"
                    ],
                    "fallback": "N/A",
                    "conditioned": false,
                    "dice": true,
                    "display": "Weapon:"
                },
                {
                    "type": "property",
                    "id": "4a8b3ae86bb8",
                    "properties": [
                        "Special"
                    ],
                    "fallback": "-",
                    "display": "Special:",
                    "dice": true,
                    "markdown": true
                },
                {
                    "type": "property",
                    "id": "d85b69696908",
                    "properties": [
                        "SuperSpecial"
                    ],
                    "fallback": "-",
                    "display": "Additional Effects:",
                    "conditioned": true,
                    "markdown": true,
                    "dice": true,
                    "hasRule": true
                }
            ],
            "hasRule": false
        },
        {
            "type": "group",
            "id": "8ae89989a83b",
            "properties": [],
            "nested": [
                {
                    "type": "traits",
                    "id": "cb28b8484afa",
                    "properties": [
                        "Actions"
                    ],
                    "fallback": "-",
                    "heading": "Actions",
                    "conditioned": true,
                    "hasRule": false,
                    "markdown": true,
                    "dice": true
                },
                {
                    "type": "traits",
                    "id": "5beae9c80838",
                    "properties": [
                        "Mayhem"
                    ],
                    "fallback": "-",
                    "conditioned": true,
                    "heading": "󡔱 Mayhem",
                    "dice": true,
                    "markdown": true
                },
                {
                    "type": "traits",
                    "id": "ea6b78db3b59",
                    "properties": [
                        "Loot"
                    ],
                    "fallback": "-",
                    "heading": "Loot",
                    "conditioned": true,
                    "dice": true,
                    "markdown": true
                }
            ],
            "hasRule": false,
            "cls": ""
        },
        {
            "type": "group",
            "id": "283a2b39ca3a",
            "properties": [],
            "nested": [
                {
                    "type": "text",
                    "id": "8a78b8393819",
                    "properties": [
                        "Image"
                    ],
                    "text": null,
                    "fallback": "-",
                    "heading": "",
                    "conditioned": true
                },
                {
                    "type": "image",
                    "id": "2b09ea3958fa",
                    "properties": [
                        "Image"
                    ],
                    "fallback": "-",
                    "conditioned": true
                }
            ],
            "cls": "biggies"
        }],
    id: "basic-bnb-bestiary-layout",
    name: "Basic BnB Bestiary Layout",
    edited: false /** This is Optional, but we suggest leaving it. */
};
