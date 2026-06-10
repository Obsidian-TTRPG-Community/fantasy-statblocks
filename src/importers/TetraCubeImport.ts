import type { Monster, Spell, Trait } from "types";
const CR: { [key: string]: any } = {
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
function getModAsNumber(stat: number): number {
    let mod = Math.floor(((stat ?? 10) - 10) / 2);
    return mod;
}
const DiceBySize: { [key: string]: number } = {
    tiny: 4,
    small: 6,
    medium: 8,
    large: 10,
    huge: 12,
    gargantuan: 20
};
const SAVES: Record<
    string,
    | "strength"
    | "dexterity"
    | "constitution"
    | "intelligence"
    | "wisdom"
    | "charisma"
> = {
    str: "strength",
    dex: "dexterity",
    con: "constitution",
    int: "intelligence",
    wis: "wisdom",
    cha: "charisma"
};

class TetraMonster {
    proficiency: number = this.getProf(this.monster);
    stats: Record<keyof typeof SAVES, number> = {
        str: this.monster.strPoints,
        dex: this.monster.dexPoints,
        con: this.monster.conPoints,
        int: this.monster.intPoints,
        wis: this.monster.wisPoints,
        cha: this.monster.chaPoints
    };
    modifiers: Record<keyof typeof SAVES, number> = {
        str: getModAsNumber(this.stats.str),
        dex: getModAsNumber(this.stats.dex),
        con: getModAsNumber(this.stats.con),
        int: getModAsNumber(this.stats.int),
        wis: getModAsNumber(this.stats.wis),
        cha: getModAsNumber(this.stats.cha)
    };
    constructor(public monster: any) {}
    static parse(monster: any) {
        const importer = new TetraMonster(monster);
        const importedMonster: Monster = {
            image: null,
            name: monster.name,
            source: "TetraCube",
            type: monster.type,
            subtype: monster.tag,
            size: monster.size,
            alignment: monster.alignment,
            hp: importer.getHP(monster)?.hp,
            hit_dice: importer.getHP(monster)?.dice,
            ac: (monster.ac ?? [])[0]?.ac ?? "",
            speed: importer.getSpeedString(monster),
            stats: [
                monster.strPoints,
                monster.dexPoints,
                monster.conPoints,
                monster.intPoints,
                monster.wisPoints,
                monster.chaPoints
            ],
            damage_immunities: importer.parseImmune(monster, "i"),
            damage_resistances: importer.parseImmune(monster, "r"),
            damage_vulnerabilities: importer.parseImmune(monster, "v"),
            condition_immunities: importer.parseConditions(monster),
            saves: importer.getSaves(monster),
            skillsaves: importer.getSkills(monster),
            senses: importer.getSenses(monster),
            languages: importer.getLanguages(monster),
            cr: monster.cr ?? "",
            traits: importer.getTraits(monster.abilities),
            actions: importer.getTraits(monster.actions),
            bonus_actions: importer.getTraits(monster.bonusActions),
            reactions: importer.getTraits(monster.reactions),
            legendary_description: (monster.isLegendary ?? false) ? monster.legendariesDescription : null,
            legendary_actions: (monster.isLegendary ?? false) ? importer.getTraits(monster.legendaries) : null,
            mythic_description: (monster.isMythic ?? false) ? monster.mythicDescription : null,
            mythic_actions: (monster.isMythic ?? false) ? importer.getTraits(monster.mythics) : null,
            lair_description: (monster.isLair ?? false) ? monster.lairDescription : null,
            lair_actions: (monster.isLair ?? false) ? importer.getTraits(monster.lairs) : null,
            lair_description_end: (monster.isLair ?? false) ? monster.lairDescriptionEnd : null,
            regional_description: (monster.isRegional ?? false) ? monster.regionalDescription : null,
            regional_actions: (monster.isRegional ?? false) ? importer.getTraits(monster.regionals) : null,
            regional_description_end: (monster.isRegional ?? false) ? monster.regionalDescriptionEnd : null,
            spells: importer.getSpells(monster.abilities)
        };
        return importedMonster;
    }
    getHP(monster: any): { hp?: number; dice?: string } {
        if (
            monster.customHP ||
            (monster.hitDice && /(\d+) \((.+)\)/.test(monster.hpText))
        ) {
            const [_, hp, dice] = monster.hpText.match(/(\d+) \((.+)\)/) ?? [];
            return { hp, dice };
        }
        if (monster.hitDice) {
            const hitdice = Number(monster.hitDice);
            const size = DiceBySize[monster.size] ?? DiceBySize["medium"];
            const con = this.modifiers.con;

            const hp = (hitdice * size) / (2 + 0.5) + con * hitdice;

            const func = con > 0 ? "+" : "-";
            const conString = con == 0 ? "" : ` ${func} ${con * hitdice}`;

            return { hp, dice: `${hitdice}d${size}${conString}` };
        }
    }
    getSpeedString(monster: any): string {
        if (monster.customSpeed) return monster.speedDesc;
        let speeds = [monster.speed + " ft."];
        if (monster.burrowSpeed > 0)
            speeds.push("burrow " + monster.burrowSpeed + " ft.");
        if (monster.climbSpeed > 0)
            speeds.push("climb " + monster.climbSpeed + " ft.");
        if (monster.flySpeed > 0)
            speeds.push(
                "fly " +
                    monster.flySpeed +
                    " ft." +
                    (monster.hover ? " (hover)" : "")
            );
        if (monster.swimSpeed > 0)
            speeds.push("swim " + monster.swimSpeed + " ft.");
        return speeds.join(", ");
    }
    parseImmune(monster: any, type: string): string {
        let damagetypes = [];
        if ("damagetypes" in monster && Array.isArray(monster.damagetypes)) {
            damagetypes.push(
                ...monster.damagetypes
                    .filter((t: any) => t.type == type)
                    .map((d: any) => d.name)
            );
        }
        let specialdamage = [];
        if (
            "specialdamage" in monster &&
            Array.isArray(monster.specialdamage)
        ) {
            specialdamage.push(
                ...monster.specialdamage
                    .filter((t: any) => t.type == type)
                    .map((d: any) => d.name)
            );
        }
        return [damagetypes.join(", "), specialdamage.join(", ")]
            .filter((v) => v && v.length)
            .join("; ");
    }
    getLanguages(monster: any): string {
        const languages = [];
        const speaksLanguages = [],
            understandsLanguages = [];
        for (let index = 0; index < monster.languages.length; index++) {
            const language = monster.languages[index];
            if (language.speaks || language.speaks == undefined)
                speaksLanguages.push(language);
            else understandsLanguages.push(language);
        }
        if (speaksLanguages.length > 0) {
            languages.push(
                [
                    speaksLanguages
                        .slice(0, speaksLanguages.length - 2)
                        .map((d: any) => d.name)
                        .join(", "),
                    speaksLanguages.slice(-1).map((d: any) => d.name)
                ]
                    .filter((v) => v)
                    .join(" and ")
            );
        }

        if (understandsLanguages.length > 0) {
            languages.push(
                [
                    understandsLanguages
                        .slice(0, understandsLanguages.length - 2)
                        .map((d: any) => d.name)
                        .join(", "),
                    understandsLanguages.slice(-1).map((d: any) => d.name)
                ]
                    .filter((v) => v)
                    .join(" and ")
            );
        }

        if (monster.telepathy > 0)
            languages.push("telepathy " + monster.telepathy + " ft.");
        if (languages.length == 0) languages.push("&mdash;");
        return languages.join("; ");
    }
    getSenses(monster: any): string {
        let senses = [];
        if (monster.blindsight > 0)
            senses.push(
                "blindsight " +
                    monster.blindsight +
                    " ft." +
                    (monster.blind ? " (blind beyond this radius)" : "")
            );
        if (monster.darkvision > 0)
            senses.push("darkvision " + monster.darkvision + " ft.");
        if (monster.tremorsense > 0)
            senses.push("tremorsense " + monster.tremorsense + " ft.");
        if (monster.truesight > 0)
            senses.push("truesight " + monster.truesight + " ft.");

        // Passive Perception
        let ppData = monster.skills.find(
                (skill: any) => skill.name == "perception"
            ),
            pp = 10 + getModAsNumber(monster.wisPoints);
        if (ppData != null) pp += this.proficiency * ("note" in ppData ? 2 : 1);
        senses.push("passive Perception " + pp);
        return senses.join(", ");
    }

    transformString(string: string): string {
        return string
            .replace(/(_|\*|\s*>\s*)/g, "")
            .replace(
                /\[MON(S)?\]/g,
                `${
                    this.monster.shortName && this.monster.shortName.length
                        ? this.monster.shortName
                        : this.monster.name
                }$1`
            )
            .replace(/\[(\w+)\]/g, (match, stat) => {
                stat = stat.toLowerCase();
                if (!(stat in this.modifiers)) return match;
                const mod = this.modifiers[stat];
                return `${mod >= 0 ? "+" : ""}${mod}`;
            })
            .replace(
                /\[(\w+) (ATK|SAVE)\s?(?:([+-])\s?(\d+))?\]/g,
                (match, stat, type = "ATK", sign = "+", bonus = 0) => {
                    stat = stat.toLowerCase();
                    if (!(stat in this.modifiers)) return match;

                    bonus = sign == "+" ? Number(bonus) : -Number(bonus);
                    const attack =
                        (type == "ATK" ? 0 : 8) +
                        this.modifiers[stat] +
                        this.proficiency +
                        bonus;
                    return `${attack >= 0 ? "+" : ""}${attack}`;
                }
            )
            .replace(
                /\[(\w+)?\s?(\d*[dD]\d+)\s?(?:([+-])\s?(\d+))?\]/g,
                (match, stat, roll, sign = "+", bonus = 0) => {
                    stat = stat.toLowerCase();

                    let [, rolls = 1, face] =
                        roll.match(/(\d*)[dD](\d+)/) ?? [];
                    if (!rolls) rolls = 1;
                    if (!face) return match;
                    bonus = sign == "+" ? Number(bonus) : -Number(bonus);
                    if (stat in this.modifiers) {
                        bonus += this.modifiers[stat];
                    }
                    const avg = Math.floor((face / 2 + 0.5) * rolls) + bonus;
                    const dice = [`${rolls}d${face}`];
                    if (bonus && bonus != 0) {
                        dice.push(bonus >= 0 ? "+" : "-");
                        dice.push(bonus);
                    }
                    return `${avg} (${dice.join(" ")})`;
                }
            );
    }

    getTraits(abilities: any): Trait[] {
        if (!abilities || !abilities.length) return;
        const traits = abilities
            .filter((ability: Trait) => ability.name != "Spellcasting")
            .map((ability: Trait) => {
                return {
                    name: ability.name,
                    desc: this.transformString(ability.desc)
                };
            });
        return traits;
    }

    getSpells(monster: any): Spell[] {
        if (!monster.abilities || !monster.abilities.length) return;
        let { desc } =
            monster.abilities.find(
                (ability: Trait) => ability.name == "Spellcasting"
            ) ?? {};
        if (!desc) return;
        const spells = this.transformString(desc)
            .trim()
            .split("\n")
            .filter((desc: string) => desc.length);
        return spells;
    }
    getSaves(monster: any): {
        strength?: number;
        dexterity?: number;
        constitution?: number;
        intelligence?: number;
        wisdom?: number;
        charisma?: number;
    }[] {
        if (
            !("sthrows" in monster) ||
            !Array.isArray(monster.sthrows) ||
            !monster.sthrows.length
        )
            return [];
        const prof = this.proficiency;
        const saves = [];
        for (const save of monster.sthrows) {
            const name = save.name;
            const mod = getModAsNumber(Number(monster[`${name}Points`]));
            if (isNaN(mod)) continue;
            saves.push({ [SAVES[name]]: mod + prof });
        }
        return saves;
    }

    getSkills(monster: any): { [key: string]: number }[] {
        if (
            !("skills" in monster) ||
            !Array.isArray(monster.skills) ||
            !monster.skills.length
        )
            return [];
        const skills = [];
        const prof = this.proficiency;
        for (const skill of monster.skills) {
            const stat = skill.stat;
            const mod = getModAsNumber(Number(monster[`${stat}Points`]));
            if (isNaN(mod)) continue;

            const exp = "note" in skill;

            skills.push({ [skill.name]: prof + mod + mod * Number(exp) });
        }
        return skills;
    }

    getProf(monster: any) {
        let prof = 0;
        if (monster.cr == "*") prof = monster.customProf;
        if ("cr" in monster && monster.cr in CR) {
            prof = Math.max(
                Math.floor(2 + ((CR[monster.cr]?.value ?? 0) - 1) / 4),
                2
            );
        }
        return isNaN(Number(prof)) ? 0 : Number(prof);
    }
    parseConditions(monster: any): string {
        if ("conditions" in monster && Array.isArray(monster.conditions)) {
            return monster.conditions.map((c: any) => c.name).join(", ");
        }
    }
}

export async function buildMonsterFromTetraCube(
    file: File
): Promise<Monster[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const monsterMap: Monster[] = [];
        reader.onload = async (event: any) => {
            try {
                let json = JSON.parse(event.target.result);
                let monsters;
                if ("monster" in json) {
                    monsters = json.monster;
                } else if (Array.isArray(json)) {
                    monsters = json;
                } else if (typeof json == "object") {
                    monsters = [json];
                } else {
                    reject("Invalid monster JSON provided.");
                }
                const imported: Monster[] = [];
                for (const monster of monsters) {
                    try {
                        const importedMonster: Monster =
                            TetraMonster.parse(monster);
                        imported.push(importedMonster);
                    } catch (e) {
                        console.error(e);
                        continue;
                    }
                }

                resolve(imported);
            } catch (e) {
                console.error(`reject!!!`, e);
                reject(e);
            }
        };

        reader.readAsText(file);
    });
}
/* function getHP(monster: any): { hp?: number; dice?: string } {
    if (
        monster.customHP ||
        (monster.hitDice && /(\d+) \((.+)\)/.test(monster.hpText))
    ) {
        const [_, hp, dice] = monster.hpText.match(/(\d+) \((.+)\)/) ?? [];
        return { hp, dice };
    }
    if (monster.hitDice) {
        const hitdice = Number(monster.hitDice);
        const size = DiceBySize[monster.size] ?? DiceBySize["medium"];
        const con = getModAsNumber(Number(monster.conPoints) ?? 0);

        const hp = (hitdice * size) / (2 + 0.5) + con * hitdice;

        const func = con > 0 ? "+" : "-";
        const conString = con == 0 ? "" : ` ${func} ${con * hitdice}`;

        return { hp, dice: `${hitdice}d${size}${conString}` };
    }
}

function getSpeedString(monster: any): string {
    if (monster.customSpeed) return monster.speedDesc;
    let speeds = [monster.speed + " ft."];
    if (monster.burrowSpeed > 0)
        speeds.push("burrow " + monster.burrowSpeed + " ft.");
    if (monster.climbSpeed > 0)
        speeds.push("climb " + monster.climbSpeed + " ft.");
    if (monster.flySpeed > 0)
        speeds.push(
            "fly " +
                monster.flySpeed +
                " ft." +
                (monster.hover ? " (hover)" : "")
        );
    if (monster.swimSpeed > 0)
        speeds.push("swim " + monster.swimSpeed + " ft.");
    return speeds.join(", ");
}

function parseImmune(monster: any, type: string): string {
    let damagetypes = [];
    if ("damagetypes" in monster && Array.isArray(monster.damagetypes)) {
        damagetypes.push(
            ...monster.damagetypes
                .filter((t: any) => t.type == type)
                .map((d: any) => d.name)
        );
    }
    let specialdamage = [];
    if ("specialdamage" in monster && Array.isArray(monster.specialdamage)) {
        specialdamage.push(
            ...monster.specialdamage
                .filter((t: any) => t.type == type)
                .map((d: any) => d.name)
        );
    }
    return [damagetypes.join(", "), specialdamage.join(", ")]
        .filter((v) => v && v.length)
        .join("; ");
}
function getLanguages(monster: any): string {
    const languages = [];
    const speaksLanguages = [],
        understandsLanguages = [];
    for (let index = 0; index < monster.languages.length; index++) {
        const language = monster.languages[index];
        if (language.speaks || language.speaks == undefined)
            speaksLanguages.push(language);
        else understandsLanguages.push(language);
    }
    if (speaksLanguages.length > 0) {
        languages.push(
            [
                speaksLanguages
                    .slice(0, speaksLanguages.length - 2)
                    .map((d: any) => d.name)
                    .join(", "),
                speaksLanguages.slice(-1).map((d: any) => d.name)
            ]
                .filter((v) => v)
                .join(" and ")
        );
    }

    if (understandsLanguages.length > 0) {
        languages.push(
            [
                understandsLanguages
                    .slice(0, understandsLanguages.length - 2)
                    .map((d: any) => d.name)
                    .join(", "),
                understandsLanguages.slice(-1).map((d: any) => d.name)
            ]
                .filter((v) => v)
                .join(" and ")
        );
    }

    if (monster.telepathy > 0)
        languages.push("telepathy " + monster.telepathy + " ft.");
    if (languages.length == 0) languages.push("&mdash;");
    return languages.join("; ");
}
function getSenses(monster: any): string {
    let senses = [];
    if (monster.blindsight > 0)
        senses.push(
            "blindsight " +
                monster.blindsight +
                " ft." +
                (monster.blind ? " (blind beyond this radius)" : "")
        );
    if (monster.darkvision > 0)
        senses.push("darkvision " + monster.darkvision + " ft.");
    if (monster.tremorsense > 0)
        senses.push("tremorsense " + monster.tremorsense + " ft.");
    if (monster.truesight > 0)
        senses.push("truesight " + monster.truesight + " ft.");

    // Passive Perception
    let ppData = monster.skills.find(
            (skill: any) => skill.name == "perception"
        ),
        pp = 10 + getModAsNumber(monster.wisPoints);
    if (ppData != null) pp += getProf(monster) * ("note" in ppData ? 2 : 1);
    senses.push("passive Perception " + pp);
    return senses.join(", ");
}

function transformString(string: string, monster: any): string {
    return string
        .replace(/_/g, "")
        .replace(/\[MON(S)?\]/g, `${monster.name}$1`);
}

function getTraits(monster: any): Trait[] {
    if (!monster.abilities || !monster.abilities.length) return;
    const traits = monster.abilities
        .filter((ability: Trait) => ability.name != "Spellcasting")
        .map((ability: Trait) => {
            return {
                name: ability.name,
                desc: ability.desc
                    .replace(/_/g, "")
                    .replace(/\[MON(S)?\]/g, `${monster.name}$1`)
            };
        });
    return traits;
}

function getSpells(monster: any): Spell[] {
    if (!monster.abilities || !monster.abilities.length) return;
    let { desc } =
        monster.abilities.find(
            (ability: Trait) => ability.name == "Spellcasting"
        ) ?? {};
    if (!desc) return;
    const [, save] = desc.match(/\[(\w{3}) SAVE\]/) ?? [];
    if (save) {
        const prof = getProf(monster);
        const stat = monster[`${save.toLowerCase()}Points`];
        if (stat && !isNaN(Number(stat))) {
            const mod = getModAsNumber(Number(stat));
            const spellsave = 8 + mod + prof;
            const attack = mod + prof;
            desc = desc.replace(/\[\w+ SAVE\]/, spellsave);
            desc = desc.replace(/\[\w+ ATK\]/, `+${attack}`);
        }
    }
    const spells = desc
        .replace(/(_|>\s)/g, "")
        .split("\n")
        .filter((desc: string) => desc.length)
        .trim();

    return spells;
}
function getSaves(monster: any): {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
}[] {
    if (
        !("sthrows" in monster) ||
        !Array.isArray(monster.sthrows) ||
        !monster.sthrows.length
    )
        return [];
    const prof = getProf(monster);
    const saves = [];
    for (const save of monster.sthrows) {
        const name = save.name;
        const mod = getModAsNumber(Number(monster[`${name}Points`]));
        if (isNaN(mod)) continue;
        saves.push({ [SAVES[name]]: mod + prof });
    }
    return saves;
}

function getSkills(monster: any): { [key: string]: number }[] {
    if (
        !("skills" in monster) ||
        !Array.isArray(monster.skills) ||
        !monster.skills.length
    )
        return [];
    const skills = [];
    const prof = getProf(monster);
    for (const skill of monster.skills) {
        const stat = skill.stat;
        const mod = getModAsNumber(Number(monster[`${stat}Points`]));
        if (isNaN(mod)) continue;

        const exp = "note" in skill;

        skills.push({ [skill.name]: prof + mod + mod * Number(exp) });
    }
    return skills;
}

function getProf(monster: any) {
    if (monster.cr == "*") return monster.customProf;
    if ("cr" in monster && monster.cr in CR) {
        return Math.max(
            Math.floor(2 + ((CR[monster.cr]?.value ?? 0) - 1) / 4),
            2
        );
    }
    return 0;
}
function parseConditions(monster: any): string {
    if ("conditions" in monster && Array.isArray(monster.conditions)) {
        return monster.conditions.map((c: any) => c.name).join(", ");
    }
} */
