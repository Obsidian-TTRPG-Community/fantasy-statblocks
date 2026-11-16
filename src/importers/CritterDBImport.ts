import type { Monster } from "types";

export async function buildMonsterFromCritterFile(
    file: File
): Promise<Monster[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async (event: any) => {
            const importedMonsters: Monster[] = [];
            try {
                const parsed = JSON.parse(event.target.result);
                let monsters = [];
                if (parsed.creatures) {
                    monsters = parsed.creatures;
                } else {
                    monsters = [parsed];
                }
                for (let monster of monsters) {
                    try {
                        const importedMonster: Monster = {
                            image: null,
                            name: monster.name,
                            source: "CritterDB",
                            type: monster.stats.race,
                            subtype: "",
                            size: monster.stats.size,
                            alignment: monster.stats.alignment,
                            hp: monster.stats.hitPoints,
                            hit_dice:
                                monster.stats.hitPointsStr
                                    ?.match(/\(([^)]*?)\)/)?.[1] ?? "",
                            ac: monster.stats.armorClass,
                            speed: monster.stats.speed,
                            stats: [
                                monster.stats.abilityScores.strength,
                                monster.stats.abilityScores.dexterity,
                                monster.stats.abilityScores.constitution,
                                monster.stats.abilityScores.intelligence,
                                monster.stats.abilityScores.wisdom,
                                monster.stats.abilityScores.charisma
                            ],
                            damage_immunities:
                                monster.stats.damageImmunities
                                    ?.join("; ")
                                    .toLowerCase()
                                    .trim() ?? "",
                            damage_resistances:
                                monster.stats.damageResistances
                                    ?.join(", ")
                                    .toLowerCase()
                                    .trim() ?? "",
                            damage_vulnerabilities:
                                monster.stats.damageVulnerabilities
                                    ?.join(", ")
                                    .toLowerCase()
                                    .trim() ?? "",
                            condition_immunities:
                                monster.stats.conditionImmunities
                                    ?.join(", ")
                                    .toLowerCase()
                                    .trim() ?? "",
                            saves:
                                monster.stats.savingThrows
                                    ?.map((thr: any) => {
                                        if (
                                            !("value" in thr) &&
                                            !("modifier" in thr)
                                        )
                                            return;
                                        return {
                                            [thr.ability]:
                                                thr.value ?? thr.modifier
                                        };
                                    })
                                    .filter((x: any) => x) ?? [],
                            skillsaves:
                                monster.stats.skills
                                    ?.map((thr: any) => {
                                        if (
                                            !("value" in thr) &&
                                            !("modifier" in thr)
                                        )
                                            return;
                                        return {
                                            [thr.name]:
                                                thr.value ?? thr.modifier
                                        };
                                    })
                                    .filter((x: any) => x) ?? [],
                            senses:
                                monster.stats.senses?.join(", ").trim() ?? "",
                            languages:
                                monster.stats.languages?.join(", ").trim() ??
                                "",
                            cr: monster.stats.challengeRating ?? "",
                            traits:
                                monster.stats.additionalAbilities?.map(
                                    (trait: {
                                        name: string;
                                        description: string;
                                    }) => {
                                        return {
                                            name: trait.name,
                                            desc: trait.description.replace(
                                                /<[^>]*>/g,
                                                ""
                                            )
                                        };
                                    }
                                ) ?? [],
                            actions:
                                monster.stats.actions?.map(
                                    (trait: {
                                        name: string;
                                        description: string;
                                    }) => {
                                        return {
                                            name: trait.name,
                                            desc: trait.description.replace(
                                                /<[^>]*>/g,
                                                ""
                                            )
                                        };
                                    }
                                ) ?? [],
                            reactions:
                                monster.stats.reactions?.map(
                                    (trait: {
                                        name: string;
                                        description: string;
                                    }) => {
                                        return {
                                            name: trait.name,
                                            desc: trait.description.replace(
                                                /<[^>]*>/g,
                                                ""
                                            )
                                        };
                                    }
                                ) ?? [],
                            legendary_actions:
                                monster.stats.legendaryActions?.map(
                                    (trait: {
                                        name: string;
                                        description: string;
                                    }) => {
                                        return {
                                            name: trait.name,
                                            desc: trait.description.replace(
                                                /<[^>]*>/g,
                                                ""
                                            )
                                        };
                                    }
                                ) ?? []
                        };
                        importedMonsters.push(importedMonster);
                    } catch (e) {
                        continue;
                    }
                }

                resolve(importedMonsters);
            } catch (e) {
                reject();
            }
        };

        reader.readAsText(file);
    });
}
