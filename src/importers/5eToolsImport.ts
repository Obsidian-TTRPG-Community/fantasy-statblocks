import { stringify } from "src/util/util";
import type {
    ConditionImmunityArray,
    Creature5eTools,
    DamageImmunityArray,
    DamageResistArray,
    DamageVulnerabilityArray,
    Size,
    _SpeedVal,
    EntrySpellcasting,
    EntrySpellcastingFrequency,
    _ArrayOfSpell,
    Align,
    Alignment
} from "./bestiary";
import type { Monster } from "index";

const abilityMap: { [key: string]: string } = {
    str: "strength",
    dex: "dexterity",
    con: "constitution",
    wis: "wisdom",
    int: "intelligence",
    cha: "charisma"
};

function parseString(str: string) {
    if (!str) return "";
    return str
        .replace(/{@condition (.+?)(?:\|.+)?}/g, "$1")
        .replace(/{@item (.+?)(?:\|.+)?}/g, "$1")
        .replace(/{@spell ([\s\S]+?)(?:\|.+)?}/g, `$1`)
        .replace(/{@recharge (.+?)(?:\|.+)?}/g, `(Recharge $1-6)`)
        .replace(/{@recharge}/g, `(Recharge 6)`)
        .replace(/{@h}/g, ``)
        .replace(/{@damage (.+?)}/g, `$1`)
        .replace(/{@atk ms}/g, `Melee Spell Attack`)
        .replace(/{@atk rs}/g, `Ranged Spell Attack`)
        .replace(/{@atk mw}/g, `Melee Weapon Attack`)
        .replace(/{@atk rw}/g, `Ranged Weapon Attack`)
        .replace(/{@atk mw,rw}/g, `Melee / Ranged Weapon Attack`)
        .replace(/{@atkr m}/g, `Melee Attack Roll:`)
        .replace(/{@atkr r}/g, `Ranged Attack Roll:`)
        .replace(/{@atkr m,r}/g, `Melee or Ranged Attack Roll:`)
        .replace(/{@hom}/g, `Hit or Miss:`)
        .replace(/{@creature (.+?)(?:\|.+)?}/g, `$1`)
        .replace(/{@skill (.+?)(?:\|.+)?}/g, `$1`)
        .replace(/{@dice (.+?)(?:\|.+)?}/g, `$1`)
        .replace(/{@hit (\d+?)(?:\|.+)?}/g, `+$1`)
        .replace(/{@dc (\d+?)(?:\|.+)?}/g, `$1`)
        .replace(/{@quickref (.+?)\|\|.+?}/, `$1`)
        .replace(/{@actSave str}/g, `Strength Saving Throw:`)
        .replace(/{@actSave dex}/g, `Dexterity Saving Throw:`)
        .replace(/{@actSave con}/g, `Constitution Saving Throw:`)
        .replace(/{@actSave int}/g, `Inteligence Saving Throw:`)
        .replace(/{@actSave wis}/g, `Wisdom Saving Throw:`)
        .replace(/{@actSave cha}/g, `Charisma Saving Throw:`)
        .replace(/{@actSaveFail}/g, `Failure:`)
        .replace(/{@actSaveSuccess}/g, `Success:`)
        .replace(/{actSaveSuccessOrFail}/g, `Failure or Success:`)
        .replace(/{@variantrule (.+?)( \[|\|).+?}/g,`$1`);

}

export async function build5eMonsterFromFile(file: File): Promise<Monster[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async (event: any) => {
            try {
                let json = JSON.parse(event.target.result);
                let monsters: Creature5eTools[];
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
                        const importedMonster: Monster = {
                            image: null,
                            bestiary: true,
                            name: monster.name,
                            source: getSource(monster),
                            type: getType(monster.type),
                            subtype: getSubType(monster.type),
                            size: SIZE_ABV_TO_FULL[monster.size?.[0]],
                            alignment: getMonsterAlignment(monster),
                            hp:
                                monster.hp && "average" in monster.hp
                                    ? monster.hp?.average
                                    : null,
                            hit_dice:
                                monster.hp && "formula" in monster.hp
                                    ? monster.hp?.formula
                                    : "",
                            ac: getAc(monster.ac),
                            speed: getSpeedString(monster),
                            stats: [
                                monster.str,
                                monster.dex,
                                monster.con,
                                monster.int,
                                monster.wis,
                                monster.cha
                            ],
                            damage_immunities: parseString(
                                parseImmune(monster.immune)
                            ),
                            damage_resistances: parseString(
                                parseImmune(monster.resist)
                            ),
                            damage_vulnerabilities: parseString(
                                parseImmune(monster.vulnerable)
                            ),
                            condition_immunities: parseString(
                                parseImmune(monster.conditionImmune)
                            ),
                            saves: Object.entries(monster.save ?? {})
                                .map(
                                    (
                                        thr: [
                                            ability: keyof typeof abilityMap,
                                            value: string
                                        ]
                                    ) => {
                                        if (!thr || !thr[1]) return;
                                        const [, v] =
                                            thr[1]?.match(/.*?(\d+)/) ?? [];
                                        if (!v) return;
                                        return { [abilityMap[thr[0]]]: v };
                                    }
                                )
                                .filter((v) => v),
                            skillsaves: getSkillsaves(monster),
                            senses: getSenses(monster),
                            languages: stringify(
                                monster.languages,
                                0,
                                ", ",
                                false
                            ),
                            cr: getCR(monster.cr),
                            traits:
                                monster.trait?.flatMap(normalizeEntries) ?? [],
                            actions:
                                monster.action?.flatMap(normalizeEntries) ?? [],
                            bonus_actions:
                                monster.bonus?.flatMap(normalizeEntries) ?? [],
                            reactions:
                                monster.reaction?.flatMap(normalizeEntries) ??
                                [],
                            legendary_actions:
                                monster.legendary?.flatMap(normalizeEntries) ??
                                [],
                            mythic_actions: [
                                ...((monster.mythicHeader
                                    ? [
                                          {
                                              name: "",
                                              entries: monster.mythicHeader
                                          }
                                      ]
                                    : []
                                ).flatMap(normalizeEntries) ?? []),
                                ...(monster.mythic?.flatMap(normalizeEntries) ??
                                    [])
                            ],
                            spells: getSpells(monster),
                            spellsNotes: getSpellNotes(monster).join(" ")
                        };
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

function getType(type: Creature5eTools["type"]) {
    if (!type) return;
    if (typeof type == "string") {
        return type;
    }
    return type.type;
}

function getSubType(type: Creature5eTools["type"]) {
    if (!type) return;
    if (typeof type == "string") {
        return;
    }
    if (!type.tags) {
        return;
    }
    let result: string[] = [];
    for (var t of type.tags) {
        if (typeof t == "string") {
            result.push(t);
        } else {
            result.push(t.tag);
        }
    }
    return result.join(", ");
}

function getCR(type: Creature5eTools["cr"]) {
    if (!type) return;
    if (typeof type == "string") {
        return type;
    }
    return type.cr;
}

function getSpellNotes(monster: Creature5eTools) {
    let spellNotes: string[] = [];

    for (const element in monster.spellcasting) {
        spellNotes.push(
            stringify(
                monster.spellcasting[element].footerEntries,
                0,
                ", ",
                false
            )
        );
    }

    return spellNotes;
}

function parseImmune(
    immune:
        | DamageImmunityArray
        | DamageResistArray
        | DamageVulnerabilityArray
        | ConditionImmunityArray
): string {
    if (!immune) return "";
    const ret = [];
    for (let imm of immune) {
        if (typeof imm == "string") {
            ret.push(imm);
            continue;
        }
        if ("special" in imm) {
            ret.push(imm.special);
            continue;
        }
        if ("immune" in imm) {
            ret.push(
                `${parseImmune(imm.immune)}${imm.note ? " " : ""}${
                    imm.note ? imm.note : ""
                }`
            );
            continue;
        }
        if ("resist" in imm) {
            ret.push(
                `${parseImmune(imm.resist)}${imm.note ? " " : ""}${
                    imm.note ? imm.note : ""
                }`
            );
            continue;
        }
    }
    return ret.join(", ");
}

function getAc(acField: Creature5eTools["ac"] = []) {
    const [item] = acField;
    if (!item) return;
    if (typeof item === "number") {
        return item;
    }
    if (typeof item == "string") {
        const [_, ac] = (item as string).match(/(\d+)/) ?? [];
        return ac ? Number(ac) : null;
    }
    if (typeof item !== "object") return;
    if ("special" in item) {
        return item.special;
    }
    if (!("ac" in item)) return null;
    if ("from" in item) {
        return `${item.ac} (${parseString(item.from.join(", "))})`;
    }
    return `${item.ac}`;
}

const spellMap: { [K in keyof EntrySpellcasting["spells"]]: string } = {
    "0": "Cantrips (at will)",
    "1": "1st level",
    "2": "2nd level",
    "3": "3rd level",
    "4": "4th level",
    "5": "5th level",
    "6": "6th level",
    "7": "7th level",
    "8": "8th level",
    "9": "9th level"
};

type ExtractedSpells = Array<string | Record<string, string>>;

function getSpellStringFromArray(spellsArray: _ArrayOfSpell) {
    const ret: string[] = [];
    for (const entry of spellsArray) {
        if (typeof entry == "string") {
            ret.push(entry);
            continue;
        }
        if (!entry.hidden && entry.entry && entry.entry.length) {
            ret.push(entry.entry);
        }
    }
    return parseString(ret.join(", "));
}
type SpellFrequency = Array<[frequency: number, spells: string]>;
function getSpellsFromFrequency(
    spells: EntrySpellcastingFrequency
): SpellFrequency {
    const ret: SpellFrequency = [];
    for (const freqString of Object.keys(spells)) {
        const spellArray = spells[freqString as keyof typeof spells];
        const frequency = Number(freqString.replace(/[^0-9]/, ""));
        ret.push([frequency, getSpellStringFromArray(spellArray)]);
    }
    return ret;
}

function extractSpellsBlocks(spellBlock: EntrySpellcasting): ExtractedSpells {
    let ret: ExtractedSpells = [
        parseString((spellBlock.headerEntries ?? []).join("\n"))
    ];

    if ("spells" in spellBlock) {
        try {
            for (const level in spellBlock.spells ?? {}) {
                const block =
                    spellBlock.spells[level as keyof typeof spellBlock.spells];
                const { spells } = block;
                let name: string = `${
                    spellMap[level as keyof typeof spellBlock.spells]
                }`;
                name += "slots" in block ? ` (${block.slots} slots)` : "";

                const sp = parseString(spells.join(", "));
                ret.push({ [name]: sp });
            }
        } catch (e) {
            throw new Error("There was an error parsing the spells.");
        }
    }
    if ("will" in spellBlock) {
        if (spellBlock.will.length > 0) {
            try {
                ret.push({
                    "At will": getSpellStringFromArray(spellBlock.will)
                });
            } catch (e) {
                throw new Error(
                    "There was an error parsing the at-will spells."
                );
            }
        }
    }
    if ("ritual" in spellBlock) {
        if (spellBlock.ritual.length > 0) {
            try {
                ret.push({
                    Rituals: getSpellStringFromArray(spellBlock.ritual)
                });
            } catch (e) {
                throw new Error(
                    "There was an error parsing the ritual spells."
                );
            }
        }
    }

    const frequencyCasting = [
        "rest",
        "daily",
        "weekly",
        "yearly",
        "charges"
    ] as const;
    const frequencyMap: { [K in (typeof frequencyCasting)[number]]: string } = {
        rest: "/rest each",
        daily: "/day each",
        weekly: "/week each",
        yearly: "/year each",
        charges: " charges"
    };
    for (const frequency of frequencyCasting) {
        if (frequency in spellBlock) {
            const entries = getSpellsFromFrequency(spellBlock[frequency]);
            for (const entry of entries.sort((a, b) => b[0] - a[0])) {
                ret.push({
                    [`${entry[0]}${frequencyMap[frequency]}`]: entry[1]
                });
            }
        }
    }

    return ret;
}

function getSpells(monster: Creature5eTools): ExtractedSpells {
    if (!monster.spellcasting || !monster.spellcasting.length) return [];

    return monster.spellcasting.flatMap(extractSpellsBlocks);
}
function getMonsterAlignment(monster: Creature5eTools): string {
    if (!monster.alignment) return null;
    return getAlignmentString(monster.alignment);
}
function getAlignmentString(alignment: Align[] | Align | Alignment): string {
    if (!alignment) return null; // used in sidekicks
    let alignments: string[] = [];
    if (Array.isArray(alignment)) {
        let alignStr: string[] = [];
        for (const align of alignment) {
            if (typeof align === "string") {
                alignStr.push(getAlignmentString(align));
            } else {
                alignments.push(getAlignmentString(align));
            }
        }
        if (alignStr.length > 0) {
            alignments.push(alignStr.join(" "));
        }
    } else if (typeof alignment === "object") {
        if ("special" in alignment && alignment.special != null) {
            return alignment.special;
        } else if ("alignment" in alignment) {
            return `${(alignment.alignment ?? [])
                .map((a) => getAlignmentString(a))
                .join(" ")}${
                alignment.chance ? ` (${alignment.chance}%)` : ""
            }${alignment.note ? ` (${alignment.note})` : ""}`;
        }
    } else {
        let code = alignment.toUpperCase();
        switch (code) {
            case "L":
                return "lawful";
            case "N":
                return "neutral";
            case "NX":
                return "neutral (law/chaos axis)";
            case "NY":
                return "neutral (good/evil axis)";
            case "C":
                return "chaotic";
            case "G":
                return "good";
            case "E":
                return "evil";
            // "special" values
            case "U":
                return "unaligned";
            case "A":
                return "any alignment";
        }
        return alignment;
    }
    return alignments.join(" or ");
}

function getSpeedString(monster: Creature5eTools): string {
    const speed = monster.speed;
    if (!speed) return "\u2014";
    if (typeof speed == "number") return `${speed}`;

    function getVal(speedProp: _SpeedVal) {
        if (typeof speedProp == "number") return speedProp;
        return speedProp.number != null ? speedProp.number : speedProp;
    }

    function getCond(speedProp: _SpeedVal) {
        if (typeof speedProp == "number") return "";
        return speedProp?.condition ?? "";
    }

    const stack: string[] = [];
    const types = ["walk", "burrow", "climb", "fly", "swim"] as const;
    for (const type of types) {
        if (
            type != "walk" &&
            !(type in speed) &&
            !(type in (speed.alternate ?? {}))
        )
            continue;
        const typeStack = [];
        stack.push(
            `${type === "walk" ? "" : `${type} `}${getVal(
                speed[type] ?? 0
            )} ft. ${getCond(speed[type])}`.trim()
        );

        if (speed.alternate && speed.alternate[type])
            speed.alternate[type].forEach((s) => {
                stack.push(
                    `${type === "walk" ? "" : `${type} `}${getVal(
                        s ?? 0
                    )} ft. ${getCond(s)}`.trim()
                );
            });
    }
    let joiner = ", ";
    if (speed.choose) {
        joiner = "; ";
        const from = speed.choose.from.sort();
        if (from.length > 1) {
            `${from.slice(0, from.length - 1).join(", ")} or ${
                from[from.length - 1]
            } ${speed.choose.amount} ft.${
                speed.choose.note ? ` ${speed.choose.note}` : ""
            }`;
        } else {
            stack.push(
                `${from} ${speed.choose.amount} ft.${
                    speed.choose.note ? ` ${speed.choose.note}` : ""
                }`
            );
        }
    }
    return stack.join(joiner);
}

function getSenses(monster: Creature5eTools): string {
    if (typeof monster.senses == "string") return monster.senses;
    let senses: string[] = [];
    if (Array.isArray(monster.senses) && monster.senses.length > 0) {
        senses = [monster.senses.join(", ").trim()];
    }
    if (monster.passive) {
        senses.push(`passive Perception ${monster.passive}`);
    }
    return senses.join(", ");
}

function getSource(monster: Creature5eTools) {
    let sources: string[] = [];
    if (monster.source?.length) {
        sources.push(SOURCE_JSON_TO_FULL[monster.source] ?? monster.source);
    }
    if (monster.otherSources?.length) {
        sources.push(
            ...monster.otherSources.map(
                (s) => SOURCE_JSON_TO_FULL[s.source] ?? s.source
            )
        );
    }
    return sources;
}
type Entry =
    | string
    | {
          type: string;
          name: string;
          items: Array<
              | { name: string; entry: string }
              | { name: string; entries: string[] }
          >;
      };
type NormalizedEntry = { name: string; desc: string };

/**
 * in some cases 5e.tool data json has not only strings, but objects inside, such as items, or dragon attacks
 * current code assumes that in mixed content simple stings go before list of items
 *
 * transforms complex traits into list of traits, e.g.
 *
 * ```
 * const input = {
 * 	"name": "Breath Weapons {@recharge 5}",
 * 	"entries": [
 * 		"The dragon uses one of the following breath weapons.",
 * 		{
 * 			"type": "list",
 * 			"style": "list-hang-notitle",
 * 			"items": [
 * 				{
 * 					"type": "item",
 * 					"name": "Fire Breath.",
 * 					"entry": "The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature in that line must make a {@dc 18} Dexterity saving throw, taking 45 ({@damage 13d6}) fire damage on a failed save, or half as much damage on a successful one."
 * 				},
 * 				{
 * 					"type": "item",
 * 					"name": "Sleep Breath.",
 * 					"entry": "The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a {@dc 18} Constitution saving throw or fall {@condition unconscious} for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
 * 				}
 * 			]
 * 		}
 * 	]
 * };
 *
 * const output = [
 * 		{
 * 			"name": "Breath Weapons {@recharge 5}",
 * 			"desc": "The dragon uses one of the following breath weapons."
 * 		},
 * 		{
 * 			"name": "Fire Breath.",
 * 			"desc": "The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature in that line must make a {@dc 18} Dexterity saving throw, taking 45 ({@damage 13d6}) fire damage on a failed save, or half as much damage on a successful one."
 * 		},
 * 		{
 * 			"name": "Sleep Breath.",
 * 			"desc": "The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a {@dc 18} Constitution saving throw or fall {@condition unconscious} for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
 * 		},
 * 	]
 *```
 */
function normalizeEntries(trait: {
    name: string;
    entries: Entry[];
}): NormalizedEntry[] {
    const flattenedEntries = trait.entries.reduce(
        (acc, current) => {
            if (typeof current !== "string") {
                const items = current.items?.map((item) => {
                    if (typeof item == "string") {
                        return { name: item, entries: [] };
                    }
                    if ("entry" in item) {
                        return { name: item.name, entries: [item.entry] };
                    }

                    return { name: item.name, entries: item.entries };
                });
                return acc.concat(items ?? []);
            }

            const hasSubItems = acc.length > 1;
            // skip? simple strings if entries already have sub items
            if (!hasSubItems) {
                acc[0].entries.push(current);
            }

            return acc;
        },
        [{ name: trait.name, entries: [] }]
    );

    return flattenedEntries.map(({ name, entries }) => {
        return {
            name: parseString(name),
            desc: parseString(entries.join("\n"))
        };
    });
}

const SZ_FINE = "F";
const SZ_DIMINUTIVE = "D";
const SZ_TINY = "T";
const SZ_SMALL = "S";
const SZ_MEDIUM = "M";
const SZ_LARGE = "L";
const SZ_HUGE = "H";
const SZ_GARGANTUAN = "G";
const SZ_COLOSSAL = "C";
const SZ_VARIES = "V";

const SIZE_ABV_TO_FULL: { [K in Size]: string } = {
    [SZ_FINE]: "Fine",
    [SZ_DIMINUTIVE]: "Diminutive",
    [SZ_TINY]: "Tiny",
    [SZ_SMALL]: "Small",
    [SZ_MEDIUM]: "Medium",
    [SZ_LARGE]: "Large",
    [SZ_HUGE]: "Huge",
    [SZ_GARGANTUAN]: "Gargantuan",
    [SZ_COLOSSAL]: "Colossal",
    [SZ_VARIES]: "Varies"
};

const SRC_CoS = "CoS";
const SRC_DMG = "DMG";
const SRC_EEPC = "EEPC";
const SRC_EET = "EET";
const SRC_HotDQ = "HotDQ";
const SRC_LMoP = "LMoP";
const SRC_Mag = "Mag";
const SRC_MM = "MM";
const SRC_OotA = "OotA";
const SRC_PHB = "PHB";
const SRC_PotA = "PotA";
const SRC_RoT = "RoT";
const SRC_RoTOS = "RoTOS";
const SRC_SCAG = "SCAG";
const SRC_SKT = "SKT";
const SRC_ToA = "ToA";
const SRC_ToD = "ToD";
const SRC_TTP = "TTP";
const SRC_TYP = "TftYP";
const SRC_TYP_AtG = "TftYP-AtG";
const SRC_TYP_DiT = "TftYP-DiT";
const SRC_TYP_TFoF = "TftYP-TFoF";
const SRC_TYP_THSoT = "TftYP-THSoT";
const SRC_TYP_TSC = "TftYP-TSC";
const SRC_TYP_ToH = "TftYP-ToH";
const SRC_TYP_WPM = "TftYP-WPM";
const SRC_VGM = "VGM";
const SRC_XGE = "XGE";
const SRC_OGA = "OGA";
const SRC_MTF = "MTF";
const SRC_WDH = "WDH";
const SRC_WDMM = "WDMM";
const SRC_GGR = "GGR";
const SRC_KKW = "KKW";
const SRC_LLK = "LLK";
const SRC_GoS = "GoS";
const SRC_AI = "AI";
const SRC_OoW = "OoW";
const SRC_ESK = "ESK";
const SRC_DIP = "DIP";
const SRC_HftT = "HftT";
const SRC_DC = "DC";
const SRC_SLW = "SLW";
const SRC_SDW = "SDW";
const SRC_BGDIA = "BGDIA";
const SRC_LR = "LR";
const SRC_AL = "AL";
const SRC_SAC = "SAC";
const SRC_ERLW = "ERLW";
const SRC_EFR = "EFR";
const SRC_RMBRE = "RMBRE";
const SRC_RMR = "RMR";
const SRC_MFF = "MFF";
const SRC_AWM = "AWM";
const SRC_IMR = "IMR";
const SRC_SADS = "SADS";
const SRC_EGW = "EGW";
const SRC_EGW_ToR = "ToR";
const SRC_EGW_DD = "DD";
const SRC_EGW_FS = "FS";
const SRC_EGW_US = "US";
const SRC_MOT = "MOT";
const SRC_IDRotF = "IDRotF";
const SRC_TCE = "TCE";
const SRC_VRGR = "VRGR";
const SRC_HoL = "HoL";
const SRC_SCREEN = "Screen";
const SRC_SCREEN_WILDERNESS_KIT = "ScreenWildernessKit";
const SRC_HEROES_FEAST = "HF";
const SRC_CM = "CM";
const SRC_WBtW = "WBtW";
const SRC_CRCotN = "CRCotN";

const SRC_AL_PREFIX = "AL";

const SRC_ALCoS = `${SRC_AL_PREFIX}CurseOfStrahd`;
const SRC_ALEE = `${SRC_AL_PREFIX}ElementalEvil`;
const SRC_ALRoD = `${SRC_AL_PREFIX}RageOfDemons`;

const SRC_PS_PREFIX = "PS";

const SRC_PSA = `${SRC_PS_PREFIX}A`;
const SRC_PSI = `${SRC_PS_PREFIX}I`;
const SRC_PSK = `${SRC_PS_PREFIX}K`;
const SRC_PSZ = `${SRC_PS_PREFIX}Z`;
const SRC_PSX = `${SRC_PS_PREFIX}X`;
const SRC_PSD = `${SRC_PS_PREFIX}D`;

const SRC_UA_PREFIX = "UA";

const SRC_UAA = `${SRC_UA_PREFIX}Artificer`;
const SRC_UAEAG = `${SRC_UA_PREFIX}EladrinAndGith`;
const SRC_UAEBB = `${SRC_UA_PREFIX}Eberron`;
const SRC_UAFFR = `${SRC_UA_PREFIX}FeatsForRaces`;
const SRC_UAFFS = `${SRC_UA_PREFIX}FeatsForSkills`;
const SRC_UAFO = `${SRC_UA_PREFIX}FiendishOptions`;
const SRC_UAFT = `${SRC_UA_PREFIX}Feats`;
const SRC_UAGH = `${SRC_UA_PREFIX}GothicHeroes`;
const SRC_UAMDM = `${SRC_UA_PREFIX}ModernMagic`;
const SRC_UASSP = `${SRC_UA_PREFIX}StarterSpells`;
const SRC_UATMC = `${SRC_UA_PREFIX}TheMysticClass`;
const SRC_UATOBM = `${SRC_UA_PREFIX}ThatOldBlackMagic`;
const SRC_UATRR = `${SRC_UA_PREFIX}TheRangerRevised`;
const SRC_UAWA = `${SRC_UA_PREFIX}WaterborneAdventures`;
const SRC_UAVR = `${SRC_UA_PREFIX}VariantRules`;
const SRC_UALDR = `${SRC_UA_PREFIX}LightDarkUnderdark`;
const SRC_UARAR = `${SRC_UA_PREFIX}RangerAndRogue`;
const SRC_UAATOSC = `${SRC_UA_PREFIX}ATrioOfSubclasses`;
const SRC_UABPP = `${SRC_UA_PREFIX}BarbarianPrimalPaths`;
const SRC_UARSC = `${SRC_UA_PREFIX}RevisedSubclasses`;
const SRC_UAKOO = `${SRC_UA_PREFIX}KitsOfOld`;
const SRC_UABBC = `${SRC_UA_PREFIX}BardBardColleges`;
const SRC_UACDD = `${SRC_UA_PREFIX}ClericDivineDomains`;
const SRC_UAD = `${SRC_UA_PREFIX}Druid`;
const SRC_UARCO = `${SRC_UA_PREFIX}RevisedClassOptions`;
const SRC_UAF = `${SRC_UA_PREFIX}Fighter`;
const SRC_UAM = `${SRC_UA_PREFIX}Monk`;
const SRC_UAP = `${SRC_UA_PREFIX}Paladin`;
const SRC_UAMC = `${SRC_UA_PREFIX}ModifyingClasses`;
const SRC_UAS = `${SRC_UA_PREFIX}Sorcerer`;
const SRC_UAWAW = `${SRC_UA_PREFIX}WarlockAndWizard`;
const SRC_UATF = `${SRC_UA_PREFIX}TheFaithful`;
const SRC_UAWR = `${SRC_UA_PREFIX}WizardRevisited`;
const SRC_UAESR = `${SRC_UA_PREFIX}ElfSubraces`;
const SRC_UAMAC = `${SRC_UA_PREFIX}MassCombat`;
const SRC_UA3PE = `${SRC_UA_PREFIX}ThreePillarExperience`;
const SRC_UAGHI = `${SRC_UA_PREFIX}GreyhawkInitiative`;
const SRC_UATSC = `${SRC_UA_PREFIX}ThreeSubclasses`;
const SRC_UAOD = `${SRC_UA_PREFIX}OrderDomain`;
const SRC_UACAM = `${SRC_UA_PREFIX}CentaursMinotaurs`;
const SRC_UAGSS = `${SRC_UA_PREFIX}GiantSoulSorcerer`;
const SRC_UARoE = `${SRC_UA_PREFIX}RacesOfEberron`;
const SRC_UARoR = `${SRC_UA_PREFIX}RacesOfRavnica`;
const SRC_UAWGE = `${SRC_UA_PREFIX}WGE`;
const SRC_UAOSS = `${SRC_UA_PREFIX}OfShipsAndSea`;
const SRC_UASIK = `${SRC_UA_PREFIX}Sidekicks`;
const SRC_UAAR = `${SRC_UA_PREFIX}ArtificerRevisited`;
const SRC_UABAM = `${SRC_UA_PREFIX}BarbarianAndMonk`;
const SRC_UASAW = `${SRC_UA_PREFIX}SorcererAndWarlock`;
const SRC_UABAP = `${SRC_UA_PREFIX}BardAndPaladin`;
const SRC_UACDW = `${SRC_UA_PREFIX}ClericDruidWizard`;
const SRC_UAFRR = `${SRC_UA_PREFIX}FighterRangerRogue`;
const SRC_UACFV = `${SRC_UA_PREFIX}ClassFeatureVariants`;
const SRC_UAFRW = `${SRC_UA_PREFIX}FighterRogueWizard`;
const SRC_UAPCRM = `${SRC_UA_PREFIX}PrestigeClassesRunMagic`;
const SRC_UAR = `${SRC_UA_PREFIX}Ranger`;
const SRC_UA2020SC1 = `${SRC_UA_PREFIX}2020SubclassesPt1`;
const SRC_UA2020SC2 = `${SRC_UA_PREFIX}2020SubclassesPt2`;
const SRC_UA2020SC3 = `${SRC_UA_PREFIX}2020SubclassesPt3`;
const SRC_UA2020SC4 = `${SRC_UA_PREFIX}2020SubclassesPt4`;
const SRC_UA2020SC5 = `${SRC_UA_PREFIX}2020SubclassesPt5`;
const SRC_UA2020SMT = `${SRC_UA_PREFIX}2020SpellsAndMagicTattoos`;
const SRC_UA2020POR = `${SRC_UA_PREFIX}2020PsionicOptionsRevisited`;
const SRC_UA2020SCR = `${SRC_UA_PREFIX}2020SubclassesRevisited`;
const SRC_UA2020F = `${SRC_UA_PREFIX}2020Feats`;
const SRC_UA2021GL = `${SRC_UA_PREFIX}2021GothicLineages`;
const SRC_UA2021FF = `${SRC_UA_PREFIX}2021FolkOfTheFeywild`;
const SRC_UA2021DO = `${SRC_UA_PREFIX}2021DraconicOptions`;
const SRC_UA2021MoS = `${SRC_UA_PREFIX}2021MagesOfStrixhaven`;

const AL_PREFIX = "Adventurers League: ";
const PS_PREFIX = "Plane Shift: ";
const UA_PREFIX = "Unearthed Arcana: ";
const TftYP_NAME = "Tales from the Yawning Portal";

const SOURCE_JSON_TO_FULL: { [abbreviation: string]: string } = {};
SOURCE_JSON_TO_FULL[SRC_CoS] = "Curse of Strahd";
SOURCE_JSON_TO_FULL[SRC_DMG] = "Dungeon Master's Guide";
SOURCE_JSON_TO_FULL[SRC_EEPC] = "Elemental Evil Player's Companion";
SOURCE_JSON_TO_FULL[SRC_EET] = "Elemental Evil: Trinkets";
SOURCE_JSON_TO_FULL[SRC_HotDQ] = "Hoard of the Dragon Queen";
SOURCE_JSON_TO_FULL[SRC_LMoP] = "Lost Mine of Phandelver";
SOURCE_JSON_TO_FULL[SRC_Mag] = "Dragon Magazine";
SOURCE_JSON_TO_FULL[SRC_MM] = "Monster Manual";
SOURCE_JSON_TO_FULL[SRC_OotA] = "Out of the Abyss";
SOURCE_JSON_TO_FULL[SRC_PHB] = "Player's Handbook";
SOURCE_JSON_TO_FULL[SRC_PotA] = "Princes of the Apocalypse";
SOURCE_JSON_TO_FULL[SRC_RoT] = "The Rise of Tiamat";
SOURCE_JSON_TO_FULL[SRC_RoTOS] = "The Rise of Tiamat Online Supplement";
SOURCE_JSON_TO_FULL[SRC_SCAG] = "Sword Coast Adventurer's Guide";
SOURCE_JSON_TO_FULL[SRC_SKT] = "Storm King's Thunder";
SOURCE_JSON_TO_FULL[SRC_ToA] = "Tomb of Annihilation";
SOURCE_JSON_TO_FULL[SRC_ToD] = "Tyranny of Dragons";
SOURCE_JSON_TO_FULL[SRC_TTP] = "The Tortle Package";
SOURCE_JSON_TO_FULL[SRC_TYP] = TftYP_NAME;
SOURCE_JSON_TO_FULL[SRC_TYP_AtG] = `${TftYP_NAME}: Against the Giants`;
SOURCE_JSON_TO_FULL[SRC_TYP_DiT] = `${TftYP_NAME}: Dead in Thay`;
SOURCE_JSON_TO_FULL[SRC_TYP_TFoF] = `${TftYP_NAME}: The Forge of Fury`;
SOURCE_JSON_TO_FULL[
    SRC_TYP_THSoT
] = `${TftYP_NAME}: The Hidden Shrine of Tamoachan`;
SOURCE_JSON_TO_FULL[SRC_TYP_TSC] = `${TftYP_NAME}: The Sunless Citadel`;
SOURCE_JSON_TO_FULL[SRC_TYP_ToH] = `${TftYP_NAME}: Tomb of Horrors`;
SOURCE_JSON_TO_FULL[SRC_TYP_WPM] = `${TftYP_NAME}: White Plume Mountain`;
SOURCE_JSON_TO_FULL[SRC_VGM] = "Volo's Guide to Monsters";
SOURCE_JSON_TO_FULL[SRC_XGE] = "Xanathar's Guide to Everything";
SOURCE_JSON_TO_FULL[SRC_OGA] = "One Grung Above";
SOURCE_JSON_TO_FULL[SRC_MTF] = "Mordenkainen's Tome of Foes";
SOURCE_JSON_TO_FULL[SRC_WDH] = "Waterdeep: Dragon Heist";
SOURCE_JSON_TO_FULL[SRC_WDMM] = "Waterdeep: Dungeon of the Mad Mage";
SOURCE_JSON_TO_FULL[SRC_GGR] = "Guildmasters' Guide to Ravnica";
SOURCE_JSON_TO_FULL[SRC_KKW] = "Krenko's Way";
SOURCE_JSON_TO_FULL[SRC_LLK] = "Lost Laboratory of Kwalish";
SOURCE_JSON_TO_FULL[SRC_GoS] = "Ghosts of Saltmarsh";
SOURCE_JSON_TO_FULL[SRC_AI] = "Acquisitions Incorporated";
SOURCE_JSON_TO_FULL[SRC_OoW] = "The Orrery of the Wanderer";
SOURCE_JSON_TO_FULL[SRC_ESK] = "Essentials Kit";
SOURCE_JSON_TO_FULL[SRC_DIP] = "Dragon of Icespire Peak";
SOURCE_JSON_TO_FULL[SRC_HftT] = "Hunt for the Thessalhydra";
SOURCE_JSON_TO_FULL[SRC_DC] = "Divine Contention";
SOURCE_JSON_TO_FULL[SRC_SLW] = "Storm Lord's Wrath";
SOURCE_JSON_TO_FULL[SRC_SDW] = "Sleeping Dragon's Wake";
SOURCE_JSON_TO_FULL[SRC_BGDIA] = "Baldur's Gate: Descent Into Avernus";
SOURCE_JSON_TO_FULL[SRC_LR] = "Locathah Rising";
SOURCE_JSON_TO_FULL[SRC_AL] = "Adventurers' League";
SOURCE_JSON_TO_FULL[SRC_SAC] = "Sage Advice Compendium";
SOURCE_JSON_TO_FULL[SRC_ERLW] = "Eberron: Rising from the Last War";
SOURCE_JSON_TO_FULL[SRC_EFR] = "Eberron: Forgotten Relics";
SOURCE_JSON_TO_FULL[SRC_RMBRE] =
    "The Lost Dungeon of Rickedness: Big Rick Energy";
SOURCE_JSON_TO_FULL[SRC_RMR] =
    "Dungeons & Dragons vs. Rick and Morty: Basic Rules";
SOURCE_JSON_TO_FULL[SRC_MFF] = "Mordenkainen's Fiendish Folio";
SOURCE_JSON_TO_FULL[SRC_AWM] = "Adventure with Muk";
SOURCE_JSON_TO_FULL[SRC_IMR] = "Infernal Machine Rebuild";
SOURCE_JSON_TO_FULL[SRC_SADS] = "Sapphire Anniversary Dice Set";
SOURCE_JSON_TO_FULL[SRC_EGW] = "Explorer's Guide to Wildemount";
SOURCE_JSON_TO_FULL[SRC_EGW_ToR] = "Tide of Retribution";
SOURCE_JSON_TO_FULL[SRC_EGW_DD] = "Dangerous Designs";
SOURCE_JSON_TO_FULL[SRC_EGW_FS] = "Frozen Sick";
SOURCE_JSON_TO_FULL[SRC_EGW_US] = "Unwelcome Spirits";
SOURCE_JSON_TO_FULL[SRC_MOT] = "Mythic Odysseys of Theros";
SOURCE_JSON_TO_FULL[SRC_IDRotF] = "Icewind Dale: Rime of the Frostmaiden";
SOURCE_JSON_TO_FULL[SRC_TCE] = "Tasha's Cauldron of Everything";
SOURCE_JSON_TO_FULL[SRC_VRGR] = "Van Richten's Guide to Ravenloft";
SOURCE_JSON_TO_FULL[SRC_HoL] = "The House of Lament";
SOURCE_JSON_TO_FULL[SRC_SCREEN] = "Dungeon Master's Screen";
SOURCE_JSON_TO_FULL[SRC_SCREEN_WILDERNESS_KIT] =
    "Dungeon Master's Screen: Wilderness Kit";
SOURCE_JSON_TO_FULL[SRC_HEROES_FEAST] = "Heroes' Feast";
SOURCE_JSON_TO_FULL[SRC_CM] = "Candlekeep Mysteries";
SOURCE_JSON_TO_FULL[SRC_ALCoS] = `${AL_PREFIX}Curse of Strahd`;
SOURCE_JSON_TO_FULL[SRC_ALEE] = `${AL_PREFIX}Elemental Evil`;
SOURCE_JSON_TO_FULL[SRC_ALRoD] = `${AL_PREFIX}Rage of Demons`;
SOURCE_JSON_TO_FULL[SRC_PSA] = `${PS_PREFIX}Amonkhet`;
SOURCE_JSON_TO_FULL[SRC_PSI] = `${PS_PREFIX}Innistrad`;
SOURCE_JSON_TO_FULL[SRC_PSK] = `${PS_PREFIX}Kaladesh`;
SOURCE_JSON_TO_FULL[SRC_PSZ] = `${PS_PREFIX}Zendikar`;
SOURCE_JSON_TO_FULL[SRC_PSX] = `${PS_PREFIX}Ixalan`;
SOURCE_JSON_TO_FULL[SRC_PSD] = `${PS_PREFIX}Dominaria`;
SOURCE_JSON_TO_FULL[SRC_UAA] = `${UA_PREFIX}Artificer`;
SOURCE_JSON_TO_FULL[SRC_UAEAG] = `${UA_PREFIX}Eladrin and Gith`;
SOURCE_JSON_TO_FULL[SRC_UAEBB] = `${UA_PREFIX}Eberron`;
SOURCE_JSON_TO_FULL[SRC_UAFFR] = `${UA_PREFIX}Feats for Races`;
SOURCE_JSON_TO_FULL[SRC_UAFFS] = `${UA_PREFIX}Feats for Skills`;
SOURCE_JSON_TO_FULL[SRC_UAFO] = `${UA_PREFIX}Fiendish Options`;
SOURCE_JSON_TO_FULL[SRC_UAFT] = `${UA_PREFIX}Feats`;
SOURCE_JSON_TO_FULL[SRC_UAGH] = `${UA_PREFIX}Gothic Heroes`;
SOURCE_JSON_TO_FULL[SRC_UAMDM] = `${UA_PREFIX}Modern Magic`;
SOURCE_JSON_TO_FULL[SRC_UASSP] = `${UA_PREFIX}Starter Spells`;
SOURCE_JSON_TO_FULL[SRC_UATMC] = `${UA_PREFIX}The Mystic Class`;
SOURCE_JSON_TO_FULL[SRC_UATOBM] = `${UA_PREFIX}That Old Black Magic`;
SOURCE_JSON_TO_FULL[SRC_UATRR] = `${UA_PREFIX}The Ranger, Revised`;
SOURCE_JSON_TO_FULL[SRC_UAWA] = `${UA_PREFIX}Waterborne Adventures`;
SOURCE_JSON_TO_FULL[SRC_UAVR] = `${UA_PREFIX}Variant Rules`;
SOURCE_JSON_TO_FULL[SRC_UALDR] = `${UA_PREFIX}Light, Dark, Underdark!`;
SOURCE_JSON_TO_FULL[SRC_UARAR] = `${UA_PREFIX}Ranger and Rogue`;
SOURCE_JSON_TO_FULL[SRC_UAATOSC] = `${UA_PREFIX}A Trio of Subclasses`;
SOURCE_JSON_TO_FULL[SRC_UABPP] = `${UA_PREFIX}Barbarian Primal Paths`;
SOURCE_JSON_TO_FULL[SRC_UARSC] = `${UA_PREFIX}Revised Subclasses`;
SOURCE_JSON_TO_FULL[SRC_UAKOO] = `${UA_PREFIX}Kits of Old`;
SOURCE_JSON_TO_FULL[SRC_UABBC] = `${UA_PREFIX}Bard: Bard Colleges`;
SOURCE_JSON_TO_FULL[SRC_UACDD] = `${UA_PREFIX}Cleric: Divine Domains`;
SOURCE_JSON_TO_FULL[SRC_UAD] = `${UA_PREFIX}Druid`;
SOURCE_JSON_TO_FULL[SRC_UARCO] = `${UA_PREFIX}Revised Class Options`;
SOURCE_JSON_TO_FULL[SRC_UAF] = `${UA_PREFIX}Fighter`;
SOURCE_JSON_TO_FULL[SRC_UAM] = `${UA_PREFIX}Monk`;
SOURCE_JSON_TO_FULL[SRC_UAP] = `${UA_PREFIX}Paladin`;
SOURCE_JSON_TO_FULL[SRC_UAMC] = `${UA_PREFIX}Modifying Classes`;
SOURCE_JSON_TO_FULL[SRC_UAS] = `${UA_PREFIX}Sorcerer`;
SOURCE_JSON_TO_FULL[SRC_UAWAW] = `${UA_PREFIX}Warlock and Wizard`;
SOURCE_JSON_TO_FULL[SRC_UATF] = `${UA_PREFIX}The Faithful`;
SOURCE_JSON_TO_FULL[SRC_UAWR] = `${UA_PREFIX}Wizard Revisited`;
SOURCE_JSON_TO_FULL[SRC_UAESR] = `${UA_PREFIX}Elf Subraces`;
SOURCE_JSON_TO_FULL[SRC_UAMAC] = `${UA_PREFIX}Mass Combat`;
SOURCE_JSON_TO_FULL[SRC_UA3PE] = `${UA_PREFIX}Three-Pillar Experience`;
SOURCE_JSON_TO_FULL[SRC_UAGHI] = `${UA_PREFIX}Greyhawk Initiative`;
SOURCE_JSON_TO_FULL[SRC_UATSC] = `${UA_PREFIX}Three Subclasses`;
SOURCE_JSON_TO_FULL[SRC_UAOD] = `${UA_PREFIX}Order Domain`;
SOURCE_JSON_TO_FULL[SRC_UACAM] = `${UA_PREFIX}Centaurs and Minotaurs`;
SOURCE_JSON_TO_FULL[SRC_UAGSS] = `${UA_PREFIX}Giant Soul Sorcerer`;
SOURCE_JSON_TO_FULL[SRC_UARoE] = `${UA_PREFIX}Races of Eberron`;
SOURCE_JSON_TO_FULL[SRC_UARoR] = `${UA_PREFIX}Races of Ravnica`;
SOURCE_JSON_TO_FULL[SRC_UAWGE] = "Wayfinder's Guide to Eberron";
SOURCE_JSON_TO_FULL[SRC_UAOSS] = `${UA_PREFIX}Of Ships and the Sea`;
SOURCE_JSON_TO_FULL[SRC_UASIK] = `${UA_PREFIX}Sidekicks`;
SOURCE_JSON_TO_FULL[SRC_UAAR] = `${UA_PREFIX}Artificer Revisited`;
SOURCE_JSON_TO_FULL[SRC_UABAM] = `${UA_PREFIX}Barbarian and Monk`;
SOURCE_JSON_TO_FULL[SRC_UASAW] = `${UA_PREFIX}Sorcerer and Warlock`;
SOURCE_JSON_TO_FULL[SRC_UABAP] = `${UA_PREFIX}Bard and Paladin`;
SOURCE_JSON_TO_FULL[SRC_UACDW] = `${UA_PREFIX}Cleric, Druid, and Wizard`;
SOURCE_JSON_TO_FULL[SRC_UAFRR] = `${UA_PREFIX}Fighter, Ranger, and Rogue`;
SOURCE_JSON_TO_FULL[SRC_UACFV] = `${UA_PREFIX}Class Feature Variants`;
SOURCE_JSON_TO_FULL[SRC_UAFRW] = `${UA_PREFIX}Fighter, Rogue, and Wizard`;
SOURCE_JSON_TO_FULL[SRC_UAPCRM] = `${UA_PREFIX}Prestige Classes and Rune Magic`;
SOURCE_JSON_TO_FULL[SRC_UAR] = `${UA_PREFIX}Ranger`;
SOURCE_JSON_TO_FULL[SRC_UA2020SC1] = `${UA_PREFIX}2020 Subclasses, Part 1`;
SOURCE_JSON_TO_FULL[SRC_UA2020SC2] = `${UA_PREFIX}2020 Subclasses, Part 2`;
SOURCE_JSON_TO_FULL[SRC_UA2020SC3] = `${UA_PREFIX}2020 Subclasses, Part 3`;
SOURCE_JSON_TO_FULL[SRC_UA2020SC4] = `${UA_PREFIX}2020 Subclasses, Part 4`;
SOURCE_JSON_TO_FULL[SRC_UA2020SC5] = `${UA_PREFIX}2020 Subclasses, Part 5`;
SOURCE_JSON_TO_FULL[
    SRC_UA2020SMT
] = `${UA_PREFIX}2020 Spells and Magic Tattoos`;
SOURCE_JSON_TO_FULL[
    SRC_UA2020POR
] = `${UA_PREFIX}2020 Psionic Options Revisited`;
SOURCE_JSON_TO_FULL[SRC_UA2020SCR] = `${UA_PREFIX}2020 Subclasses Revisited`;
SOURCE_JSON_TO_FULL[SRC_UA2020F] = `${UA_PREFIX}2020 Feats`;
SOURCE_JSON_TO_FULL[SRC_UA2021GL] = `${UA_PREFIX}2021 Gothic Lineages`;
SOURCE_JSON_TO_FULL[SRC_UA2021FF] = `${UA_PREFIX}2021 Folk of the Feywild`;
SOURCE_JSON_TO_FULL[SRC_UA2021DO] = `${UA_PREFIX}2021 Draconic Options`;
SOURCE_JSON_TO_FULL[SRC_UA2021MoS] = `${UA_PREFIX}2021 Mages of Strixhaven`;
SOURCE_JSON_TO_FULL[SRC_WBtW] = "The Wild Beyond the Witchlight";
SOURCE_JSON_TO_FULL[SRC_CRCotN] = "Critical Role: Call of the Netherdeep";
function getSkillsaves(
    monster: Creature5eTools
): { [K in keyof Creature5eTools["skill"]]: number }[] {
    const skills = monster.skill;
    if (!skills) return [];
    const stack = [],
        plus = [];
    for (const name of Object.keys(skills) as Array<keyof typeof skills>) {
        if (name == "other") {
            const other = skills[name];
            for (const entry of other) {
                const oneOf = entry.oneOf;
                if (!oneOf) continue;
                const keys = (
                    Object.keys(oneOf) as Array<keyof typeof oneOf>
                ).sort();
                const firstKey = keys.shift(),
                    first = oneOf[firstKey];
                const [, v] = first?.match(/.*?(\d+)/) ?? [];
                plus.push({
                    [`plus one of the following: ${
                        firstKey.charAt(0).toUpperCase() + firstKey.slice(1)
                    }`]: v
                });
                for (const name of keys.slice(1)) {
                    const skill = oneOf[name];
                    const [, v] = skill?.match(/.*?(\d+)/) ?? [];

                    if (!v) continue;
                    plus.push({ [name]: v });
                }
            }
            continue;
        }
        const skill = skills[name];
        const [, v] = skill?.match(/.*?(\d+)/) ?? [];

        if (!v) continue;
        stack.push({ [name]: v });
    }
    return [...stack.filter((v) => v), ...plus.filter((v) => v)];
}
