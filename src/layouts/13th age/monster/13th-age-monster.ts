import type {DefaultLayout} from "../../layout.types";

export const Layout13thAgeMonster: DefaultLayout = {
    blocks: [
        {
            "type": "inline",
            "id": "2a9b58ba0ab8",
            "properties": [],
            "nested": [
                {
                    "type": "heading",
                    "id": "c89a2ae859f8",
                    "properties": [
                        "name"
                    ],
                    "size": 1,
                    "fallback": "Creature"
                },
                {
                    "type": "image",
                    "id": "e83a48f858b8",
                    "properties": [
                        "image"
                    ],
                    "fallback": "TILE ART",
                    "conditioned": true,
                    "hasRule": false
                }
            ],
            "hasRule": true
        },
        {
            "type": "group",
            "id": "fabb0b884838",
            "properties": [],
            "nested": [
                {
                    "type": "text",
                    "id": "5b7bc86b6919",
                    "properties": [
                        "flavor_text"
                    ],
                    "text": null,
                    "fallback": "-",
                    "conditioned": true,
                    "markdown": true,
                    "hasRule": false
                }
            ],
            "cls": "flavor-text",
            "hasRule": true
        },
        {
            "type": "group",
            "id": "1a6999887a69",
            "properties": [],
            "nested": [
                {
                    "type": "javascript",
                    "id": "d958f898e9fa",
                    "conditioned": false,
                    "code": "var base_string = `${monster.level} level ${monster.role}`;\n\nif (monster.size) {\n    base_string = `${monster.size} ${base_string}`;\n}\n\nconst monster_strength = document.createElement(\"p\");\nmonster_strength.innerHTML = base_string;\nmonster_strength.classList.add(\"monster-strength\");\n\nif (monster.type) {\n    const type = `[${monster.type}]`;\n    const type_block = document.createElement(\"span\");\n    type_block.classList.add(\"type\");\n    type_block.innerText = type;\n\n    monster_strength.append(type_block)\n}\n\nreturn monster_strength;"
                },
                {
                    "type": "property",
                    "id": "780809c90898",
                    "properties": [
                        "initiative"
                    ],
                    "fallback": "+0",
                    "display": "Initiative: ",
                    "markdown": true
                },
                {
                    "type": "property",
                    "id": "88eb4a6aea0b",
                    "properties": [
                        "vulnerability"
                    ],
                    "fallback": "-",
                    "display": "Vulnerability: ",
                    "conditioned": true,
                    "markdown": true
                }
            ],
            "hasRule": true
        },
        {
            "type": "group",
            "id": "999bb81b7aab",
            "properties": [],
            "nested": [
                {
                    "type": "traits",
                    "id": "996ab9d9a86a",
                    "properties": [
                        "actions"
                    ],
                    "fallback": "-",
                    "markdown": true,
                    "hasRule": true
                },
                {
                    "type": "traits",
                    "id": "69ca5b7a3898",
                    "properties": [
                        "traits"
                    ],
                    "fallback": "-",
                    "conditioned": true,
                    "markdown": true,
                    "hasRule": true
                },
                {
                    "type": "traits",
                    "id": "c8794b580948",
                    "properties": [
                        "triggered_actions"
                    ],
                    "fallback": "-",
                    "headingProp": false,
                    "heading": "Triggered Abilities",
                    "conditioned": true,
                    "markdown": true,
                    "hasRule": true
                },
                {
                    "type": "traits",
                    "id": "aa1a3a2abb19",
                    "properties": [
                        "nastier_traits"
                    ],
                    "fallback": "-",
                    "headingProp": false,
                    "heading": "Nastier Specials",
                    "conditioned": true,
                    "subheadingText": "",
                    "markdown": true,
                    "hasRule": true
                }
            ],
            "hasRule": false,
            "cls": "abilities"
        },
        {
            "type": "group",
            "id": "8a7969a96a48",
            "properties": [],
            "nested": [
                {
                    "type": "javascript",
                    "id": "f99b8b1bf908",
                    "conditioned": false,
                    "code": "const getStatLine = (statName, statValue) => {\n    const statLine = document.createElement(\"div\");\n    const statClass = `${statName.toLowerCase()}-block`;\n    statLine.classList.add(\"defense-line\");\n    statLine.classList.add(statClass);\n\n    const statNameBlock = document.createElement(\"span\");\n    statNameBlock.classList.add(\"defense-name\");\n    statNameBlock.innerText = statName.toUpperCase();\n\n    const statValueBlock = document.createElement(\"span\");\n    statValueBlock.classList.add(\"defense-value\");\n\n    if (statName === \"HP\" && monster.mook !== undefined) {\n        statValue = `${statValue} (mook)`;\n    }\n\n    statValueBlock.innerText = statValue;\n\n    statLine.append(statNameBlock);\n    statLine.append(statValueBlock);\n\n    return statLine;\n}\n\nconst statFullBlock = document.createElement(\"div\");\nstatFullBlock.classList.add(\"defense-block\");\nstatFullBlock.append(getStatLine(\"AC\", monster.ac));\nstatFullBlock.append(getStatLine(\"PD\", monster.pd));\nstatFullBlock.append(getStatLine(\"MD\", monster.md));\nstatFullBlock.append(getStatLine(\"HP\", monster.hp));\n\nreturn statFullBlock;\n"
                },
                {
                    "type": "property",
                    "id": "6aa9684a08db",
                    "properties": [
                        "mook"
                    ],
                    "fallback": "-",
                    "display": "Mook",
                    "conditioned": true,
                    "callback": "return `Kill one _${monster.name}_ for every ${monster.hp} damage dealt to the mob`",
                    "markdown": true
                }
            ],
            "cls": "monster-stats"
        },
        {
            "type": "group",
            "id": "a96bcabad818",
            "properties": [],
            "nested": [
                {
                    "type": "text",
                    "id": "4a0b6a59385a",
                    "properties": [
                        "description"
                    ],
                    "text": null,
                    "conditioned": true,
                    "fallback": "-",
                    "markdown": true
                }
            ],
            "cls": "monster-description"
        }
    ],
    name: "Basic 13th Age Monster Layout",
    id: "basic-13th-age-monster-block"
}