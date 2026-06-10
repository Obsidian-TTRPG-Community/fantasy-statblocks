/** "OPEN GAME LICENSE Version 1.0a"
 * 'The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.'
 *  '1. Definitions: (a)"Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b)"Derivative Material" means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute" means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)"Open Game Content" means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity" means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark" means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) "Use", "Used" or "Using" means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) "You" or "Your" means the licensee in terms of this agreement.'
 *  "2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License."
 *  "3.Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License."
 *  "4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content."
 *  "5.Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License."
 *  "6.Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute."
 *  "7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity."
 *  "8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content."
 *  "9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License."
 *  "10 Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You Distribute."
 *  "11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so."
 *  "12 Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected."
 *  "13 Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License."
 *  "14 Reformation: If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable."
 *  "15 COPYRIGHT NOTICE Open Game License v 1.0 Copyright 2000, Wizards of the Coast, Inc."
 */

import type { Monster } from "index";

export const BESTIARY: Monster[] = [
    {
        name: "Aboleth",
        source: "5e SRD",
        size: "Large",
        type: "aberration",
        subtype: "",
        alignment: "lawful evil",
        ac: 17,
        hp: 135,
        hit_dice: "18d10 + 36",
        speed: "10 ft., swim 40 ft.",
        stats: [21, 9, 15, 18, 15, 18],
        saves: [{ constitution: 6 }, { intelligence: 8 }, { wisdom: 6 }],
        skillsaves: [{ history: 12 }, { perception: 10 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 20",
        languages: "Deep Speech, telepathy 120 ft.",
        cr: "10",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The aboleth can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Mucous Cloud",
                desc: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 ft. of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater.",
                attack_bonus: 0
            },
            {
                name: "Probing Telepathy",
                desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The aboleth makes three tentacle attacks.",
                attack_bonus: 0
            },
            {
                name: "Tentacle",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed.",
                attack_bonus: 9,
                damage_dice: "2d6",
                damage_bonus: 5
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage.",
                attack_bonus: 9,
                damage_dice: "3d6",
                damage_bonus: 5
            },
            {
                name: "Enslave (3/day)",
                desc: "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The aboleth makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Swipe",
                desc: "The aboleth makes one tail attack.",
                attack_bonus: 0
            },
            {
                name: "Psychic Drain (Costs 2 Actions)",
                desc: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Acolyte",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 9,
        hit_dice: "2d8",
        speed: "30 ft.",
        stats: [10, 10, 10, 10, 14, 11],
        skillsaves: [{ medicine: 4 }, { religion: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        cr: "1/4",
        bestiary: true,
        traits: [],
        actions: [
            {
                name: "Club",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
                attack_bonus: 2,
                damage_dice: "1d4"
            }
        ],
        spells: [
            "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:",
            { "Cantrips (at will)": "light, sacred flame, thaumaturgy" },
            { "1st level (3 slots)": "bless, cure wounds, sanctuary" }
        ]
    },
    {
        name: "Adult Black Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 19,
        hp: 195,
        hit_dice: "17d12 + 84",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [23, 14, 21, 14, 13, 17],
        saves: [
            { dexterity: 7 },
            { constitution: 10 },
            { wisdom: 6 },
            { charisma: 8 }
        ],
        skillsaves: [null, { perception: 11 }, { stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "14",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage.",
                attack_bonus: 11,
                damage_dice: "2d10 + 1d8",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 11,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
                attack_bonus: 11,
                damage_dice: "2d8",
                damage_bonus: 6
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                desc: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d8"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Blue Dracolich",
        source: "5e SRD",
        size: "Huge",
        type: "undead",
        subtype: "",
        alignment: "lawful evil",
        ac: 19,
        hp: 225,
        hit_dice: "18d12 + 108",
        speed: "40 ft., burrow 30 ft., fly 80 ft.",
        stats: [25, 10, 23, 16, 15, 19],
        skillsaves: [{ perception: 12 }],
        damage_vulnerabilities: "",
        damage_resistances: "necrotic",
        damage_immunities: "lightning, poison",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, poisoned",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "17",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dracolich fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The dracolich has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
                attack_bonus: 12,
                damage_dice: "2d10 + 1d10",
                damage_bonus: 7
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
                attack_bonus: 12,
                damage_dice: "2d6",
                damage_bonus: 7
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
                attack_bonus: 12,
                damage_dice: "2d8",
                damage_bonus: 7
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                desc: "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d10"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dracolich makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dracolich makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dracolich beats its tattered wings. Each creature within 10 ft. of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Blue Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 19,
        hp: 225,
        hit_dice: "18d12 + 108",
        speed: "40 ft., burrow 30 ft., fly 80 ft.",
        stats: [25, 10, 23, 16, 15, 19],
        saves: [
            { dexterity: 5 },
            { constitution: 11 },
            { wisdom: 7 },
            { charisma: 9 }
        ],
        skillsaves: [null, { perception: 12 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "16",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage.",
                attack_bonus: 12,
                damage_dice: "2d10 + 1d10",
                damage_bonus: 7
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
                attack_bonus: 12,
                damage_dice: "2d6",
                damage_bonus: 7
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
                attack_bonus: 12,
                damage_dice: "2d8",
                damage_bonus: 7
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                desc: "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d10"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Brass Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 18,
        hp: 172,
        hit_dice: "15d12 + 74",
        speed: "40 ft., burrow 40 ft., fly 80 ft.",
        stats: [23, 10, 21, 14, 13, 17],
        saves: [
            { dexterity: 5 },
            { constitution: 10 },
            { wisdom: 6 },
            { charisma: 8 }
        ],
        skillsaves: [
            null,
            { history: 7 },
            { persuasion: 8 },
            { perception: 11 },
            { stealth: 5 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "13",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +11 to hit, reach,.0 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
                attack_bonus: 11,
                damage_dice: "2d10",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 11,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
                attack_bonus: 11,
                damage_dice: "2d8",
                damage_bonus: 6
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
                attack_bonus: 0,
                damage_dice: "13d6"
            }
        ]
    },
    {
        name: "Adult Bronze Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 19,
        hp: 212,
        hit_dice: "17d12 + 101",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [25, 10, 23, 16, 15, 19],
        saves: [
            { dexterity: 5 },
            { constitution: 11 },
            { wisdom: 7 },
            { charisma: 9 }
        ],
        skillsaves: [{ insight: 7 }, { perception: 12 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "15",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage.",
                attack_bonus: 12,
                damage_dice: "2d10",
                damage_bonus: 7
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage.",
                attack_bonus: 12,
                damage_dice: "2d6",
                damage_bonus: 7
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage.",
                attack_bonus: 12,
                damage_dice: "2d8",
                damage_bonus: 7
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
                attack_bonus: 0,
                damage_dice: "12d10"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Copper Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 18,
        hp: 184,
        hit_dice: "16d12 + 80",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        stats: [23, 12, 21, 18, 15, 17],
        saves: [
            { dexterity: 6 },
            { constitution: 10 },
            { wisdom: 7 },
            { charisma: 8 }
        ],
        skillsaves: [{ deception: 8 }, { perception: 12 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "14",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
                attack_bonus: 11,
                damage_dice: "2d10",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 11,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
                attack_bonus: 11,
                damage_dice: "2d8",
                damage_bonus: 6
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
                attack_bonus: 0,
                damage_dice: "12d8"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Gold Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 19,
        hp: 256,
        hit_dice: "19d12 + 132",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [27, 14, 25, 16, 15, 24],
        saves: [
            { dexterity: 8 },
            { constitution: 13 },
            { wisdom: 8 },
            { charisma: 13 }
        ],
        skillsaves: [
            { insight: 8 },
            { persuasion: 13 },
            { perception: 14 },
            { stealth: 8 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
        languages: "Common, Draconic",
        cr: "17",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
                attack_bonus: 14,
                damage_dice: "2d10",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 14,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 14,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "12d10"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Green Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 19,
        hp: 207,
        hit_dice: "18d12 + 90",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [23, 12, 21, 18, 15, 17],
        saves: [
            { dexterity: 6 },
            { constitution: 10 },
            { wisdom: 7 },
            { charisma: 8 }
        ],
        skillsaves: [
            { deception: 8 },
            { insight: 7 },
            { persuasion: 8 },
            { perception: 12 },
            { stealth: 6 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 22",
        languages: "Common, Draconic",
        cr: "15",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage.",
                attack_bonus: 11,
                damage_dice: "2d10 + 2d6",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 11,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
                attack_bonus: 11,
                damage_dice: "2d8",
                damage_bonus: 6
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
                attack_bonus: 0
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                desc: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "16d6"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Red Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 19,
        hp: 256,
        hit_dice: "19d12 + 132",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        stats: [27, 10, 25, 16, 13, 21],
        saves: [
            { dexterity: 6 },
            { constitution: 13 },
            { wisdom: 7 },
            { charisma: 11 }
        ],
        skillsaves: [{ perception: 13 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
        languages: "Common, Draconic",
        cr: "17",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage.",
                attack_bonus: 14,
                damage_dice: "2d10 + 2d6",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 14,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 14,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "18d6"
            },
            {
                name: "Lair Actions",
                desc: "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects: the dragon can't use the same effect two rounds in a row:\n• Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.\n• A tremor shakes the lair in a 60-foot-radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.\n• Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the end of its turn. While poisoned in this way, a creature is incapacitated.",
                attack_bonus: 0,
                damage_dice: "6d6"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult Silver Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 19,
        hp: 243,
        hit_dice: "18d12 + 126",
        speed: "40 ft., fly 80 ft.",
        stats: [27, 10, 25, 16, 13, 21],
        saves: [
            { dexterity: 5 },
            { constitution: 12 },
            { wisdom: 6 },
            { charisma: 10 }
        ],
        skillsaves: [
            { arcana: 8 },
            { history: 8 },
            { perception: 11 },
            { stealth: 5 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "16",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
                attack_bonus: 13,
                damage_dice: "2d10",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 13,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 13,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "13d8"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Adult White Dragon",
        source: "5e SRD",
        size: "Huge",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 18,
        hp: 200,
        hit_dice: "16d12 + 96",
        speed: "40 ft., burrow 30 ft., fly 80 ft., swim 40 ft.",
        stats: [22, 10, 22, 8, 12, 12],
        saves: [
            { dexterity: 5 },
            { constitution: 11 },
            { wisdom: 6 },
            { charisma: 6 }
        ],
        skillsaves: [{ perception: 11 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 21",
        languages: "Common, Draconic",
        cr: "13",
        bestiary: true,
        traits: [
            {
                name: "Ice Walk",
                desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage.",
                attack_bonus: 11,
                damage_dice: "2d10 + 1d8",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 11,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage.",
                attack_bonus: 11,
                damage_dice: "2d8",
                damage_bonus: 6
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                desc: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d8"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 10 ft. of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Air Elemental",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "neutral",
        ac: 15,
        hp: 90,
        hit_dice: "12d10 + 24",
        speed: "fly 90 ft. (hover)",
        stats: [14, 20, 14, 6, 10, 6],
        damage_vulnerabilities: "",
        damage_resistances:
            "lightning; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities:
            "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Auran",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Air Form",
                desc: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The elemental makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
                attack_bonus: 8,
                damage_dice: "2d8",
                damage_bonus: 5
            },
            {
                name: "Whirlwind (Recharge 4-6)",
                desc: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Black Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 22,
        hp: 367,
        hit_dice: "21d20 + 146",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [27, 14, 25, 16, 15, 19],
        saves: [
            { dexterity: 9 },
            { constitution: 14 },
            { wisdom: 9 },
            { charisma: 11 }
        ],
        skillsaves: [{ perception: 16 }, { stealth: 9 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
        languages: "Common, Draconic",
        cr: "21",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage.",
                attack_bonus: 15,
                damage_dice: "2d10 + 2d8",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 15,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 15,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                desc: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Blue Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 22,
        hp: 481,
        hit_dice: "26d20 + 208",
        speed: "40 ft., burrow 40 ft., fly 80 ft.",
        stats: [29, 10, 27, 18, 17, 21],
        saves: [
            { dexterity: 7 },
            { constitution: 15 },
            { wisdom: 10 },
            { charisma: 12 }
        ],
        skillsaves: [{ perception: 17 }, { stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
        languages: "Common, Draconic",
        cr: "23",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage.",
                attack_bonus: 16,
                damage_dice: "2d10 + 2d10",
                damage_bonus: 9
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
                attack_bonus: 16,
                damage_dice: "2d6",
                damage_bonus: 9
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
                attack_bonus: 16,
                damage_dice: "2d8",
                damage_bonus: 9
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                desc: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "16d10"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Brass Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 20,
        hp: 297,
        hit_dice: "17d20 + 118",
        speed: "40 ft., burrow 40 ft., fly 80 ft.",
        stats: [27, 10, 25, 16, 15, 19],
        saves: [
            { dexterity: 6 },
            { constitution: 13 },
            { wisdom: 8 },
            { charisma: 10 }
        ],
        skillsaves: [
            { history: 9 },
            { persuasion: 10 },
            { perception: 14 },
            { stealth: 6 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 24",
        languages: "Common, Draconic",
        cr: "20",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
                attack_bonus: 14,
                damage_dice: "2d10",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 14,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 14,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
                attack_bonus: 0,
                damage_dice: "16d6"
            },
            {
                name: "Change Shape",
                desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Bronze Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 22,
        hp: 444,
        hit_dice: "24d20 + 192",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [29, 10, 27, 18, 17, 21],
        saves: [
            { dexterity: 7 },
            { constitution: 15 },
            { wisdom: 10 },
            { charisma: 12 }
        ],
        skillsaves: [{ insight: 10 }, { perception: 17 }, { stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
        languages: "Common, Draconic",
        cr: "22",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage.",
                attack_bonus: 16,
                damage_dice: "2d10",
                damage_bonus: 9
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage.",
                attack_bonus: 16,
                damage_dice: "1d6",
                damage_bonus: 9
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage.",
                attack_bonus: 0,
                damage_dice: "2d8",
                damage_bonus: 9
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon.",
                attack_bonus: 0,
                damage_dice: "16d10"
            },
            {
                name: "Change Shape",
                desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Copper Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 21,
        hp: 350,
        hit_dice: "20d20 + 140",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        stats: [27, 12, 25, 20, 17, 19],
        saves: [
            { dexterity: 8 },
            { constitution: 14 },
            { wisdom: 10 },
            { charisma: 11 }
        ],
        skillsaves: [{ stealth: 8 }, { perception: 17 }, { deception: 11 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
        languages: "Common, Draconic",
        cr: "21",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage.",
                attack_bonus: 15,
                damage_dice: "2d10",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 15,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 15,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
                attack_bonus: 0,
                damage_dice: "14d8"
            },
            {
                name: "Change Shape",
                desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Gold Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 22,
        hp: 546,
        hit_dice: "28d20 + 252",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [30, 14, 29, 18, 17, 28],
        saves: [
            { dexterity: 9 },
            { constitution: 16 },
            { wisdom: 10 },
            { charisma: 16 }
        ],
        skillsaves: [
            { persuasion: 16 },
            { stealth: 9 },
            { perception: 17 },
            { insight: 10 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
        languages: "Common, Draconic",
        cr: "24",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
                attack_bonus: 17,
                damage_dice: "2d10",
                damage_bonus: 10
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
                attack_bonus: 17,
                damage_dice: "2d6",
                damage_bonus: 10
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
                attack_bonus: 17,
                damage_dice: "2d8",
                damage_bonus: 10
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "13d10"
            },
            {
                name: "Change Shape",
                desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Green Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 21,
        hp: 385,
        hit_dice: "22d20 + 154",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [27, 12, 25, 20, 17, 19],
        saves: [
            { dexterity: 8 },
            { constitution: 14 },
            { wisdom: 10 },
            { charisma: 11 }
        ],
        skillsaves: [
            { deception: 11 },
            { insight: 10 },
            { perception: 17 },
            { persuasion: 11 },
            { stealth: 8 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 27",
        languages: "Common, Draconic",
        cr: "22",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage.",
                attack_bonus: 15,
                damage_dice: "2d10 + 3d6",
                damage_bonus: 9
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage.",
                attack_bonus: 15,
                damage_dice: "4d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 16,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                desc: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "22d6"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Red Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 22,
        hp: 546,
        hit_dice: "28d20 + 252",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        stats: [30, 10, 29, 18, 15, 23],
        saves: [
            { dexterity: 7 },
            { constitution: 16 },
            { wisdom: 9 },
            { charisma: 13 }
        ],
        skillsaves: [{ perception: 16 }, { stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
        languages: "Common, Draconic",
        cr: "24",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage.",
                attack_bonus: 17,
                damage_dice: "2d10 + 4d6",
                damage_bonus: 10
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
                attack_bonus: 17,
                damage_dice: "2d6",
                damage_bonus: 10
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
                attack_bonus: 17,
                damage_dice: "2d8",
                damage_bonus: 10
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "26d6"
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient Silver Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 22,
        hp: 487,
        hit_dice: "25d20 + 224",
        speed: "40 ft., fly 80 ft.",
        stats: [30, 10, 29, 18, 15, 23],
        saves: [
            { dexterity: 7 },
            { constitution: 16 },
            { wisdom: 9 },
            { charisma: 13 }
        ],
        skillsaves: [
            { arcana: 11 },
            { perception: 16 },
            { history: 11 },
            { stealth: 7 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 26",
        languages: "Common, Draconic",
        cr: "23",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage.",
                attack_bonus: 17,
                damage_dice: "2d10",
                damage_bonus: 10
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage.",
                attack_bonus: 17,
                damage_dice: "2d6",
                damage_bonus: 10
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage.",
                attack_bonus: 17,
                damage_dice: "2d8",
                damage_bonus: 10
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "15d8"
            },
            {
                name: "Change Shape",
                desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Detect",
                desc: "The dragon makes a Wisdom (Perception) check.",
                attack_bonus: 0
            },
            {
                name: "Tail Attack",
                desc: "The dragon makes a tail attack.",
                attack_bonus: 0
            },
            {
                name: "Wing Attack (Costs 2 Actions)",
                desc: "The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ancient White Dragon",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 20,
        hp: 333,
        hit_dice: "18d20 + 144",
        speed: "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft.",
        stats: [26, 10, 26, 10, 13, 14],
        saves: [
            { dexterity: 6 },
            { constitution: 14 },
            { wisdom: 7 },
            { charisma: 8 }
        ],
        skillsaves: [{ perception: 13 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 23",
        languages: "Common, Draconic",
        cr: "20",
        bestiary: true,
        traits: [
            {
                name: "Ice Walk",
                desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the dragon fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage.",
                attack_bonus: 14,
                damage_dice: "2d10 + 2d8",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage.",
                attack_bonus: 14,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage.",
                attack_bonus: 14,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours .",
                attack_bonus: 0
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                desc: "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "16d8"
            }
        ]
    },
    {
        name: "Androsphinx",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "lawful neutral",
        ac: 17,
        hp: 199,
        hit_dice: "19d10 + 94",
        speed: "40 ft., fly 60 ft.",
        stats: [22, 10, 20, 16, 18, 23],
        saves: [
            { dexterity: 6 },
            { constitution: 11 },
            { intelligence: 9 },
            { wisdom: 10 }
        ],
        skillsaves: [{ religion: 15 }, { perception: 10 }, { arcana: 9 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "psychic; bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities: "charmed, frightened",
        senses: "truesight 120 ft., passive Perception 20",
        languages: "Common, Sphinx",
        cr: "17",
        bestiary: true,
        traits: [
            {
                name: "Inscrutable",
                desc: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The sphinx's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The sphinx makes two claw attacks.",
                attack_bonus: 0
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
                attack_bonus: 12,
                damage_dice: "2d10",
                damage_bonus: 6
            },
            {
                name: "Roar (3/Day)",
                desc: "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n\nFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Claw Attack",
                desc: "The sphinx makes one claw attack.",
                attack_bonus: 0
            },
            {
                name: "Teleport (Costs 2 Actions)",
                desc: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
                attack_bonus: 0
            },
            {
                name: "Cast a Spell (Costs 3 Actions)",
                desc: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
                attack_bonus: 0
            }
        ],
        spells: [
            "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:",
            {
                "Cantrips (at will)":
                    "sacred flame, spare the dying, thaumaturgy"
            },
            {
                "1st level (4 slots)":
                    "command, detect evil and good, detect magic"
            },
            { "2nd level (3 slots)": "lesser restoration, zone of truth" },
            { "3rd level (3 slots)": "dispel magic, tongues" },
            { "4th level (3 slots)": "banishment, freedom of movement" },
            { "5th level (2 slots)": "flame strike, greater restoration" },
            { "6th level (1 slot)": "heroes' feast" }
        ]
    },
    {
        name: "Animated Armor",
        source: "5e SRD",
        size: "Medium",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 18,
        hp: 33,
        hit_dice: "6d8 + 6",
        speed: "25 ft.",
        stats: [14, 11, 13, 1, 3, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison, psychic",
        condition_immunities:
            "blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 6",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Antimagic Susceptibility",
                desc: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
                attack_bonus: 0
            },
            {
                name: "False Appearance",
                desc: "While the armor remains motionless, it is indistinguishable from a normal suit of armor.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The armor makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Ankheg",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 39,
        hit_dice: "6d10 + 6",
        speed: "30 ft., burrow 10 ft.",
        stats: [17, 11, 13, 1, 13, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 11",
        languages: "",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so.",
                attack_bonus: 5,
                damage_dice: "2d6 + 1d6",
                damage_bonus: 3
            },
            {
                name: "Acid Spray (Recharge 6)",
                desc: "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "3d6"
            }
        ]
    },
    {
        name: "Ape",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 19,
        hit_dice: "3d8 + 5",
        speed: "30 ft., climb 30 ft.",
        stats: [16, 14, 14, 6, 12, 7],
        skillsaves: [{ athletics: 5 }, { perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1/2",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The ape makes two fist attacks.",
                attack_bonus: 0
            },
            {
                name: "Fist",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Archmage",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 99,
        hit_dice: "18d8 + 18",
        speed: "30 ft.",
        stats: [10, 14, 12, 20, 15, 16],
        saves: [{ intelligence: 9 }, { wisdom: 6 }],
        skillsaves: [{ arcana: 13 }, { history: 13 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "damage from spells; non magical bludgeoning, piercing, and slashing (from stoneskin)",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "any six languages",
        cr: "12",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The archmage has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Dagger",
                desc: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ],
        spells: [
            "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:",
            {
                "Cantrips (at will)":
                    "fire bolt, light, mage hand, prestidigitation, shocking grasp"
            },
            {
                "1st level (4 slots)":
                    "detect magic, identify, mage armor*, magic missile"
            },
            {
                "2nd level (3 slots)":
                    "detect thoughts, mirror image, misty step"
            },
            { "3rd level (3 slots)": "counterspell,fly, lightning bolt" },
            { "4th level (3 slots)": "banishment, fire shield, stoneskin*" },
            { "5th level (3 slots)": "cone of cold, scrying, wall of force" },
            { "6th level (1 slot)": "globe of invulnerability" },
            { "7th level (1 slot)": "teleport" },
            { "8th level (1 slot)": "mind blank*" },
            { "9th level (1 slot)": "time stop" },
            "* The archmage casts these spells on itself before combat."
        ]
    },
    {
        name: "Assassin",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 15,
        hp: 78,
        hit_dice: "12d8 + 24",
        speed: "30 ft.",
        stats: [11, 16, 14, 13, 11, 10],
        saves: [{ dexterity: 6 }, { intelligence: 4 }],
        skillsaves: [
            { acrobatics: 6 },
            { deception: 3 },
            { perception: 3 },
            { stealth: 9 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "poison",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "Thieves' cant plus any two languages",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Assassinate",
                desc: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit.",
                attack_bonus: 0
            },
            {
                name: "Evasion",
                desc: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails.",
                attack_bonus: 0
            },
            {
                name: "Sneak Attack (1/Turn)",
                desc: "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll.",
                attack_bonus: 0,
                damage_dice: "4d6"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The assassin makes two shortsword attacks.",
                attack_bonus: 0
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 6,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Light Crossbow",
                desc: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Awakened Shrub",
        source: "5e SRD",
        size: "Small",
        type: "plant",
        subtype: "",
        alignment: "unaligned",
        ac: 9,
        hp: 10,
        hit_dice: "3d6 + -1",
        speed: "20 ft.",
        stats: [3, 8, 11, 10, 10, 6],
        damage_vulnerabilities: "fire",
        damage_resistances: "piercing",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "one language known by its creator",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the shrub remains motionless, it is indistinguishable from a normal shrub.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Rake",
                desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) slashing damage.",
                attack_bonus: 1,
                damage_dice: "1d4",
                damage_bonus: -1
            }
        ]
    },
    {
        name: "Awakened Tree",
        source: "5e SRD",
        size: "Huge",
        type: "plant",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 59,
        hit_dice: "7d12 + 13",
        speed: "20 ft.",
        stats: [19, 6, 15, 10, 10, 7],
        damage_vulnerabilities: "fire",
        damage_resistances: "bludgeoning, piercing",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "one language known by its creator",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the tree remains motionless, it is indistinguishable from a normal tree.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "3d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Axe Beak",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "50 ft.",
        stats: [14, 12, 12, 2, 10, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Azer",
        source: "5e SRD",
        size: "Medium",
        type: "elemental",
        subtype: "",
        alignment: "lawful neutral",
        ac: 17,
        hp: 39,
        hit_dice: "6d8 + 12",
        speed: "30 ft.",
        stats: [17, 12, 15, 12, 13, 10],
        saves: [{ constitution: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "passive Perception 11",
        languages: "Ignan",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Heated Body",
                desc: "A creature that touches the azer or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage.",
                attack_bonus: 0,
                damage_dice: "1d10"
            },
            {
                name: "Heated Weapons",
                desc: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack).",
                attack_bonus: 0
            },
            {
                name: "Illumination",
                desc: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 ft..",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Warhammer",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
                attack_bonus: 5,
                damage_dice: "1d8 + 1d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Baboon",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hit_dice: "1d6 + -1",
        speed: "30 ft., climb 30 ft.",
        stats: [8, 14, 11, 4, 12, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Pack Tactics",
                desc: "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
                attack_bonus: 1,
                damage_dice: "1d4",
                damage_bonus: -1
            }
        ]
    },
    {
        name: "Badger",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 3,
        hit_dice: "1d4",
        speed: "20 ft., burrow 5 ft.",
        stats: [4, 11, 12, 2, 12, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 11",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack_bonus: 2,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Balor",
        source: "5e SRD",
        size: "Huge",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 19,
        hp: 262,
        hit_dice: "21d12 + 125",
        speed: "40 ft., fly 80 ft.",
        stats: [26, 15, 22, 20, 16, 22],
        saves: [
            { strength: 14 },
            { constitution: 12 },
            { wisdom: 9 },
            { charisma: 12 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "truesight 120 ft., passive Perception 13",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "19",
        bestiary: true,
        traits: [
            {
                name: "Death Throes",
                desc: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons.",
                attack_bonus: 0,
                damage_dice: "20d6"
            },
            {
                name: "Fire Aura",
                desc: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
                attack_bonus: 0,
                damage_dice: "3d6"
            },
            {
                name: "Magic Resistance",
                desc: "The balor has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The balor's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The balor makes two attacks: one with its longsword and one with its whip.",
                attack_bonus: 0
            },
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice.",
                attack_bonus: 14,
                damage_dice: "3d8 + 3d8",
                damage_bonus: 8
            },
            {
                name: "Whip",
                desc: "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor.",
                attack_bonus: 14,
                damage_dice: "2d6 + 3d6",
                damage_bonus: 8
            },
            {
                name: "Teleport",
                desc: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Demon (1/Day)",
                desc: "The demon chooses what to summon and attempts a magical summoning.\nA balor has a 50 percent chance of summoning 1d8 vrocks, 1d6 hezrous, 1d4 glabrezus, 1d3 nalfeshnees, 1d2 mariliths, or one goristro.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Bandit",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 12,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "30 ft.",
        stats: [11, 12, 12, 10, 10, 10],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Scimitar",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            },
            {
                name: "Light Crossbow",
                desc: "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Bandit Captain",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-lawful alignment",
        ac: 15,
        hp: 65,
        hit_dice: "10d8 + 20",
        speed: "30 ft.",
        stats: [15, 16, 14, 14, 11, 14],
        saves: [{ strength: 4 }, { dexterity: 5 }, { wisdom: 2 }],
        skillsaves: [{ athletics: 4 }, { deception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any two languages",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.",
                attack_bonus: 0
            },
            {
                name: "Scimitar",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Dagger",
                desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 3
            }
        ],
        reactions: [
            {
                name: "Parry",
                desc: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Barbed Devil",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 15,
        hp: 110,
        hit_dice: "13d8 + 51",
        speed: "30 ft.",
        stats: [16, 17, 18, 12, 14, 14],
        saves: [
            { strength: 6 },
            { constitution: 7 },
            { wisdom: 5 },
            { charisma: 5 }
        ],
        skillsaves: [{ deception: 5 }, { insight: 5 }, { perception: 8 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 18",
        languages: "Infernal, telepathy 120 ft.",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Barbed Hide",
                desc: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it.",
                attack_bonus: 0,
                damage_dice: "1d10"
            },
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the devil's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The devil has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice.",
                attack_bonus: 0
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft ., one target. Hit: 6 (1d6 + 3) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Hurl Flame",
                desc: "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
                attack_bonus: 5,
                damage_dice: "3d6"
            }
        ]
    },
    {
        name: "Basilisk",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 52,
        hit_dice: "8d8 + 16",
        speed: "20 ft.",
        stats: [16, 8, 15, 2, 8, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Petrifying Gaze",
                desc: "If a creature starts its turn within 30 ft. of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.\nIf the basilisk sees its reflection within 30 ft. of it in bright light, it mistakes itself for a rival and targets itself with its gaze.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage.",
                attack_bonus: 5,
                damage_dice: "2d6 + 2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Bat",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "5 ft., fly 30 ft.",
        stats: [2, 15, 8, 2, 12, 4],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 60 ft., passive Perception 11",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Echolocation",
                desc: "The bat can't use its blindsight while deafened.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing",
                desc: "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
                attack_bonus: 0,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Bearded Devil",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        hp: 52,
        hit_dice: "8d8 + 16",
        speed: "30 ft.",
        stats: [16, 15, 15, 9, 11, 11],
        saves: [{ strength: 5 }, { constitution: 4 }, { wisdom: 2 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "Infernal, telepathy 120 ft.",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the devil's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The devil has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Steadfast",
                desc: "The devil can't be frightened while it can see an allied creature within 30 feet of it.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The devil makes two attacks: one with its beard and one with its glaive.",
                attack_bonus: 0
            },
            {
                name: "Beard",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Glaive",
                desc: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
                attack_bonus: 5,
                damage_dice: "1d10",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Behir",
        source: "5e SRD",
        size: "Huge",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral evil",
        ac: 17,
        hp: 168,
        hit_dice: "16d12 + 64",
        speed: "50 ft., climb 40 ft.",
        stats: [23, 16, 18, 7, 14, 12],
        skillsaves: [{ perception: 6 }, { stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "darkvision 90 ft., passive Perception 16",
        languages: "Draconic",
        cr: "11",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The behir makes two attacks: one with its bite and one to constrict.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
                attack_bonus: 10,
                damage_dice: "3d10",
                damage_bonus: 6
            },
            {
                name: "Constrict",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends.",
                attack_bonus: 10,
                damage_dice: "2d10 + 2d10",
                damage_bonus: 6
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                desc: "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d10"
            },
            {
                name: "Swallow",
                desc: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone.",
                attack_bonus: 0,
                damage_dice: "6d6"
            }
        ]
    },
    {
        name: "Berserker",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any chaotic alignment",
        ac: 13,
        hp: 67,
        hit_dice: "9d8 + 26",
        speed: "30 ft.",
        stats: [16, 12, 17, 9, 11, 9],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Reckless",
                desc: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Greataxe",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d12",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Black Bear",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hit_dice: "3d8 + 5",
        speed: "40 ft., climb 30 ft.",
        stats: [15, 10, 14, 2, 12, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The bear makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
                attack_bonus: 3,
                damage_dice: "2d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Black Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 17,
        hp: 33,
        hit_dice: "6d8 + 6",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        stats: [15, 14, 13, 10, 11, 13],
        saves: [
            { dexterity: 4 },
            { constitution: 3 },
            { wisdom: 2 },
            { charisma: 3 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage.",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                desc: "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (Sd8) acid damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "5d8"
            }
        ]
    },
    {
        name: "Black Pudding",
        source: "5e SRD",
        size: "Large",
        type: "ooze",
        subtype: "",
        alignment: "unaligned",
        ac: 7,
        hp: 85,
        hit_dice: "10d10 + 30",
        speed: "20 ft., climb 20 ft.",
        stats: [16, 5, 16, 1, 6, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid, cold, lightning, slashing",
        condition_immunities:
            "blinded, charmed, deafened, exhaustion, frightened, prone",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Amorphous",
                desc: "The pudding can move through a space as narrow as 1 inch wide without squeezing.",
                attack_bonus: 0
            },
            {
                name: "Corrosive Form",
                desc: "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage. The pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round.",
                attack_bonus: 0,
                damage_dice: "1d8"
            },
            {
                name: "Spider Climb",
                desc: "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
                attack_bonus: 5,
                damage_dice: "1d6 + 4d8",
                damage_bonus: 3
            }
        ],
        reactions: [
            {
                name: "Split",
                desc: "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Blink Dog",
        source: "5e SRD",
        size: "Medium",
        type: "fey",
        subtype: "",
        alignment: "lawful good",
        ac: 13,
        hp: 22,
        hit_dice: "4d8 + 4",
        speed: "40 ft.",
        stats: [12, 17, 12, 10, 13, 11],
        skillsaves: [{ perception: 3 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "Blink Dog, understands Sylvan but can't speak it",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            },
            {
                name: "Teleport (Recharge 4-6)",
                desc: "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Blood Hawk",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hit_dice: "2d6",
        speed: "10 ft., fly 60 ft.",
        stats: [6, 14, 10, 3, 14, 5],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Blue Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 17,
        hp: 52,
        hit_dice: "8d8 + 16",
        speed: "30 ft., burrow 15 ft., fly 60 ft.",
        stats: [17, 10, 15, 12, 11, 15],
        saves: [
            { dexterity: 2 },
            { constitution: 4 },
            { wisdom: 2 },
            { charisma: 4 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "3",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage.",
                attack_bonus: 5,
                damage_dice: "1d10 + 1d6",
                damage_bonus: 3
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                desc: "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "4d10"
            }
        ]
    },
    {
        name: "Boar",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "40 ft.",
        stats: [13, 11, 12, 2, 9, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 9",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "1d6"
            },
            {
                name: "Relentless (Recharges after a Short or Long Rest)",
                desc: "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Tusk",
                desc: "Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Bone Devil",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        hp: 142,
        hit_dice: "15d10 + 59",
        speed: "40 ft., fly 40 ft.",
        stats: [18, 16, 18, 13, 14, 16],
        saves: [{ intelligence: 5 }, { wisdom: 6 }, { charisma: 7 }],
        skillsaves: [{ deception: 7 }, { insight: 6 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 9",
        languages: "Infernal, telepathy 120 ft.",
        cr: "12",
        bestiary: true,
        traits: [
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the devil's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The devil has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The devil makes three attacks: two with its claws and one with its sting.",
                attack_bonus: 0
            },
            {
                name: "Multiattack",
                desc: "The devil makes three attacks: two with its claws and one with its sting.",
                attack_bonus: 0
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
                attack_bonus: 8,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
                attack_bonus: 8,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Sting",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
                attack_bonus: 8,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Sting",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success .",
                attack_bonus: 8,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Brass Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 16,
        hp: 16,
        hit_dice: "3d8 + 2",
        speed: "30 ft., burrow 15 ft., fly 60 ft.",
        stats: [15, 10, 13, 10, 11, 13],
        saves: [
            { dexterity: 2 },
            { constitution: 3 },
            { wisdom: 2 },
            { charisma: 3 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "1",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
                attack_bonus: 0,
                damage_dice: "4d6"
            }
        ]
    },
    {
        name: "Bronze Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 17,
        hp: 32,
        hit_dice: "5d8 + 9",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        stats: [17, 10, 15, 12, 11, 15],
        saves: [
            { dexterity: 2 },
            { constitution: 4 },
            { wisdom: 2 },
            { charisma: 4 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d10",
                damage_bonus: 3
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon.",
                attack_bonus: 0,
                damage_dice: "3d10"
            }
        ]
    },
    {
        name: "Brown Bear",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 34,
        hit_dice: "4d10 + 12",
        speed: "40 ft., climb 30 ft.",
        stats: [19, 10, 16, 2, 13, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The bear makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Bugbear",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "chaotic evil",
        ac: 16,
        hp: 27,
        hit_dice: "5d8 + 4",
        speed: "30 ft.",
        stats: [15, 14, 13, 8, 11, 9],
        skillsaves: [{ stealth: 6 }, { survival: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Goblin",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Brute",
                desc: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).",
                attack_bonus: 0
            },
            {
                name: "Surprise Attack",
                desc: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack.",
                attack_bonus: 0,
                damage_dice: "2d6"
            }
        ],
        actions: [
            {
                name: "Morningstar",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "2d8",
                damage_bonus: 2
            },
            {
                name: "Javelin",
                desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range.",
                attack_bonus: 4,
                damage_dice: "2d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Bulette",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 17,
        hp: 94,
        hit_dice: "9d10 + 44",
        speed: "40 ft., burrow 40 ft.",
        stats: [19, 11, 21, 2, 10, 5],
        skillsaves: [{ perception: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 16",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Standing Leap",
                desc: "The bulette's long jump is up to 30 ft. and its high jump is up to 15 ft., with or without a running start.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "4d12",
                damage_bonus: 4
            },
            {
                name: "Deadly Leap",
                desc: "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its ft. in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Camel",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 9,
        hp: 15,
        hit_dice: "2d10 + 4",
        speed: "50 ft.",
        stats: [16, 8, 14, 2, 8, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 9",
        languages: "",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
                attack_bonus: 5,
                damage_dice: "1d4"
            }
        ]
    },
    {
        name: "Carrion Crawler",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 51,
        hit_dice: "6d10 + 18",
        speed: "30 ft., climb 30 ft.",
        stats: [14, 13, 16, 1, 12, 5],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The carrion crawler makes two attacks: one with its tentacles and one with its bite.",
                attack_bonus: 0
            },
            {
                name: "Tentacles",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success.",
                attack_bonus: 8,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "2d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Cat",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 2,
        hit_dice: "1d4 + -1",
        speed: "40 ft., climb 30 ft.",
        stats: [3, 15, 10, 3, 12, 7],
        skillsaves: [{ perception: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The cat has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                attack_bonus: 0,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Cave Bear",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 42,
        hit_dice: "5d10 + 14",
        speed: "40 ft., swim 30 ft.",
        stats: [20, 10, 16, 2, 13, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The bear makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
                attack_bonus: 7,
                damage_dice: "1d8",
                damage_bonus: 5
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Centaur",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral good",
        ac: 12,
        hp: 45,
        hit_dice: "6d10 + 12",
        speed: "50 ft.",
        stats: [18, 14, 14, 9, 13, 11],
        skillsaves: [{ athletics: 6 }, { perception: 3 }, { survival: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "Elvish, Sylvan",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the centaur moves at least 30 ft. straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage.",
                attack_bonus: 0,
                damage_dice: "3d6"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow.",
                attack_bonus: 0
            },
            {
                name: "Pike",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d10",
                damage_bonus: 4
            },
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Chain Devil",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 16,
        hp: 85,
        hit_dice: "10d8 + 40",
        speed: "30 ft.",
        stats: [18, 15, 18, 11, 12, 14],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 8",
        languages: "Infernal, telepathy 120 ft.",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the devil's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The devil has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The devil makes two attacks with its chains.",
                attack_bonus: 0
            },
            {
                name: "Chain",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns.",
                attack_bonus: 8,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Animate Chains (Recharges after a Short or Long Rest)",
                desc: "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.\nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies.",
                attack_bonus: 0
            }
        ],
        reactions: [
            {
                name: "Unnerving Mask",
                desc: "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Chimera",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 14,
        hp: 114,
        hit_dice: "12d10 + 48",
        speed: "30 ft., fly 60 ft.",
        stats: [19, 11, 19, 3, 14, 10],
        skillsaves: [{ perception: 8 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 18",
        languages: "understands Draconic but can't speak",
        cr: "6",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Horns",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "1d12",
                damage_bonus: 4
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "7d8"
            }
        ]
    },
    {
        name: "Chuul",
        source: "5e SRD",
        size: "Large",
        type: "aberration",
        subtype: "",
        alignment: "chaotic evil",
        ac: 16,
        hp: 93,
        hit_dice: "11d10 + 32",
        speed: "30 ft., swim 30 ft.",
        stats: [19, 10, 16, 5, 11, 5],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "understands Deep Speech but can't speak",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The chuul can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Sense Magic",
                desc: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once.",
                attack_bonus: 0
            },
            {
                name: "Pincer",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Tentacles",
                desc: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Clay Golem",
        source: "5e SRD",
        size: "Large",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 133,
        hit_dice: "14d10 + 56",
        speed: "20 ft.",
        stats: [20, 9, 18, 3, 8, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "acid, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "understands the languages of its creator but can't speak",
        cr: "9",
        bestiary: true,
        traits: [
            {
                name: "Acid Absorption",
                desc: "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt.",
                attack_bonus: 0
            },
            {
                name: "Berserk",
                desc: "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.",
                attack_bonus: 0
            },
            {
                name: "Immutable Form",
                desc: "The golem is immune to any spell or effect that would alter its form.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The golem has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The golem's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The golem makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic.",
                attack_bonus: 8,
                damage_dice: "2d10",
                damage_bonus: 5
            },
            {
                name: "Haste (Recharge 5-6)",
                desc: "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Cloaker",
        source: "5e SRD",
        size: "Large",
        type: "aberration",
        subtype: "",
        alignment: "chaotic neutral",
        ac: 14,
        hp: 78,
        hit_dice: "12d10 + 12",
        speed: "10 ft., fly 40 ft.",
        stats: [17, 15, 12, 13, 12, 14],
        skillsaves: [{ stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Deep Speech, Undercommon",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Damage Transfer",
                desc: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down). and that creature takes the other half.",
                attack_bonus: 0
            },
            {
                name: "False Appearance",
                desc: "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak.",
                attack_bonus: 0
            },
            {
                name: "Light Sensitivity",
                desc: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The cloaker makes two attacks: one with its bite and one with its tail.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Moan",
                desc: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Phantasms (Recharges after a Short or Long Rest)",
                desc: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Cloud Giant",
        source: "5e SRD",
        size: "Huge",
        type: "giant",
        subtype: "",
        alignment: "neutral good (50%) or neutral evil (50%)",
        ac: 14,
        hp: 200,
        hit_dice: "16d12 + 96",
        speed: "40 ft.",
        stats: [27, 10, 22, 12, 16, 16],
        saves: [{ constitution: 10 }, { wisdom: 7 }, { charisma: 7 }],
        skillsaves: [{ insight: 7 }, { perception: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 17",
        languages: "Common, Giant",
        cr: "9",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The giant has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, fog cloud, light\n3/day each: feather fall, fly, misty step, telekinesis\n1/day each: control weather, gaseous form",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The giant makes two morningstar attacks.",
                attack_bonus: 0
            },
            {
                name: "Morningstar",
                desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage.",
                attack_bonus: 12,
                damage_dice: "3d8",
                damage_bonus: 8
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage.",
                attack_bonus: 12,
                damage_dice: "4d10",
                damage_bonus: 8
            }
        ]
    },
    {
        name: "Cockatrice",
        source: "5e SRD",
        size: "Small",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 27,
        hit_dice: "6d6 + 6",
        speed: "20 ft., fly 40 ft.",
        stats: [6, 12, 12, 2, 13, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "",
        cr: "1/2",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Commoner",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 10,
        hp: 4,
        hit_dice: "1d8 + -1",
        speed: "30 ft.",
        stats: [10, 10, 10, 10, 10, 10],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "0",
        bestiary: true,
        actions: [
            {
                name: "Club",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
                attack_bonus: 2,
                damage_dice: "1d4"
            }
        ]
    },
    {
        name: "Constrictor Snake",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hit_dice: "2d10 + 2",
        speed: "30 ft., swim 30 ft.",
        stats: [15, 14, 12, 1, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Constrict",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Copper Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 16,
        hp: 22,
        hit_dice: "4d8 + 4",
        speed: "30 ft., climb 30 ft., fly 60 ft.",
        stats: [15, 12, 13, 14, 11, 13],
        saves: [
            { dexterity: 3 },
            { constitution: 3 },
            { wisdom: 2 },
            { charisma: 3 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "1",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 1 5-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
                attack_bonus: 0,
                damage_dice: "4d8"
            }
        ]
    },
    {
        name: "Couatl",
        source: "5e SRD",
        size: "Medium",
        type: "celestial",
        subtype: "",
        alignment: "lawful good",
        ac: 19,
        hp: 97,
        hit_dice: "13d8 + 38",
        speed: "30 ft., fly 90 ft.",
        stats: [16, 20, 17, 18, 20, 18],
        saves: [{ constitution: 5 }, { wisdom: 7 }, { charisma: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "radiant",
        damage_immunities:
            "psychic; bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities: "",
        senses: "truesight 120 ft., passive Perception 15",
        languages: "all, telepathy 120 ft.",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Innate Spellcasting",
                desc: "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n1/day each: dream, greater restoration, scrying",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The couatl's weapon attacks are magical.",
                attack_bonus: 0
            },
            {
                name: "Shielded Mind",
                desc: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake.",
                attack_bonus: 8,
                damage_dice: "1d6",
                damage_bonus: 5
            },
            {
                name: "Constrict",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Change Shape",
                desc: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Crab",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 2,
        hit_dice: "1d4",
        speed: "20 ft., swim 20 ft.",
        stats: [2, 11, 10, 1, 8, 2],
        skillsaves: [{ stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 30 ft., passive Perception 9",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The crab can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
                attack_bonus: 0,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Crocodile",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "20 ft., swim 20 ft.",
        stats: [15, 10, 13, 2, 10, 5],
        skillsaves: [{ stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "The crocodile can hold its breath for 15 minutes.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Cult Fanatic",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 13,
        hp: 22,
        hit_dice: "6d8 + -5",
        speed: "30 ft.",
        stats: [11, 14, 12, 10, 13, 14],
        skillsaves: [{ deception: 4 }, { persuasion: 4 }, { religion: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "any one language (usually Common)",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Dark Devotion",
                desc: "The fanatic has advantage on saving throws against being charmed or frightened.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The fanatic makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Dagger",
                desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ],
        spells: [
            "The fanatic is a 4th-level spellcaster. Its spell casting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:",
            "Cantrips (at will): light, sacred flame, thaumaturgy",
            {
                "1st level (4 slots)":
                    "command, inflict wounds, shield of faith"
            },
            { "2nd level (3 slots)": "hold person, spiritual weapon" }
        ]
    },
    {
        name: "Cultist",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 12,
        hp: 9,
        hit_dice: "2d8",
        speed: "30 ft.",
        stats: [11, 12, 10, 10, 11, 10],
        skillsaves: [{ deception: 2 }, { religion: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Dark Devotion",
                desc: "The cultist has advantage on saving throws against being charmed or frightened.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Scimitar",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Darkmantle",
        source: "5e SRD",
        size: "Small",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 22,
        hit_dice: "5d6 + 4",
        speed: "10 ft., fly 30 ft.",
        stats: [16, 12, 13, 2, 10, 5],
        skillsaves: [{ stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 60 ft., passive Perception 10",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Echolocation",
                desc: "The darkmantle can't use its blindsight while deafened.",
                attack_bonus: 0
            },
            {
                name: "False Appearance",
                desc: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Crush",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Darkness Aura (1/day)",
                desc: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Death Dog",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral evil",
        ac: 12,
        hp: 39,
        hit_dice: "6d8 + 12",
        speed: "40 ft.",
        stats: [15, 14, 14, 3, 13, 6],
        skillsaves: [{ perception: 5 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 15",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Two-Headed",
                desc: "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dog makes two bite attacks.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Deep Gnome (Svirfneblin)",
        source: "5e SRD",
        size: "Small",
        type: "humanoid",
        subtype: "gnome",
        alignment: "neutral good",
        ac: 15,
        hp: 16,
        hit_dice: "3d6 + 5",
        speed: "20 ft.",
        stats: [15, 14, 14, 12, 10, 9],
        skillsaves: [{ perception: 2 }, { investigation: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 12",
        languages: "Gnomish, Terran, Undercommon",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Stone Camouflage",
                desc: "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
                attack_bonus: 0
            },
            {
                name: "Gnome Cunning",
                desc: "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The gnome's innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: nondetection (self only)\n1/day each: blindness/deafness, blur, disguise self",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "War Pick",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Poisoned Dart",
                desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Deer",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 4,
        hit_dice: "1d8 + -1",
        speed: "50 ft.",
        stats: [11, 16, 11, 2, 14, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "",
        cr: "0",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
                attack_bonus: 2,
                damage_dice: "1d4"
            }
        ]
    },
    {
        name: "Deva",
        source: "5e SRD",
        size: "Medium",
        type: "celestial",
        subtype: "",
        alignment: "lawful good",
        ac: 17,
        hp: 136,
        hit_dice: "16d8 + 64",
        speed: "30 ft., fly 90 ft.",
        stats: [18, 18, 18, 17, 20, 20],
        saves: [{ wisdom: 9 }, { charisma: 9 }],
        skillsaves: [{ insight: 9 }, { perception: 9 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "",
        condition_immunities: "charmed, exhaustion, frightened",
        senses: "darkvision 120 ft., passive Perception 19",
        languages: "all, telepathy 120 ft.",
        cr: "10",
        bestiary: true,
        traits: [
            {
                name: "Angelic Weapons",
                desc: "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack).",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:\nAt will: detect evil and good\n1/day each: commune, raise dead",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The deva has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The deva makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Mace",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage.",
                attack_bonus: 8,
                damage_dice: "1d6 + 4d8",
                damage_bonus: 4
            },
            {
                name: "Healing Touch (3/Day)",
                desc: "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
                attack_bonus: 0
            },
            {
                name: "Change Shape",
                desc: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Dire Wolf",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 37,
        hit_dice: "5d10 + 9",
        speed: "50 ft.",
        stats: [17, 15, 15, 3, 12, 7],
        skillsaves: [{ perception: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Djinni",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "chaotic good",
        ac: 17,
        hp: 161,
        hit_dice: "14d10 + 84",
        speed: "30 ft., fly 90 ft.",
        stats: [21, 15, 22, 15, 16, 20],
        saves: [{ dexterity: 6 }, { wisdom: 7 }, { charisma: 9 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning, thunder",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "Auran",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Elemental Demise",
                desc: "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, detect magic, thunderwave 3/day each: create food and water (can create wine instead of water), tongues, wind walk\n1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift",
                attack_bonus: 0
            },
            {
                name: "Variant: Genie Powers",
                desc: "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.\n\nDisguises.\nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.\nWishes.\nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.\nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The djinni makes three scimitar attacks.",
                attack_bonus: 0
            },
            {
                name: "Scimitar",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice).",
                attack_bonus: 9,
                damage_dice: "2d6 + 1d6",
                damage_bonus: 5
            },
            {
                name: "Create Whirlwind",
                desc: "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Doppelganger",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "unaligned",
        ac: 14,
        hp: 52,
        hit_dice: "8d8 + 16",
        speed: "30 ft.",
        stats: [11, 18, 14, 11, 12, 14],
        skillsaves: [{ deception: 6 }, { insight: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "charmed",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Common",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Ambusher",
                desc: "The doppelganger has advantage on attack rolls against any creature it has surprised.",
                attack_bonus: 0
            },
            {
                name: "Surprise Attack",
                desc: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack.",
                attack_bonus: 0,
                damage_dice: "3d6"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The doppelganger makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "1d6",
                damage_bonus: 4
            },
            {
                name: "Read Thoughts",
                desc: "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Draft Horse",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "40 ft.",
        stats: [18, 10, 12, 2, 11, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d4",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Dragon Turtle",
        source: "5e SRD",
        size: "Gargantuan",
        type: "dragon",
        subtype: "",
        alignment: "neutral",
        ac: 20,
        hp: 341,
        hit_dice: "22d20 + 110",
        speed: "20 ft., swim 40 ft.",
        stats: [25, 10, 20, 10, 12, 12],
        saves: [{ dexterity: 6 }, { constitution: 11 }, { wisdom: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "fire",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Aquan, Draconic",
        cr: "17",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon turtle can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage.",
                attack_bonus: 13,
                damage_dice: "3d12",
                damage_bonus: 7
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage.",
                attack_bonus: 13,
                damage_dice: "2d8",
                damage_bonus: 7
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone.",
                attack_bonus: 13,
                damage_dice: "3d12",
                damage_bonus: 7
            },
            {
                name: "Steam Breath (Recharge 5-6)",
                desc: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage.",
                attack_bonus: 0,
                damage_dice: "15d6"
            }
        ]
    },
    {
        name: "Dretch",
        source: "5e SRD",
        size: "Small",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 11,
        hp: 18,
        hit_dice: "4d6 + 4",
        speed: "20 ft.",
        stats: [11, 11, 12, 5, 8, 3],
        damage_vulnerabilities: "",
        damage_resistances: "cold, fire, lightning",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 9",
        languages:
            "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dretch makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
                attack_bonus: 2,
                damage_dice: "1d6"
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage.",
                attack_bonus: 2,
                damage_dice: "2d4"
            },
            {
                name: "Fetid Cloud (1/Day)",
                desc: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Drider",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 19,
        hp: 123,
        hit_dice: "13d10 + 51",
        speed: "30 ft., climb 30 ft.",
        stats: [16, 16, 18, 13, 14, 12],
        skillsaves: [{ perception: 5 }, { stealth: 9 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 15",
        languages: "Elvish, Undercommon",
        cr: "6",
        bestiary: true,
        traits: [
            {
                name: "Fey Ancestry",
                desc: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie fire",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The drider ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.",
                attack_bonus: 6,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Drow",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "elf",
        alignment: "neutral evil",
        ac: 15,
        hp: 13,
        hit_dice: "3d8 + -1",
        speed: "30 ft.",
        stats: [10, 14, 10, 11, 11, 12],
        skillsaves: [{ perception: 2 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 12",
        languages: "Elvish, Undercommon",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Fey Ancestry",
                desc: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The drow's spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:\nAt will: dancing lights\n1/day each: darkness, faerie fire",
                attack_bonus: 0
            },
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Hand Crossbow",
                desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Druid",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 11,
        hp: 27,
        hit_dice: "5d8 + 4",
        speed: "30 ft.",
        stats: [10, 12, 13, 12, 15, 11],
        skillsaves: [{ nature: 3 }, { medicine: 4 }, { perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "Druidic plus any two languages",
        cr: "2",
        bestiary: true,
        traits: [],
        actions: [
            {
                name: "Quarterstaff",
                desc: "Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, or 6 (1d8 + 2) bludgeoning damage with shillelagh or if wielded with two hands.",
                attack_bonus: 2,
                damage_dice: "1d6"
            }
        ],
        spells: [
            "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:",
            { "Cantrips (at will)": "druidcraft, produce flame, shillelagh" },
            {
                "1st level (4 slots)":
                    "entangle, longstrider, speak with animals, thunderwave"
            },
            { "2nd level (3 slots)": "animal messenger, barkskin" }
        ]
    },
    {
        name: "Dryad",
        source: "5e SRD",
        size: "Medium",
        type: "fey",
        subtype: "",
        alignment: "neutral",
        ac: 11,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "30 ft.",
        stats: [10, 12, 11, 14, 15, 18],
        skillsaves: [{ perception: 4 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Elvish, Sylvan",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Innate Spellcasting",
                desc: "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:\n\nAt will: druidcraft\n3/day each: entangle, goodberry\n1/day each: barkskin, pass without trace, shillelagh",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The dryad has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Speak with Beasts and Plants",
                desc: "The dryad can communicate with beasts and plants as if they shared a language.",
                attack_bonus: 0
            },
            {
                name: "Tree Stride",
                desc: "Once on her turn, the dryad can use 10 ft. of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 ft. of the first tree, appearing in an unoccupied space within 5 ft. of the second tree. Both trees must be large or bigger.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Club",
                desc: "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1 d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh.",
                attack_bonus: 2,
                damage_dice: "1d4"
            },
            {
                name: "Fey Charm",
                desc: "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Duergar",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "dwarf",
        alignment: "lawful evil",
        ac: 16,
        hp: 26,
        hit_dice: "4d8 + 8",
        speed: "25 ft.",
        stats: [14, 11, 14, 11, 10, 9],
        damage_vulnerabilities: "",
        damage_resistances: "poison",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "Dwarvish, Undercommon",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Duergar Resilience",
                desc: "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed.",
                attack_bonus: 0
            },
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Enlarge (Recharges after a Short or Long Rest)",
                desc: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.",
                attack_bonus: 0
            },
            {
                name: "War Pick",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Javelin",
                desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Invisibility (Recharges after a Short or Long Rest)",
                desc: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it .",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Dust Mephit",
        source: "5e SRD",
        size: "Small",
        type: "elemental",
        subtype: "",
        alignment: "neutral evil",
        ac: 12,
        hp: 17,
        hit_dice: "5d6 + -1",
        speed: "30 ft., fly 30 ft.",
        stats: [5, 14, 10, 9, 11, 10],
        skillsaves: [{ perception: 2 }, { stealth: 4 }],
        damage_vulnerabilities: "fire",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Auran, Terran",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Death Burst",
                desc: "When the mephit dies, it explodes in a burst of dust. Each creature within 5 ft. of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting (1/Day)",
                desc: "The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Blinding Breath (Recharge 6)",
                desc: "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Mephits (1/Day)",
                desc: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Eagle",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hit_dice: "1d6 + -1",
        speed: "10 ft., fly 60 ft.",
        stats: [6, 15, 10, 2, 14, 7],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Earth Elemental",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "neutral",
        ac: 17,
        hp: 126,
        hit_dice: "12d10 + 60",
        speed: "30 ft., burrow 30 ft.",
        stats: [20, 8, 20, 5, 10, 5],
        damage_vulnerabilities: "thunder",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities:
            "exhaustion, paralyzed, petrified, poisoned, unconscious",
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 10",
        languages: "Terran",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Earth Glide",
                desc: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through.",
                attack_bonus: 0
            },
            {
                name: "Siege Monster",
                desc: "The elemental deals double damage to objects and structures.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The elemental makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
                attack_bonus: 8,
                damage_dice: "2d8",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Efreeti",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "lawful evil",
        ac: 17,
        hp: 200,
        hit_dice: "16d10 + 112",
        speed: "40 ft., fly 60 ft.",
        stats: [22, 12, 24, 16, 15, 16],
        saves: [{ intelligence: 7 }, { wisdom: 6 }, { charisma: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 12",
        languages: "Ignan",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Elemental Demise",
                desc: "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the djinni was wearing or carrying.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The efreeti's innate spell casting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic\n3/day: enlarge/reduce, tongues\n1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire",
                attack_bonus: 0
            },
            {
                name: "Variant: Genie Powers",
                desc: "Genies have a variety of magical capabilities, including spells. A few have even greater powers that allow them to alter their appearance or the nature of reality.\n\nDisguises.\nSome genies can veil themselves in illusion to pass as other similarly shaped creatures. Such genies can innately cast the disguise self spell at will, often with a longer duration than is normal for that spell. Mightier genies can cast the true polymorph spell one to three times per day, possibly with a longer duration than normal. Such genies can change only their own shape, but a rare few can use the spell on other creatures and objects as well.\nWishes.\nThe genie power to grant wishes is legendary among mortals. Only the most potent genies, such as those among the nobility, can do so. A particular genie that has this power can grant one to three wishes to a creature that isn't a genie. Once a genie has granted its limit of wishes, it can't grant wishes again for some amount of time (usually 1 year). and cosmic law dictates that the same genie can expend its limit of wishes on a specific creature only once in that creature's existence.\nTo be granted a wish, a creature within 60 feet of the genie states a desired effect to it. The genie can then cast the wish spell on the creature's behalf to bring about the effect. Depending on the genie's nature, the genie might try to pervert the intent of the wish by exploiting the wish's poor wording. The perversion of the wording is usually crafted to be to the genie's benefit.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The efreeti makes two scimitar attacks or uses its Hurl Flame twice.",
                attack_bonus: 0
            },
            {
                name: "Scimitar",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage.",
                attack_bonus: 10,
                damage_dice: "2d6 + 2d6",
                damage_bonus: 6
            },
            {
                name: "Hurl Flame",
                desc: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage.",
                attack_bonus: 7,
                damage_dice: "5d6"
            }
        ]
    },
    {
        name: "Elephant",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 76,
        hit_dice: "8d12 + 24",
        speed: "40 ft.",
        stats: [22, 9, 17, 3, 11, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Trampling Charge",
                desc: "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
                attack_bonus: 8,
                damage_dice: "3d8",
                damage_bonus: 6
            },
            {
                name: "Stomp",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage.",
                attack_bonus: 8,
                damage_dice: "3d10",
                damage_bonus: 6
            }
        ]
    },
    {
        name: "Elk",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hit_dice: "2d10 + 2",
        speed: "50 ft.",
        stats: [16, 10, 12, 2, 10, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d6"
            }
        ],
        actions: [
            {
                name: "Ram",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
                attack_bonus: 0
            },
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Erinyes",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        hp: 153,
        hit_dice: "18d8 + 72",
        speed: "30 ft., fly 60 ft.",
        stats: [18, 16, 18, 14, 14, 18],
        saves: [
            { dexterity: 7 },
            { constitution: 8 },
            { wisdom: 6 },
            { charisma: 8 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "truesight 120 ft., passive Perception 12",
        languages: "Infernal, telepathy 120 ft.",
        cr: "12",
        bestiary: true,
        traits: [
            {
                name: "Hellish Weapons",
                desc: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks).",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The erinyes has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The erinyes makes three attacks",
                attack_bonus: 0
            },
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage.",
                attack_bonus: 8,
                damage_dice: "1d8 + 3d8",
                damage_bonus: 4
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic.",
                attack_bonus: 7,
                damage_dice: "1d8 + 3d8",
                damage_bonus: 3
            },
            {
                name: "Variant: Rope of Entanglement",
                desc: "Some erinyes carry a rope of entanglement (detailed in the Dungeon Master's Guide). When such an erinyes uses its Multiattack, the erinyes can use the rope in place of two of the attacks.",
                attack_bonus: 0
            }
        ],
        reactions: [
            {
                name: "Parry",
                desc: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ettercap",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral evil",
        ac: 13,
        hp: 44,
        hit_dice: "8d8 + 8",
        speed: "30 ft., climb 30 ft.",
        stats: [14, 15, 13, 7, 12, 8],
        skillsaves: [{ perception: 3 }, { stealth: 4 }, { survival: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Spider Climb",
                desc: "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Web Sense",
                desc: "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The ettercap ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The ettercap makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "2d4",
                damage_bonus: 2
            },
            {
                name: "Web (Recharge 5-6)",
                desc: "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage.",
                attack_bonus: 0
            },
            {
                name: "Variant: Web Garrote",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one Medium or Small creature against which the ettercap has advantage on the attack roll. Hit: 4 (1d4 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until this grapple ends, the target can't breathe, and the ettercap has advantage on attack rolls against it.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Ettin",
        source: "5e SRD",
        size: "Large",
        type: "giant",
        subtype: "",
        alignment: "chaotic evil",
        ac: 12,
        hp: 85,
        hit_dice: "10d10 + 30",
        speed: "40 ft.",
        stats: [21, 8, 17, 6, 10, 8],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Giant, Orc",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Two Heads",
                desc: "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.",
                attack_bonus: 0
            },
            {
                name: "Wakeful",
                desc: "When one of the ettin's heads is asleep, its other head is awake.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The ettin makes two attacks: one with its battleaxe and one with its morningstar.",
                attack_bonus: 0
            },
            {
                name: "Battleaxe",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 5
            },
            {
                name: "Morningstar",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Fire Elemental",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "neutral",
        ac: 13,
        hp: 102,
        hit_dice: "12d10 + 36",
        speed: "50 ft.",
        stats: [10, 17, 16, 6, 10, 7],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "fire, poison",
        condition_immunities:
            "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Fire Form",
                desc: "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 ft. of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns.",
                attack_bonus: 0,
                damage_dice: "5d10"
            },
            {
                name: "Illumination",
                desc: "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 ft..",
                attack_bonus: 0
            },
            {
                name: "Water Susceptibility",
                desc: "For every 5 ft. the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The elemental makes two touch attacks.",
                attack_bonus: 0
            },
            {
                name: "Touch",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Fire Giant",
        source: "5e SRD",
        size: "Huge",
        type: "giant",
        subtype: "",
        alignment: "lawful evil",
        ac: 18,
        hp: 162,
        hit_dice: "13d12 + 77",
        speed: "30 ft.",
        stats: [25, 9, 23, 10, 14, 13],
        saves: [{ dexterity: 3 }, { constitution: 10 }, { charisma: 5 }],
        skillsaves: [{ athletics: 11 }, { perception: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "passive Perception 16",
        languages: "Giant",
        cr: "9",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The giant makes two greatsword attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatsword",
                desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage.",
                attack_bonus: 11,
                damage_dice: "6d6",
                damage_bonus: 7
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage.",
                attack_bonus: 11,
                damage_dice: "4d10",
                damage_bonus: 7
            }
        ]
    },
    {
        name: "Flesh Golem",
        source: "5e SRD",
        size: "Medium",
        type: "construct",
        subtype: "",
        alignment: "neutral",
        ac: 9,
        hp: 93,
        hit_dice: "11d8 + 43",
        speed: "30 ft.",
        stats: [19, 9, 18, 6, 10, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "lightning, poison; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Berserk",
                desc: "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.\nThe golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again.",
                attack_bonus: 0
            },
            {
                name: "Aversion of Fire",
                desc: "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.",
                attack_bonus: 0
            },
            {
                name: "Immutable Form",
                desc: "The golem is immune to any spell or effect that would alter its form.",
                attack_bonus: 0
            },
            {
                name: "Lightning Absorption",
                desc: "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The golem has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The golem's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The golem makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Flying Snake",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 5,
        hit_dice: "2d4",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        stats: [4, 18, 11, 2, 12, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., passive Perception 11",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Flyby",
                desc: "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
                attack_bonus: 6,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Flying Sword",
        source: "5e SRD",
        size: "Small",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 17,
        hp: 17,
        hit_dice: "5d6 + -1",
        speed: "0 ft., fly 50 ft. It can hover.",
        stats: [12, 15, 11, 1, 5, 1],
        saves: [{ dexterity: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison, psychic",
        condition_immunities:
            "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 7",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Antimagic Susceptibility",
                desc: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
                attack_bonus: 0
            },
            {
                name: "False Appearance",
                desc: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Frog",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "20 ft., swim 20 ft.",
        stats: [1, 13, 8, 1, 8, 3],
        skillsaves: [{ perception: 1 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 11",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The frog can breathe air and water",
                attack_bonus: 0
            },
            {
                name: "Standing Leap",
                desc: "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Frost Giant",
        source: "5e SRD",
        size: "Huge",
        type: "giant",
        subtype: "",
        alignment: "neutral evil",
        ac: 15,
        hp: 138,
        hit_dice: "12d12 + 60",
        speed: "40 ft.",
        stats: [23, 9, 21, 9, 10, 12],
        saves: [{ constitution: 8 }, { wisdom: 3 }, { charisma: 4 }],
        skillsaves: [{ athletics: 9 }, { perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "Giant",
        cr: "8",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The giant makes two greataxe attacks.",
                attack_bonus: 0
            },
            {
                name: "Greataxe",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage.",
                attack_bonus: 9,
                damage_dice: "3d12",
                damage_bonus: 6
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
                attack_bonus: 9,
                damage_dice: "4d10",
                damage_bonus: 6
            }
        ]
    },
    {
        name: "Gargoyle",
        source: "5e SRD",
        size: "Medium",
        type: "elemental",
        subtype: "",
        alignment: "chaotic evil",
        ac: 15,
        hp: 52,
        hit_dice: "7d8 + 20",
        speed: "30 ft., fly 60 ft.",
        stats: [15, 11, 16, 6, 11, 7],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
        damage_immunities: "poison",
        condition_immunities: "exhaustion, petrified, poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Terran",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the gargoyle remains motion less, it is indistinguishable from an inanimate statue.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The gargoyle makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Gelatinous Cube",
        source: "5e SRD",
        size: "Large",
        type: "ooze",
        subtype: "",
        alignment: "unaligned",
        ac: 6,
        hp: 84,
        hit_dice: "8d10 + 40",
        speed: "15 ft.",
        stats: [14, 3, 20, 1, 6, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities:
            "blinded, charmed, deafened, exhaustion, frightened, prone",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Ooze Cube",
                desc: "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.\nCreatures inside the cube can be seen but have total cover.\nA creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.\nThe cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time.",
                attack_bonus: 0
            },
            {
                name: "Transparent",
                desc: "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.",
                attack_bonus: 4,
                damage_dice: "3d6"
            },
            {
                name: "Engulf",
                desc: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ghast",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "chaotic evil",
        ac: 13,
        hp: 36,
        hit_dice: "8d8",
        speed: "30 ft.",
        stats: [16, 17, 10, 11, 10, 8],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "necrotic",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Stench",
                desc: "Any creature that starts its turn within 5 ft. of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Turn Defiance",
                desc: "The ghast and any ghouls within 30 ft. of it have advantage on saving throws against effects that turn undead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage.",
                attack_bonus: 3,
                damage_dice: "2d8",
                damage_bonus: 3
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Ghost",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "any alignment",
        ac: 11,
        hp: 45,
        hit_dice: "10d8",
        speed: "0 ft., fly 40 ft. It can hover.",
        stats: [7, 13, 10, 10, 12, 17],
        damage_vulnerabilities: "",
        damage_resistances:
            "acid, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "cold, necrotic, poison",
        condition_immunities:
            "charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "any languages it knew in life",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Ethereal Sight",
                desc: "The ghost can see 60 ft. into the Ethereal Plane when it is on the Material Plane, and vice versa.",
                attack_bonus: 0
            },
            {
                name: "Incorporeal Movement",
                desc: "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Withering Touch",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage.",
                attack_bonus: 5,
                damage_dice: "4d6",
                damage_bonus: 3
            },
            {
                name: "Etherealness",
                desc: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.",
                attack_bonus: 0
            },
            {
                name: "Horrifying Visage",
                desc: "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.",
                attack_bonus: 0
            },
            {
                name: "Possession (Recharge 6)",
                desc: "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ghoul",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "30 ft.",
        stats: [13, 15, 10, 7, 10, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common",
        cr: "1",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage.",
                attack_bonus: 2,
                damage_dice: "2d6",
                damage_bonus: 2
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Giant Ape",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 157,
        hit_dice: "15d12 + 59",
        speed: "40 ft., climb 40 ft.",
        stats: [23, 14, 18, 7, 12, 7],
        skillsaves: [{ athletics: 9 }, { perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "7",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The ape makes two fist attacks.",
                attack_bonus: 0
            },
            {
                name: "Fist",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage.",
                attack_bonus: 9,
                damage_dice: "3d10",
                damage_bonus: 6
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage.",
                attack_bonus: 9,
                damage_dice: "7d6",
                damage_bonus: 6
            }
        ]
    },
    {
        name: "Giant Badger",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hit_dice: "2d8 + 4",
        speed: "30 ft., burrow 10 ft.",
        stats: [13, 10, 15, 2, 12, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 11",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The badger has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The badger makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "2d4",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Giant Bat",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 22,
        hit_dice: "4d10",
        speed: "10 ft., fly 60 ft.",
        stats: [15, 16, 11, 2, 12, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 60 ft., passive Perception 11",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Echolocation",
                desc: "The bat can't use its blindsight while deafened.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing",
                desc: "The bat has advantage on Wisdom (Perception) checks that rely on hearing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Boar",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 42,
        hit_dice: "5d10 + 14",
        speed: "40 ft.",
        stats: [17, 10, 16, 2, 7, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 8",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d6"
            },
            {
                name: "Relentless (Recharges after a Short or Long Rest)",
                desc: "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Tusk",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Giant Centipede",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 4,
        hit_dice: "1d6",
        speed: "30 ft., climb 30 ft.",
        stats: [5, 14, 12, 1, 7, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 30 ft., passive Perception 8",
        languages: "",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Constrictor Snake",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 60,
        hit_dice: "8d12 + 8",
        speed: "30 ft., swim 30 ft.",
        stats: [19, 14, 12, 1, 10, 3],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., passive Perception 12",
        languages: "",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Constrict",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Giant Crab",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 15,
        hp: 13,
        hit_dice: "3d8 + -1",
        speed: "30 ft., swim 30 ft.",
        stats: [13, 15, 11, 1, 9, 3],
        skillsaves: [{ stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 30 ft., passive Perception 9",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The crab can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Giant Crocodile",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 85,
        hit_dice: "9d12 + 26",
        speed: "30 ft., swim 50 ft.",
        stats: [21, 9, 17, 2, 10, 7],
        skillsaves: [{ stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "The crocodile can hold its breath for 30 minutes.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The crocodile makes two attacks: one with its bite and one with its tail.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
                attack_bonus: 8,
                damage_dice: "3d10",
                damage_bonus: 5
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
                attack_bonus: 8,
                damage_dice: "2d8",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Giant Eagle",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "neutral good",
        ac: 13,
        hp: 26,
        hit_dice: "4d10 + 4",
        speed: "10 ft., fly 80 ft.",
        stats: [16, 17, 13, 8, 14, 10],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "Giant Eagle, understands Common and Auran but can't speak",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The eagle has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The eagle makes two attacks: one with its beak and one with its talons.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Giant Elk",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 15,
        hp: 42,
        hit_dice: "5d12 + 9",
        speed: "60 ft.",
        stats: [19, 16, 14, 7, 14, 10],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages:
            "Giant Elk, understands Common, Elvish, and Sylvan but can't speak",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d6"
            }
        ],
        actions: [
            {
                name: "Ram",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "4d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Giant Fire Beetle",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 4,
        hit_dice: "1d6",
        speed: "30 ft.",
        stats: [8, 10, 12, 1, 7, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 30 ft., passive Perception 8",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Illumination",
                desc: "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft..",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 — 1) slashing damage.",
                attack_bonus: 1,
                damage_dice: "1d6",
                damage_bonus: -1
            }
        ]
    },
    {
        name: "Giant Frog",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 18,
        hit_dice: "4d8",
        speed: "30 ft., swim 30 ft.",
        stats: [12, 13, 11, 2, 10, 3],
        skillsaves: [{ perception: 2 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 12",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The frog can breathe air and water",
                attack_bonus: 0
            },
            {
                name: "Standing Leap",
                desc: "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            },
            {
                name: "Swallow",
                desc: "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Giant Goat",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "40 ft.",
        stats: [17, 11, 12, 3, 12, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d4"
            },
            {
                name: "Sure-Footed",
                desc: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Ram",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
                attack_bonus: 5,
                damage_dice: "2d4",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Giant Hyena",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 45,
        hit_dice: "6d10 + 12",
        speed: "50 ft.",
        stats: [16, 14, 14, 2, 12, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Rampage",
                desc: "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Giant Lizard",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "30 ft., climb 30 ft.",
        stats: [15, 12, 13, 2, 10, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Variant: Hold Breath",
                desc: "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)",
                attack_bonus: 0
            },
            {
                name: "Variant: Spider Climb",
                desc: "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Octopus",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 52,
        hit_dice: "8d10 + 8",
        speed: "10 ft., swim 60 ft.",
        stats: [17, 13, 13, 4, 10, 4],
        skillsaves: [{ perception: 4 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "While out of water, the octopus can hold its breath for 1 hour.",
                attack_bonus: 0
            },
            {
                name: "Underwater Camouflage",
                desc: "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The octopus can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Tentacles",
                desc: "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Ink Cloud (Recharges after a Short or Long Rest)",
                desc: "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Giant Owl",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "neutral",
        ac: 12,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "5 ft., fly 60 ft.",
        stats: [13, 15, 12, 8, 13, 10],
        skillsaves: [{ perception: 5 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 15",
        languages:
            "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Flyby",
                desc: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing and Sight",
                desc: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "2d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Giant Poisonous Snake",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "30 ft., swim 30 ft.",
        stats: [10, 18, 13, 2, 10, 3],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., passive Perception 12",
        languages: "",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 6,
                damage_dice: "1d4",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Giant Rat",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hit_dice: "2d6",
        speed: "30 ft.",
        stats: [7, 15, 11, 2, 10, 4],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Rat (Diseased)",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 7,
        hit_dice: "2d6",
        speed: "30 ft.",
        stats: [7, 15, 11, 2, 10, 4],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Scorpion",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 15,
        hp: 52,
        hit_dice: "7d10 + 13",
        speed: "40 ft.",
        stats: [15, 13, 15, 1, 9, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 60 ft., passive Perception 9",
        languages: "",
        cr: "3",
        bestiary: true,
        actions: [
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Multiattack",
                desc: "The scorpion makes three attacks: two with its claws and one with its sting.",
                attack_bonus: 0
            },
            {
                name: "Sting",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Sea Horse",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 16,
        hit_dice: "3d10 + -1",
        speed: "0 ft., swim 40 ft.",
        stats: [12, 15, 11, 2, 12, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d6"
            },
            {
                name: "Water Breathing",
                desc: "The sea horse can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Ram",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Giant Shark",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 126,
        hit_dice: "11d12 + 54",
        speed: "swim 50 ft.",
        stats: [23, 11, 21, 1, 10, 5],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 60 ft., passive Perception 13",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Blood Frenzy",
                desc: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The shark can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
                attack_bonus: 9,
                damage_dice: "3d10",
                damage_bonus: 6
            }
        ]
    },
    {
        name: "Giant Spider",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 26,
        hit_dice: "4d10 + 4",
        speed: "30 ft., climb 30 ft.",
        stats: [14, 16, 12, 2, 11, 4],
        skillsaves: [{ stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 10",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Spider Climb",
                desc: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Web Sense",
                desc: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The spider ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Web (Recharge 5-6)",
                desc: "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
                attack_bonus: 5
            }
        ]
    },
    {
        name: "Giant Toad",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 39,
        hit_dice: "6d10 + 6",
        speed: "20 ft., swim 40 ft.",
        stats: [15, 13, 13, 2, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The toad can breathe air and water",
                attack_bonus: 0
            },
            {
                name: "Standing Leap",
                desc: "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            },
            {
                name: "Swallow",
                desc: "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Giant Vulture",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "neutral evil",
        ac: 10,
        hp: 22,
        hit_dice: "3d10 + 5",
        speed: "10 ft., fly 60 ft.",
        stats: [15, 10, 15, 6, 12, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "understands Common but can't speak",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight and Smell",
                desc: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The vulture makes two attacks: one with its beak and one with its talons.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "2d4",
                damage_bonus: 2
            },
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "2d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Wasp",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hit_dice: "3d8 + -1",
        speed: "10 ft., fly 50 ft., swim 50 ft.",
        stats: [10, 14, 10, 1, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/2",
        bestiary: true,
        actions: [
            {
                name: "Sting",
                desc: "Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Giant Weasel",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 9,
        hit_dice: "2d8",
        speed: "40 ft.",
        stats: [11, 16, 10, 4, 12, 5],
        skillsaves: [{ perception: 3 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Giant Wolf Spider",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "40 ft., climb 40 ft.",
        stats: [12, 16, 13, 3, 12, 4],
        skillsaves: [{ perception: 3 }, { stealth: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Spider Climb",
                desc: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Web Sense",
                desc: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The spider ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Gibbering Mouther",
        source: "5e SRD",
        size: "Medium",
        type: "aberration",
        subtype: "",
        alignment: "neutral",
        ac: 9,
        hp: 67,
        hit_dice: "9d8 + 26",
        speed: "10 ft., swim 10 ft.",
        stats: [10, 8, 16, 3, 10, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "prone",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Aberrant Ground",
                desc: "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn.",
                attack_bonus: 0
            },
            {
                name: "Gibbering",
                desc: "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle.",
                attack_bonus: 0
            },
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther.",
                attack_bonus: 2,
                damage_dice: "5d6"
            },
            {
                name: "Blinding Spittle (Recharge 5-6)",
                desc: "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Glabrezu",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 17,
        hp: 157,
        hit_dice: "15d10 + 74",
        speed: "40 ft.",
        stats: [20, 15, 21, 19, 17, 16],
        saves: [
            { strength: 9 },
            { constitution: 9 },
            { wisdom: 7 },
            { charisma: 7 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "truesight 120 ft., passive Perception 13",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "9",
        bestiary: true,
        traits: [
            {
                name: "Innate Spellcasting",
                desc: "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:\nAt will: darkness, detect magic, dispel magic\n1/day each: confusion, fly, power word stun",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The glabrezu has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell.",
                attack_bonus: 0
            },
            {
                name: "Pincer",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target.",
                attack_bonus: 9,
                damage_dice: "2d10",
                damage_bonus: 5
            },
            {
                name: "Fist",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
                attack_bonus: 9,
                damage_dice: "2d4",
                damage_bonus: 2
            },
            {
                name: "Variant: Summon Demon (1/Day)",
                desc: "The demon chooses what to summon and attempts a magical summoning.\nA glabrezu has a 30 percent chance of summoning 1d3 vrocks, 1d2 hezrous, or one glabrezu.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Gladiator",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        hp: 112,
        hit_dice: "15d8 + 44",
        speed: "30 ft.",
        stats: [18, 15, 16, 10, 12, 15],
        saves: [{ strength: 7 }, { dexterity: 5 }, { constitution: 6 }],
        skillsaves: [{ intimidation: 5 }, { athletics: 10 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "any one language (usually Common)",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Brave",
                desc: "The gladiator has advantage on saving throws against being frightened.",
                attack_bonus: 0
            },
            {
                name: "Brute",
                desc: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack).",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The gladiator makes three melee attacks or two ranged attacks.",
                attack_bonus: 0
            },
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Shield Bash",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
                attack_bonus: 7,
                damage_dice: "2d4",
                damage_bonus: 4
            }
        ],
        reactions: [
            {
                name: "Parry",
                desc: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Gnoll",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "gnoll",
        alignment: "chaotic evil",
        ac: 15,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "30 ft.",
        stats: [14, 12, 11, 6, 10, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Gnoll",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Rampage",
                desc: "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Goat",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 4,
        hit_dice: "1d8 + -1",
        speed: "40 ft.",
        stats: [12, 10, 11, 2, 10, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "1d4"
            },
            {
                name: "Sure-Footed",
                desc: "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Ram",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Goblin",
        source: "5e SRD",
        size: "Small",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "neutral evil",
        ac: 15,
        hp: 7,
        hit_dice: "2d6",
        speed: "30 ft.",
        stats: [8, 14, 10, 10, 8, 8],
        skillsaves: [{ stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "Common, Goblin",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Nimble Escape",
                desc: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Scimitar",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Shortbow",
                desc: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Gold Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 17,
        hp: 60,
        hit_dice: "8d8 + 24",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        stats: [19, 14, 17, 14, 11, 16],
        saves: [
            { dexterity: 4 },
            { constitution: 5 },
            { wisdom: 2 },
            { charisma: 5 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d10",
                damage_bonus: 4
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "4d10"
            }
        ]
    },
    {
        name: "Gorgon",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 19,
        hp: 114,
        hit_dice: "12d10 + 48",
        speed: "40 ft.",
        stats: [20, 11, 18, 2, 12, 7],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "petrified",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Trampling Charge",
                desc: "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage.",
                attack_bonus: 8,
                damage_dice: "2d12",
                damage_bonus: 5
            },
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage.",
                attack_bonus: 8,
                damage_dice: "2d10",
                damage_bonus: 5
            },
            {
                name: "Petrifying Breath (Recharge 5-6)",
                desc: "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Gray Ooze",
        source: "5e SRD",
        size: "Medium",
        type: "ooze",
        subtype: "",
        alignment: "unaligned",
        ac: 8,
        hp: 22,
        hit_dice: "3d8 + 8",
        speed: "10 ft., climb 10 ft.",
        stats: [12, 6, 16, 1, 6, 2],
        skillsaves: [{ stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "acid, cold, fire",
        damage_immunities: "",
        condition_immunities:
            "blinded, charmed, deafened, exhaustion, frightened, prone",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Amorphous",
                desc: "The ooze can move through a space as narrow as 1 inch wide without squeezing.",
                attack_bonus: 0
            },
            {
                name: "Corrode Metal",
                desc: "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.\nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round.",
                attack_bonus: 0
            },
            {
                name: "False Appearance",
                desc: "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Green Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 17,
        hp: 38,
        hit_dice: "7d8 + 6",
        speed: "30 ft., fly 60 ft., swim 30 ft.",
        stats: [15, 12, 13, 14, 11, 13],
        saves: [
            { dexterity: 3 },
            { constitution: 3 },
            { wisdom: 2 },
            { charisma: 3 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage.",
                attack_bonus: 4,
                damage_dice: "1d10 + 1d6",
                damage_bonus: 3
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                desc: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "6d6"
            }
        ]
    },
    {
        name: "Green Hag",
        source: "5e SRD",
        size: "Medium",
        type: "fey",
        subtype: "",
        alignment: "neutral evil",
        ac: 17,
        hp: 82,
        hit_dice: "11d8 + 32",
        speed: "30 ft.",
        stats: [18, 12, 16, 13, 14, 14],
        skillsaves: [
            { arcana: 3 },
            { deception: 4 },
            { perception: 4 },
            { stealth: 3 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Common, Draconic, Sylvan",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The hag can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:\n\nAt will: dancing lights, minor illusion, vicious mockery",
                attack_bonus: 0
            },
            {
                name: "Mimicry",
                desc: "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.",
                attack_bonus: 0
            },
            {
                name: "Hag Coven",
                desc: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
                attack_bonus: 0
            },
            {
                name: "Shared Spellcasting (Coven Only)",
                desc: "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:\n\n• 1st level (4 slots): identify, ray of sickness\n• 2nd level (3 slots): hold person, locate object\n• 3rd level (3 slots): bestow curse, counterspell, lightning bolt\n• 4th level (3 slots): phantasmal killer, polymorph\n• 5th level (2 slots): contact other plane, scrying\n• 6th level (1 slot): eye bite\n\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
                attack_bonus: 0
            },
            {
                name: "Hag Eye (Coven Only)",
                desc: "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Illusory Appearance",
                desc: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised.",
                attack_bonus: 0
            },
            {
                name: "Invisible Passage",
                desc: "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Grick",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral",
        ac: 14,
        hp: 27,
        hit_dice: "6d8",
        speed: "30 ft., climb 30 ft.",
        stats: [14, 14, 11, 3, 14, 5],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing damage from nonmagical weapons",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Stone Camouflage",
                desc: "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target.",
                attack_bonus: 0
            },
            {
                name: "Tentacles",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "2d6",
                damage_bonus: 2
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Griffon",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 59,
        hit_dice: "7d10 + 20",
        speed: "30 ft., fly 80 ft.",
        stats: [18, 15, 16, 2, 13, 8],
        skillsaves: [{ perception: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The griffon has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The griffon makes two attacks: one with its beak and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Grimlock",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "grimlock",
        alignment: "neutral evil",
        ac: 11,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "30 ft.",
        stats: [16, 12, 12, 9, 8, 6],
        skillsaves: [{ athletics: 5 }, { perception: 3 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "blinded",
        condition_immunities: "",
        senses: "blindsight 30 ft. or 10 ft. while deafened (blind beyond this radius), passive Perception 13",
        languages: "Undercommon",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Blind Senses",
                desc: "The grimlock can't use its blindsight while deafened and unable to smell.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing and Smell",
                desc: "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Stone Camouflage",
                desc: "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Spiked Bone Club",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d4 + 1d4",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Guard",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 16,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "30 ft.",
        stats: [13, 12, 12, 10, 11, 10],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Guardian Naga",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "lawful good",
        ac: 18,
        hp: 127,
        hit_dice: "15d10 + 44",
        speed: "40 ft.",
        stats: [19, 18, 16, 16, 19, 18],
        saves: [
            { dexterity: 8 },
            { constitution: 7 },
            { intelligence: 7 },
            { wisdom: 8 },
            { charisma: 8 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "charmed, poisoned",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Celestial, Common",
        cr: "10",
        bestiary: true,
        traits: [
            {
                name: "Rejuvenation",
                desc: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 8,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Spit Poison",
                desc: "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 8,
                damage_dice: "10d8"
            }
        ],
        spells: [
            "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:",
            { "Cantrips (at will)": "mending, sacred flame, thaumaturgy" },
            { "1st level (4 slots)": "command, cure wounds, shield of faith" },
            { "2nd level (3 slots)": "calm emotions, hold person" },
            { "3rd level (3 slots)": "bestow curse, clairvoyance" },
            { "4th level (3 slots)": "banishment, freedom of movement" },
            { "5th level (2 slots)": "flame strike, geas" },
            { "6th level (1 slot)": "true seeing" }
        ]
    },
    {
        name: "Gynosphinx",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "lawful neutral",
        ac: 17,
        hp: 136,
        hit_dice: "16d10 + 48",
        speed: "40 ft., fly 60 ft.",
        stats: [18, 15, 16, 18, 18, 18],
        skillsaves: [
            { arcana: 12 },
            { history: 12 },
            { perception: 8 },
            { religion: 8 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "psychic",
        condition_immunities: "charmed, frightened",
        senses: "truesight 120 ft., passive Perception 18",
        languages: "Common, Sphinx",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Inscrutable",
                desc: "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The sphinx's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The sphinx makes two claw attacks.",
                attack_bonus: 0
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
                attack_bonus: 9,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ],
        legendary_actions: [
            {
                name: "Claw Attack",
                desc: "The sphinx makes one claw attack.",
                attack_bonus: 0
            },
            {
                name: "Teleport (Costs 2 Actions)",
                desc: "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
                attack_bonus: 0
            },
            {
                name: "Cast a Spell (Costs 3 Actions)",
                desc: "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
                attack_bonus: 0
            }
        ],
        spells: [
            "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:",
            {
                "Cantrips (at will)":
                    "mage hand, minor illusion, prestidigitation"
            },
            { "1st level (4 slots)": "detect magic, identify, shield" },
            { "2nd level (3 slots)": "darkness, locate object, suggestion" },
            { "3rd level (3 slots)": "dispel magic, remove curse, tongues" },
            { "4th level (3 slots)": "banishment, greater invisibility" },
            { "5th level (1 slot)": "legend lore" }
        ]
    },
    {
        name: "Half-Red Dragon Veteran",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "any alignment",
        ac: 18,
        hp: 65,
        hit_dice: "10d8 + 20",
        speed: "30 ft.",
        stats: [16, 13, 14, 10, 11, 10],
        damage_vulnerabilities: "",
        damage_resistances: "fire",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 12",
        languages: "Common, Draconic",
        cr: "5",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
                attack_bonus: 0
            },
            {
                name: "Longsword",
                desc: "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Heavy Crossbow",
                desc: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d10",
                damage_bonus: 1
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "7d6"
            }
        ]
    },
    {
        name: "Harpy",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 11,
        hp: 38,
        hit_dice: "7d8 + 6",
        speed: "20 ft., fly 40 ft.",
        stats: [12, 13, 12, 7, 10, 13],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "Common",
        cr: "1",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The harpy makes two attacks: one with its claws and one with its club.",
                attack_bonus: 0
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "2d4",
                damage_bonus: 1
            },
            {
                name: "Club",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            },
            {
                name: "Luring Song",
                desc: "The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.\nA target that successfully saves is immune to this harpy's song for the next 24 hours.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Hawk",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "10 ft., fly 60 ft.",
        stats: [5, 16, 8, 2, 14, 6],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The hawk has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                attack_bonus: 5,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Hell Hound",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "",
        alignment: "lawful evil",
        ac: 15,
        hp: 45,
        hit_dice: "7d8 + 13",
        speed: "50 ft.",
        stats: [17, 12, 14, 6, 13, 6],
        skillsaves: [{ perception: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "understands Infernal but can't speak it",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "6d6"
            }
        ]
    },
    {
        name: "Hezrou",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 16,
        hp: 136,
        hit_dice: "13d10 + 64",
        speed: "30 ft.",
        stats: [19, 17, 20, 5, 12, 13],
        saves: [{ strength: 7 }, { constitution: 8 }, { wisdom: 4 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The hezrou has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Stench",
                desc: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The hezrou makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "2d10",
                damage_bonus: 4
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Variant: Summon Demon (1/Day)",
                desc: "The demon chooses what to summon and attempts a magical summoning.\nA hezrou has a 30 percent chance of summoning 2d6 dretches or one hezrou.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Hill Giant",
        source: "5e SRD",
        size: "Huge",
        type: "giant",
        subtype: "",
        alignment: "chaotic evil",
        ac: 13,
        hp: 105,
        hit_dice: "10d12 + 40",
        speed: "40 ft.",
        stats: [21, 8, 19, 5, 9, 6],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "Giant",
        cr: "5",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The giant makes two greatclub attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatclub",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 18 (3d8 + 5) bludgeoning damage.",
                attack_bonus: 8,
                damage_dice: "3d8",
                damage_bonus: 5
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +8 to hit, range 60/240 ft., one target. Hit: 21 (3d10 + 5) bludgeoning damage.",
                attack_bonus: 8,
                damage_dice: "3d10",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Hippogriff",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "40 ft, fly 60 ft.",
        stats: [17, 13, 13, 2, 12, 8],
        skillsaves: [{ perception: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 15",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The hippogriff makes two attacks: one with its beak and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d10",
                damage_bonus: 3
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Hobgoblin",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "goblinoid",
        alignment: "lawful evil",
        ac: 18,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "30 ft.",
        stats: [13, 12, 12, 10, 10, 9],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Goblin",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Martial Advantage",
                desc: "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 ft. of an ally of the hobgoblin that isn't incapacitated.",
                attack_bonus: 0,
                damage_dice: "2d6"
            }
        ],
        actions: [
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Homunculus",
        source: "5e SRD",
        size: "Tiny",
        type: "construct",
        subtype: "",
        alignment: "neutral",
        ac: 13,
        hp: 5,
        hit_dice: "2d4",
        speed: "20 ft., fly 40 ft.",
        stats: [4, 15, 11, 10, 10, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "charmed, poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Telepathic Bond",
                desc: "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way.",
                attack_bonus: 4,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Horned Devil",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        hp: 148,
        hit_dice: "17d10 + 54",
        speed: "20 ft., fly 60 ft.",
        stats: [22, 17, 21, 12, 16, 17],
        saves: [
            { strength: 10 },
            { dexterity: 7 },
            { wisdom: 7 },
            { charisma: 7 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "Infernal, telepathy 120 ft.",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the devil's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The devil has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack.",
                attack_bonus: 0
            },
            {
                name: "Fork",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage.",
                attack_bonus: 10,
                damage_dice: "2d8",
                damage_bonus: 6
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing.",
                attack_bonus: 10,
                damage_dice: "1d8",
                damage_bonus: 6
            },
            {
                name: "Hurl Flame",
                desc: "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.",
                attack_bonus: 7,
                damage_dice: "4d6"
            }
        ]
    },
    {
        name: "Hunter Shark",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 45,
        hit_dice: "6d10 + 12",
        speed: "swim 40 ft.",
        stats: [18, 13, 15, 1, 10, 4],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 12",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Blood Frenzy",
                desc: "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The shark can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Hydra",
        source: "5e SRD",
        size: "Huge",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 15,
        hp: 172,
        hit_dice: "15d12 + 74",
        speed: "30 ft., swim 30 ft.",
        stats: [20, 12, 20, 2, 10, 7],
        skillsaves: [{ perception: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 16",
        languages: "",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "The hydra can hold its breath for 1 hour.",
                attack_bonus: 0
            },
            {
                name: "Multiple Heads",
                desc: "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.\nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way.",
                attack_bonus: 0
            },
            {
                name: "Reactive Heads",
                desc: "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks.",
                attack_bonus: 0
            },
            {
                name: "Wakeful",
                desc: "While the hydra sleeps, at least one of its heads is awake.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The hydra makes as many bite attacks as it has heads.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
                attack_bonus: 8,
                damage_dice: "1d10",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Hyena",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 5,
        hit_dice: "1d8",
        speed: "50 ft.",
        stats: [11, 13, 12, 2, 12, 5],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Pack Tactics",
                desc: "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
                attack_bonus: 2,
                damage_dice: "1d6"
            }
        ]
    },
    {
        name: "Ice Devil",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 18,
        hp: 180,
        hit_dice: "19d10 + 75",
        speed: "40 ft.",
        stats: [21, 14, 18, 18, 15, 18],
        saves: [
            { dexterity: 7 },
            { constitution: 9 },
            { wisdom: 7 },
            { charisma: 9 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "blindsight 60 ft., darkvision 120 ft., passive Perception 12",
        languages: "Infernal, telepathy 120 ft.",
        cr: "14",
        bestiary: true,
        traits: [
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the devil's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The devil has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The devil makes three attacks: one with its bite, one with its claws, and one with its tail.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage.",
                attack_bonus: 10,
                damage_dice: "2d6 + 3d6",
                damage_bonus: 5
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage.",
                attack_bonus: 10,
                damage_dice: "2d4 + 3d6",
                damage_bonus: 5
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack:+10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage.",
                attack_bonus: 10,
                damage_dice: "2d6 + 3d6",
                damage_bonus: 5
            },
            {
                name: "Wall of Ice",
                desc: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ice Mephit",
        source: "5e SRD",
        size: "Small",
        type: "elemental",
        subtype: "",
        alignment: "neutral evil",
        ac: 11,
        hp: 21,
        hit_dice: "6d6",
        speed: "30 ft., fly 30 ft.",
        stats: [7, 13, 10, 9, 11, 12],
        skillsaves: [{ perception: 2 }, { stealth: 3 }],
        damage_vulnerabilities: "bludgeoning, fire",
        damage_resistances: "",
        damage_immunities: "cold, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Aquan, Auran",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Death Burst",
                desc: "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 ft. of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "1d8"
            },
            {
                name: "False Appearance",
                desc: "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting (1/Day)",
                desc: "The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            },
            {
                name: "Frost Breath (Recharge 6)",
                desc: "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Mephits (1/Day)",
                desc: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Imp",
        source: "5e SRD",
        size: "Tiny",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 13,
        hp: 10,
        hit_dice: "3d4 + 2",
        speed: "20 ft., fly 40 ft.",
        stats: [6, 17, 13, 11, 12, 14],
        skillsaves: [
            { deception: 4 },
            { insight: 3 },
            { persuasion: 4 },
            { stealth: 5 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical/nonsilver weapons",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Infernal, Common",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the imp's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The imp has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Variant: Familiar",
                desc: "The imp can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the imp is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the imp can end its service as a familiar, ending the telepathic bond.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Sting (Bite in Beast Form)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 3
            },
            {
                name: "Invisibility",
                desc: "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Invisible Stalker",
        source: "5e SRD",
        size: "Medium",
        type: "elemental",
        subtype: "",
        alignment: "neutral",
        ac: 14,
        hp: 104,
        hit_dice: "16d8 + 32",
        speed: "50 ft., fly 50 ft. (hover)",
        stats: [16, 19, 14, 10, 15, 11],
        skillsaves: [{ perception: 8 }, { stealth: 10 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities:
            "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        senses: "darkvision 60 ft., passive Perception 18",
        languages: "Auran, understands Common but doesn't speak it",
        cr: "6",
        bestiary: true,
        traits: [
            {
                name: "Invisibility",
                desc: "The stalker is invisible.",
                attack_bonus: 0
            },
            {
                name: "Faultless Tracker",
                desc: "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The stalker makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Iron Golem",
        source: "5e SRD",
        size: "Large",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 20,
        hp: 210,
        hit_dice: "20d10 + 100",
        speed: "30 ft.",
        stats: [24, 9, 20, 3, 11, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "fire, poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "16",
        bestiary: true,
        traits: [
            {
                name: "Fire Absorption",
                desc: "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt.",
                attack_bonus: 0
            },
            {
                name: "Immutable Form",
                desc: "The golem is immune to any spell or effect that would alter its form.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The golem has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The golem's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The golem makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
                attack_bonus: 13,
                damage_dice: "3d8",
                damage_bonus: 7
            },
            {
                name: "Sword",
                desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage.",
                attack_bonus: 13,
                damage_dice: "3d10",
                damage_bonus: 7
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                desc: "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (l0d8) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "10d8"
            }
        ]
    },
    {
        name: "Jackal",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hit_dice: "1d6 + -1",
        speed: "40 ft.",
        stats: [8, 15, 11, 3, 12, 6],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 — 1) piercing damage.",
                attack_bonus: 1,
                damage_dice: "1d4",
                damage_bonus: -1
            }
        ]
    },
    {
        name: "Killer Whale",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 90,
        hit_dice: "12d12 + 12",
        speed: "swim 60 ft.",
        stats: [19, 10, 13, 3, 12, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 120 ft., passive Perception 13",
        languages: "",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Echolocation",
                desc: "The whale can't use its blindsight while deafened.",
                attack_bonus: 0
            },
            {
                name: "Hold Breath",
                desc: "The whale can hold its breath for 30 minutes",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing",
                desc: "The whale has advantage on Wisdom (Perception) checks that rely on hearing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Knight",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 18,
        hp: 52,
        hit_dice: "8d8 + 16",
        speed: "30 ft.",
        stats: [16, 11, 14, 11, 11, 15],
        saves: [{ constitution: 4 }, { wisdom: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Brave",
                desc: "The knight has advantage on saving throws against being frightened.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The knight makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatsword",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Heavy Crossbow",
                desc: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.",
                attack_bonus: 2,
                damage_dice: "1d10"
            },
            {
                name: "Leadership (Recharges after a Short or Long Rest)",
                desc: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated.",
                attack_bonus: 0
            }
        ],
        reactions: [
            {
                name: "Parry",
                desc: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Kobold",
        source: "5e SRD",
        size: "Small",
        type: "humanoid",
        subtype: "kobold",
        alignment: "lawful evil",
        ac: 12,
        hp: 5,
        hit_dice: "2d6 + -2",
        speed: "30 ft.",
        stats: [7, 15, 9, 8, 7, 8],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "Common, Draconic",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Dagger",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Sling",
                desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Kraken",
        source: "5e SRD",
        size: "Gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "chaotic evil",
        ac: 18,
        hp: 472,
        hit_dice: "27d20 + 188",
        speed: "20 ft., swim 60 ft.",
        stats: [30, 11, 25, 22, 18, 20],
        saves: [
            { strength: 17 },
            { dexterity: 7 },
            { constitution: 14 },
            { intelligence: 13 },
            { wisdom: 11 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities: "frightened, paralyzed",
        senses: "truesight 120 ft., passive Perception 14",
        languages:
            "understands Abyssal, Celestial, Infernal, and Primordial but can't speak, telepathy 120 ft.",
        cr: "23",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The kraken can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Freedom of Movement",
                desc: "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled.",
                attack_bonus: 0
            },
            {
                name: "Siege Monster",
                desc: "The kraken deals double damage to objects and structures.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
                attack_bonus: 7,
                damage_dice: "3d8",
                damage_bonus: 10
            },
            {
                name: "Tentacle",
                desc: "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target.",
                attack_bonus: 7,
                damage_dice: "3d6",
                damage_bonus: 10
            },
            {
                name: "Fling",
                desc: "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone.",
                attack_bonus: 0
            },
            {
                name: "Lightning Storm",
                desc: "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "4d10"
            }
        ],
        legendary_actions: [
            {
                name: "Tentacle Attack or Fling",
                desc: "The kraken makes one tentacle attack or uses its Fling.",
                attack_bonus: 0
            },
            {
                name: "Lightning Storm (Costs 2 Actions)",
                desc: "The kraken uses Lightning Storm.",
                attack_bonus: 0
            },
            {
                name: "Ink Cloud (Costs 3 Actions)",
                desc: "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Lamia",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 13,
        hp: 97,
        hit_dice: "13d10 + 25",
        speed: "30 ft.",
        stats: [16, 13, 15, 14, 15, 16],
        skillsaves: [{ deception: 7 }, { insight: 4 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Abyssal, Common",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Innate Spellcasting",
                desc: "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components. At will: disguise self (any humanoid form), major image 3/day each: charm person, mirror image, scrying, suggestion 1/day: geas",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch.",
                attack_bonus: 0
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d10",
                damage_bonus: 3
            },
            {
                name: "Dagger",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 3
            },
            {
                name: "Intoxicating Touch",
                desc: "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Lemure",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 7,
        hp: 13,
        hit_dice: "3d8 + -1",
        speed: "15 ft.",
        stats: [10, 5, 11, 1, 11, 3],
        damage_vulnerabilities: "",
        damage_resistances: "cold",
        damage_immunities: "fire, poison",
        condition_immunities: "charmed, frightened, poisoned",
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "understands infernal but can't speak",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Devil's Sight",
                desc: "Magical darkness doesn't impede the lemure's darkvision.",
                attack_bonus: 0
            },
            {
                name: "Hellish Rejuvenation",
                desc: "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Fist",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage",
                attack_bonus: 3,
                damage_dice: "1d4"
            }
        ]
    },
    {
        name: "Lich",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "any evil alignment",
        ac: 17,
        hp: 135,
        hit_dice: "18d8 + 54",
        speed: "30 ft.",
        stats: [11, 16, 16, 20, 14, 16],
        saves: [{ constitution: 10 }, { intelligence: 12 }, { wisdom: 9 }],
        skillsaves: [
            { arcana: 18 },
            { history: 12 },
            { insight: 9 },
            { perception: 9 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "cold, lightning, necrotic",
        damage_immunities:
            "poison; bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, poisoned",
        senses: "truesight 120 ft., passive Perception 19",
        languages: "Common plus up to five other languages",
        cr: "21",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the lich fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            },
            {
                name: "Rejuvenation",
                desc: "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery.",
                attack_bonus: 0
            },
            {
                name: "Turn Resistance",
                desc: "The lich has advantage on saving throws against any effect that turns undead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Paralyzing Touch",
                desc: "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 12,
                damage_dice: "3d6"
            }
        ],
        legendary_actions: [
            {
                name: "Cantrip",
                desc: "The lich casts a cantrip.",
                attack_bonus: 0
            },
            {
                name: "Paralyzing Touch (Costs 2 Actions)",
                desc: "The lich uses its Paralyzing Touch.",
                attack_bonus: 0
            },
            {
                name: "Frightening Gaze (Costs 2 Actions)",
                desc: "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Disrupt Life (Costs 3 Actions)",
                desc: "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "6d6"
            }
        ],
        spells: [
            "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:",
            {
                "Cantrips (at will)":
                    "mage hand, prestidigitation, ray of frost"
            },
            {
                "1st level (4 slots)":
                    "detect magic, magic missile, shield, thunderwave"
            },
            {
                "2nd level (3 slots)":
                    "detect thoughts, invisibility, Melf's acid arrow, mirror image"
            },
            {
                "3rd level (3 slots)":
                    "animate dead, counterspell, dispel magic, fireball"
            },
            { "4th level (3 slots)": "blight, dimension door" },
            { "5th level (3 slots)": "cloudkill, scrying" },
            { "6th level (1 slot)": "disintegrate, globe of invulnerability" },
            { "7th level (1 slot)": "finger of death, plane shift" },
            { "8th level (1 slot)": "dominate monster, power word stun" },
            { "9th level (1 slot)": "power word kill" }
        ]
    },
    {
        name: "Lion",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 26,
        hit_dice: "4d10 + 4",
        speed: "50 ft.",
        stats: [17, 15, 13, 3, 12, 8],
        skillsaves: [{ perception: 3 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The lion has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            },
            {
                name: "Pounce",
                desc: "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action.",
                attack_bonus: 0
            },
            {
                name: "Running Leap",
                desc: "With a 10-foot running start, the lion can long jump up to 25 ft..",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Lizard",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 2,
        hit_dice: "1d4 + -1",
        speed: "20 ft., climb 20 ft.",
        stats: [2, 11, 10, 1, 8, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 9",
        languages: "",
        cr: "0",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack_bonus: 0,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Lizardfolk",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "lizardfolk",
        alignment: "neutral",
        ac: 15,
        hp: 22,
        hit_dice: "4d8 + 4",
        speed: "30 ft., swim 30 ft.",
        stats: [15, 10, 13, 7, 12, 7],
        skillsaves: [{ perception: 3 }, { stealth: 4 }, { survival: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "Draconic",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "The lizardfolk can hold its breath for 15 minutes.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The lizardfolk makes two melee attacks, each one with a different weapon.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Heavy Club",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Javelin",
                desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Spiked Shield",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Mage",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 40,
        hit_dice: "9d8 + -1",
        speed: "30 ft.",
        stats: [9, 14, 11, 17, 12, 11],
        saves: [{ intelligence: 6 }, { wisdom: 4 }],
        skillsaves: [{ arcana: 6 }, { history: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "any four languages",
        cr: "6",
        bestiary: true,
        traits: [],
        actions: [
            {
                name: "Dagger",
                desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ],
        spells: [
            "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:",
            {
                "Cantrips (at will)":
                    "fire bolt, light, mage hand, prestidigitation"
            },
            {
                "1st level (4 slots)":
                    "detect magic, mage armor, magic missile, shield"
            },
            { "2nd level (3 slots)": "misty step, suggestion" },
            { "3rd level (3 slots)": "counterspell, fireball, fly" },
            { "4th level (3 slots)": "greater invisibility, ice storm" },
            { "5th level (1 slot)": "cone of cold" }
        ]
    },
    {
        name: "Magma Mephit",
        source: "5e SRD",
        size: "Small",
        type: "elemental",
        subtype: "",
        alignment: "neutral evil",
        ac: 11,
        hp: 22,
        hit_dice: "5d6 + 4",
        speed: "30 ft., fly 30 ft.",
        stats: [8, 12, 12, 7, 10, 10],
        skillsaves: [{ stealth: 3 }],
        damage_vulnerabilities: "cold",
        damage_resistances: "",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan, Terran",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Death Burst",
                desc: "When the mephit dies, it explodes in a burst of lava. Each creature within 5 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "2d6"
            },
            {
                name: "False Appearance",
                desc: "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting (1/Day)",
                desc: "The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft ., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            },
            {
                name: "Fire Breath (Recharge 6)",
                desc: "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Mephits (1/Day)",
                desc: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Magmin",
        source: "5e SRD",
        size: "Small",
        type: "elemental",
        subtype: "",
        alignment: "chaotic neutral",
        ac: 14,
        hp: 9,
        hit_dice: "2d6 + 2",
        speed: "30 ft.",
        stats: [7, 15, 12, 8, 11, 10],
        damage_vulnerabilities: "",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Death Burst",
                desc: "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 ft. of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited.",
                attack_bonus: 0,
                damage_dice: "2d6"
            },
            {
                name: "Ignited Illumination",
                desc: "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 ft.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Touch",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns.",
                attack_bonus: 4,
                damage_dice: "2d6"
            }
        ]
    },
    {
        name: "Mammoth",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 126,
        hit_dice: "11d12 + 54",
        speed: "40 ft.",
        stats: [24, 9, 21, 3, 11, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "6",
        bestiary: true,
        traits: [
            {
                name: "Trampling Charge",
                desc: "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
                attack_bonus: 10,
                damage_dice: "4d8",
                damage_bonus: 7
            },
            {
                name: "Stomp",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
                attack_bonus: 10,
                damage_dice: "4d10",
                damage_bonus: 7
            }
        ]
    },
    {
        name: "Manticore",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "lawful evil",
        ac: 14,
        hp: 68,
        hit_dice: "8d10 + 24",
        speed: "30 ft., fly 50 ft.",
        stats: [17, 16, 17, 7, 12, 8],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Tail Spike Regrowth",
                desc: "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Tail Spike",
                desc: "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Marilith",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        hp: 189,
        hit_dice: "18d10 + 90",
        speed: "40 ft.",
        stats: [18, 20, 20, 18, 16, 20],
        saves: [
            { strength: 9 },
            { constitution: 10 },
            { wisdom: 8 },
            { charisma: 10 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "truesight 120 ft., passive Perception 13",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "16",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The marilith has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The marilith's weapon attacks are magical.",
                attack_bonus: 0
            },
            {
                name: "Reactive",
                desc: "The marilith can take one reaction on every turn in combat.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The marilith can make seven attacks: six with its longswords and one with its tail.",
                attack_bonus: 0
            },
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
                attack_bonus: 9,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets.",
                attack_bonus: 9,
                damage_dice: "2d10",
                damage_bonus: 4
            },
            {
                name: "Teleport",
                desc: "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Demon (1/Day)",
                desc: "The demon chooses what to summon and attempts a magical summoning.\nA marilith has a 50 percent chance of summoning 1d6 vrocks, 1d4 hezrous, 1d3 glabrezus, 1d2 nalfeshnees, or one marilith.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ],
        reactions: [
            {
                name: "Parry",
                desc: "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Mastiff",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 5,
        hit_dice: "1d8",
        speed: "40 ft.",
        stats: [13, 14, 12, 3, 12, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Medusa",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "lawful evil",
        ac: 15,
        hp: 127,
        hit_dice: "17d8 + 50",
        speed: "30 ft.",
        stats: [10, 15, 16, 12, 13, 15],
        skillsaves: [
            { deception: 5 },
            { insight: 4 },
            { perception: 4 },
            { stealth: 5 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Common",
        cr: "6",
        bestiary: true,
        traits: [
            {
                name: "Petrifying Gaze",
                desc: "When a creature that can see the medusa's eyes starts its turn within 30 ft. of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.\nIf the medusa sees itself reflected on a polished surface within 30 ft. of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The medusa makes either three melee attacks —  one with its snake hair and two with its shortsword — or two ranged attacks with its longbow.",
                attack_bonus: 0
            },
            {
                name: "Snake Hair",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage.",
                attack_bonus: 5,
                damage_dice: "2d6"
            }
        ]
    },
    {
        name: "Merfolk",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "merfolk",
        alignment: "neutral",
        ac: 11,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "10 ft., swim 40 ft.",
        stats: [10, 13, 12, 11, 11, 12],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "Aquan, Common",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The merfolk can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 2,
                damage_dice: "1d6"
            }
        ]
    },
    {
        name: "Merrow",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 13,
        hp: 45,
        hit_dice: "6d10 + 12",
        speed: "10 ft., swim 40 ft.",
        stats: [18, 10, 15, 8, 10, 9],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Abyssal, Aquan",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The merrow can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The merrow makes two attacks: one with its bite and one with its claws or harpoon.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d4",
                damage_bonus: 4
            },
            {
                name: "Harpoon",
                desc: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Mimic",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "shapechanger",
        alignment: "neutral",
        ac: 12,
        hp: 58,
        hit_dice: "9d8 + 17",
        speed: "15 ft.",
        stats: [17, 12, 15, 5, 13, 8],
        skillsaves: [{ stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "prone",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn 't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Adhesive (Object Form Only)",
                desc: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage.",
                attack_bonus: 0
            },
            {
                name: "False Appearance (Object Form Only)",
                desc: "While the mimic remains motionless, it is indistinguishable from an ordinary object.",
                attack_bonus: 0
            },
            {
                name: "Grappler",
                desc: "The mimic has advantage on attack rolls against any creature grappled by it.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.",
                attack_bonus: 5,
                damage_dice: "1d8 + 1d8",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Minotaur",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 14,
        hp: 76,
        hit_dice: "9d10 + 26",
        speed: "40 ft.",
        stats: [18, 11, 16, 6, 16, 9],
        skillsaves: [{ perception: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 17",
        languages: "Abyssal",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the minotaur moves at least 10 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 ft. away and knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d8"
            },
            {
                name: "Labyrinthine Recall",
                desc: "The minotaur can perfectly recall any path it has traveled.",
                attack_bonus: 0
            },
            {
                name: "Reckless",
                desc: "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Greataxe",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d12",
                damage_bonus: 4
            },
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Minotaur Skeleton",
        source: "5e SRD",
        size: "Large",
        type: "undead",
        subtype: "",
        alignment: "lawful evil",
        ac: 12,
        hp: 67,
        hit_dice: "9d10 + 17",
        speed: "40 ft.",
        stats: [18, 11, 15, 6, 8, 5],
        damage_vulnerabilities: "bludgeoning",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "exhaustion, poisoned",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "understands Abyssal but can't speak",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d8"
            }
        ],
        actions: [
            {
                name: "Greataxe",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d12",
                damage_bonus: 4
            },
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Mule",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "40 ft.",
        stats: [14, 10, 13, 2, 10, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Beast of Burden",
                desc: "The mule is considered to be a Large animal for the purpose of determining its carrying capacity.",
                attack_bonus: 0
            },
            {
                name: "Sure-Footed",
                desc: "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Mummy",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "lawful evil",
        ac: 11,
        hp: 58,
        hit_dice: "9d8 + 17",
        speed: "20 ft.",
        stats: [16, 8, 15, 6, 10, 12],
        saves: [{ wisdom: 2 }],
        damage_vulnerabilities: "fire",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities: "necrotic, poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "the languages it knew in life",
        cr: "3",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
                attack_bonus: 0
            },
            {
                name: "Rotting Fist",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Dreadful Glare",
                desc: "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Mummy Lord",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "lawful evil",
        ac: 17,
        hp: 97,
        hit_dice: "13d8 + 38",
        speed: "20 ft.",
        stats: [18, 10, 17, 11, 18, 16],
        saves: [
            { constitution: 8 },
            { intelligence: 5 },
            { wisdom: 9 },
            { charisma: 8 }
        ],
        skillsaves: [{ history: 5 }, { religion: 5 }],
        damage_vulnerabilities: "bludgeoning",
        damage_resistances: "",
        damage_immunities:
            "necrotic, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, poisoned",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "the languages it knew in life",
        cr: "15",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The mummy lord has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Rejuvenation",
                desc: "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The mummy can use its Dreadful Glare and makes one attack with its rotting fist.",
                attack_bonus: 0
            },
            {
                name: "Rotting Fist",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
                attack_bonus: 9,
                damage_dice: "3d6 + 6d6",
                damage_bonus: 4
            },
            {
                name: "Dreadful Glare",
                desc: "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Attack",
                desc: "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare.",
                attack_bonus: 0
            },
            {
                name: "Blinding Dust",
                desc: "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn.",
                attack_bonus: 0
            },
            {
                name: "Blasphemous Word (Costs 2 Actions)",
                desc: "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn.",
                attack_bonus: 0
            },
            {
                name: "Channel Negative Energy (Costs 2 Actions)",
                desc: "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn.",
                attack_bonus: 0
            },
            {
                name: "Whirlwind of Sand (Costs 2 Actions)",
                desc: "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession.",
                attack_bonus: 0
            }
        ],
        spells: [
            "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:",
            { "Cantrips (at will)": "sacred flame, thaumaturgy" },
            { "1st level (4 slots)": "command, guiding bolt, shield of faith" },
            { "2nd level (3 slots)": "hold person, silence, spiritual weapon" },
            { "3rd level (3 slots)": "animate dead, dispel magic" },
            { "4th level (3 slots)": "divination, guardian of faith" },
            { "5th level (2 slots)": "contagion, insect plague" },
            { "6th level (1 slot)": "harm" }
        ]
    },
    {
        name: "Nalfeshnee",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 18,
        hp: 184,
        hit_dice: "16d10 + 96",
        speed: "20 ft., fly 30 ft.",
        stats: [21, 10, 22, 19, 12, 15],
        saves: [
            { constitution: 11 },
            { intelligence: 9 },
            { wisdom: 6 },
            { charisma: 7 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "truesight 120 ft., passive Perception 11",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "13",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The nalfeshnee has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The nalfeshnee uses Horror Nimbus if it can.  It then makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage.",
                attack_bonus: 10,
                damage_dice: "5d10",
                damage_bonus: 5
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage.",
                attack_bonus: 10,
                damage_dice: "3d6",
                damage_bonus: 5
            },
            {
                name: "Horror Nimbus (Recharge 5-6)",
                desc: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Teleport",
                desc: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Demon (1/Day)",
                desc: "The demon chooses what to summon and attempts a magical summoning.\nA nalfeshnee has a 50 percent chance of summoning 1d4 vrocks, 1d3 hezrous, 1d2 glabrezus, or one nalfeshnee.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Night Hag",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "",
        alignment: "neutral evil",
        ac: 17,
        hp: 112,
        hit_dice: "15d8 + 44",
        speed: "30 ft.",
        stats: [18, 15, 16, 16, 14, 16],
        skillsaves: [
            { deception: 7 },
            { insight: 6 },
            { perception: 6 },
            { stealth: 6 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "",
        condition_immunities: "charmed",
        senses: "darkvision 120 ft., passive Perception 16",
        languages: "Abyssal, Common, Infernal, Primordial",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Innate Spellcasting",
                desc: "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, magic missile\n2/day each: plane shift (self only), ray of enfeeblement, sleep",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The hag has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Night Hag Items",
                desc: "A night hag carries two very rare magic items that she must craft for herself If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.\nHeartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.\nSoul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, the hag catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag).",
                attack_bonus: 0
            },
            {
                name: "Hag Coven",
                desc: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
                attack_bonus: 0
            },
            {
                name: "Shared Spellcasting (Coven Only)",
                desc: "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:\n\n• 1st level (4 slots): identify, ray of sickness\n• 2nd level (3 slots): hold person, locate object\n• 3rd level (3 slots): bestow curse, counterspell, lightning bolt\n• 4th level (3 slots): phantasmal killer, polymorph\n• 5th level (2 slots): contact other plane, scrying\n• 6th level (1 slot): eye bite\n\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
                attack_bonus: 0
            },
            {
                name: "Hag Eye (Coven Only)",
                desc: "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws (Hag Form Only)",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Change Shape",
                desc: "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.",
                attack_bonus: 0
            },
            {
                name: "Etherealness",
                desc: "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession.",
                attack_bonus: 0
            },
            {
                name: "Nightmare Haunting (1/Day)",
                desc: "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Nightmare",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "",
        alignment: "neutral evil",
        ac: 13,
        hp: 68,
        hit_dice: "8d10 + 24",
        speed: "60 ft., fly 90 ft.",
        stats: [18, 15, 16, 10, 13, 15],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "understands Abyssal, Common, and Infernal but can't speak",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Confer Fire Resistance",
                desc: "The nightmare can grant resistance to fire damage to anyone riding it.",
                attack_bonus: 0
            },
            {
                name: "Illumination",
                desc: "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage.",
                attack_bonus: 6,
                damage_dice: "2d8 + 2d6",
                damage_bonus: 4
            },
            {
                name: "Ethereal Stride",
                desc: "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Noble",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 15,
        hp: 9,
        hit_dice: "2d8",
        speed: "30 ft.",
        stats: [11, 12, 11, 12, 14, 16],
        skillsaves: [{ deception: 5 }, { insight: 4 }, { persuasion: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "any two languages",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Rapier",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            }
        ],
        reactions: [
            {
                name: "Parry",
                desc: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ochre Jelly",
        source: "5e SRD",
        size: "Large",
        type: "ooze",
        subtype: "",
        alignment: "unaligned",
        ac: 8,
        hp: 45,
        hit_dice: "6d10 + 12",
        speed: "10 ft., climb 10 ft.",
        stats: [15, 6, 14, 2, 6, 1],
        damage_vulnerabilities: "",
        damage_resistances: "acid",
        damage_immunities: "lightning, slashing",
        condition_immunities:
            "blinded, charmed, deafened, exhaustion, frightened, prone",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 8",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Amorphous",
                desc: "The jelly can move through a space as narrow as 1 inch wide without squeezing.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Pseudopod",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage.",
                attack_bonus: 4,
                damage_dice: "2d6",
                damage_bonus: 2
            }
        ],
        reactions: [
            {
                name: "Split",
                desc: "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Octopus",
        source: "5e SRD",
        size: "Small",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 3,
        hit_dice: "1d6 + -1",
        speed: "5 ft., swim 30 ft.",
        stats: [4, 15, 11, 3, 10, 4],
        skillsaves: [{ perception: 2 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 12",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "While out of water, the octopus can hold its breath for 30 minutes.",
                attack_bonus: 0
            },
            {
                name: "Underwater Camouflage",
                desc: "The octopus has advantage on Dexterity (Stealth) checks made while underwater.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The octopus can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Tentacles",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
                attack_bonus: 4,
                damage_bonus: 1
            },
            {
                name: "Ink Cloud (Recharges after a Short or Long Rest)",
                desc: "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Ogre",
        source: "5e SRD",
        size: "Large",
        type: "giant",
        subtype: "",
        alignment: "chaotic evil",
        ac: 11,
        hp: 59,
        hit_dice: "7d10 + 20",
        speed: "40 ft.",
        stats: [19, 8, 16, 5, 7, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "Common, Giant",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Greatclub",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Javelin",
                desc: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Ogre Zombie",
        source: "5e SRD",
        size: "Large",
        type: "undead",
        subtype: "",
        alignment: "neutral evil",
        ac: 8,
        hp: 85,
        hit_dice: "9d10 + 35",
        speed: "30 ft.",
        stats: [19, 6, 18, 3, 6, 5],
        saves: [{ wisdom: 0 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "understands Common and Giant but can't speak",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Undead Fortitude",
                desc: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Morningstar",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Oni",
        source: "5e SRD",
        size: "Large",
        type: "giant",
        subtype: "",
        alignment: "lawful evil",
        ac: 16,
        hp: 110,
        hit_dice: "13d10 + 38",
        speed: "30 ft., fly 30 ft.",
        stats: [19, 11, 16, 14, 12, 15],
        saves: [
            { dexterity: 3 },
            { constitution: 6 },
            { wisdom: 4 },
            { charisma: 5 }
        ],
        skillsaves: [{ arcana: 5 }, { deception: 8 }, { perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Common, Giant",
        cr: "7",
        bestiary: true,
        traits: [
            {
                name: "Innate Spellcasting",
                desc: "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:\n\nAt will: darkness, invisibility\n1/day each: charm person, cone of cold, gaseous form, sleep",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The oni's weapon attacks are magical.",
                attack_bonus: 0
            },
            {
                name: "Regeneration",
                desc: "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The oni makes two attacks, either with its claws or its glaive.",
                attack_bonus: 0
            },
            {
                name: "Claw (Oni Form Only)",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Glaive",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form.",
                attack_bonus: 7,
                damage_dice: "2d10",
                damage_bonus: 4
            },
            {
                name: "Change Shape",
                desc: "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Orc",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "orc",
        alignment: "chaotic evil",
        ac: 13,
        hp: 15,
        hit_dice: "2d8 + 6",
        speed: "30 ft.",
        stats: [16, 12, 16, 7, 11, 10],
        skillsaves: [{ intimidation: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Common, Orc",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Aggressive",
                desc: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Greataxe",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d12",
                damage_bonus: 3
            },
            {
                name: "Javelin",
                desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Otyugh",
        source: "5e SRD",
        size: "Large",
        type: "aberration",
        subtype: "",
        alignment: "neutral",
        ac: 14,
        hp: 114,
        hit_dice: "12d10 + 48",
        speed: "30 ft.",
        stats: [16, 11, 19, 6, 13, 6],
        saves: [{ constitution: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Otyugh",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Limited Telepathy",
                desc: "The otyugh can magically transmit simple messages and images to any creature within 120 ft. of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The otyugh makes three attacks: one with its bite and two with its tentacles.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured.",
                attack_bonus: 6,
                damage_dice: "2d8",
                damage_bonus: 3
            },
            {
                name: "Tentacle",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target.",
                attack_bonus: 6,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Tentacle Slam",
                desc: "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Owl",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "5 ft., fly 60 ft.",
        stats: [3, 13, 8, 2, 12, 7],
        skillsaves: [{ perception: 3 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Flyby",
                desc: "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing and Sight",
                desc: "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                attack_bonus: 3,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Owlbear",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 59,
        hit_dice: "7d10 + 20",
        speed: "40 ft.",
        stats: [20, 12, 17, 3, 12, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight and Smell",
                desc: "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The owlbear makes two attacks: one with its beak and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.",
                attack_bonus: 7,
                damage_dice: "1d10",
                damage_bonus: 5
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Panther",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 13,
        hit_dice: "3d8 + -1",
        speed: "50 ft., climb 40 ft.",
        stats: [14, 15, 10, 3, 14, 7],
        skillsaves: [{ perception: 4 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The panther has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Pounce",
                desc: "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Pegasus",
        source: "5e SRD",
        size: "Large",
        type: "celestial",
        subtype: "",
        alignment: "chaotic good",
        ac: 12,
        hp: 59,
        hit_dice: "7d10 + 20",
        speed: "60 ft., fly 90 ft.",
        stats: [18, 15, 16, 10, 15, 13],
        saves: [{ dexterity: 4 }, { wisdom: 4 }, { charisma: 3 }],
        skillsaves: [{ perception: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 16",
        languages:
            "understands Celestial, Common, Elvish, and Sylvan but can't speak",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Phase Spider",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 32,
        hit_dice: "5d10 + 4",
        speed: "30 ft., climb 30 ft.",
        stats: [15, 15, 12, 6, 10, 6],
        skillsaves: [{ stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Ethereal Jaunt",
                desc: "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The spider ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
                attack_bonus: 4,
                damage_dice: "1d10",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Pit Fiend",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "devil",
        alignment: "lawful evil",
        ac: 19,
        hp: 300,
        hit_dice: "24d10 + 168",
        speed: "30 ft., fly 60 ft.",
        stats: [26, 14, 24, 22, 18, 24],
        saves: [{ dexterity: 8 }, { constitution: 13 }, { wisdom: 10 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "truesight 120 ft., passive Perception 14",
        languages: "Infernal, telepathy 120 ft.",
        cr: "20",
        bestiary: true,
        traits: [
            {
                name: "Fear Aura",
                desc: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The pit fiend has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The pit fiend's weapon attacks are magical.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The pit fiend's spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components:\nAt will: detect magic, fireball\n3/day each: hold monster, wall of fire",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 14,
                damage_dice: "4d6",
                damage_bonus: 8
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft. , one target. Hit: 17 (2d8 + 8) slashing damage.",
                attack_bonus: 14,
                damage_dice: "2d8",
                damage_bonus: 8
            },
            {
                name: "Mace",
                desc: "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage.",
                attack_bonus: 14,
                damage_dice: "2d6",
                damage_bonus: 8
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +14 to hit, reach 10ft., one target. Hit: 24 (3d1O + 8) bludgeoning damage.",
                attack_bonus: 14,
                damage_dice: "3d10",
                damage_bonus: 8
            }
        ]
    },
    {
        name: "Planetar",
        source: "5e SRD",
        size: "Large",
        type: "celestial",
        subtype: "",
        alignment: "lawful good",
        ac: 19,
        hp: 200,
        hit_dice: "16d10 + 112",
        speed: "40 ft., fly 120 ft.",
        stats: [24, 20, 24, 19, 22, 25],
        saves: [{ constitution: 12 }, { wisdom: 11 }, { charisma: 12 }],
        skillsaves: [{ perception: 11 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "",
        condition_immunities: "charmed, exhaustion, frightened",
        senses: "truesight 120 ft., passive Perception 21",
        languages: "all, telepathy 120 ft.",
        cr: "16",
        bestiary: true,
        traits: [
            {
                name: "Angelic Weapons",
                desc: "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack).",
                attack_bonus: 0
            },
            {
                name: "Divine Awareness",
                desc: "The planetar knows if it hears a lie.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n1/day each: commune, control weather, insect plague",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The planetar has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The planetar makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatsword",
                desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage.",
                attack_bonus: 12,
                damage_dice: "4d6 + 5d8",
                damage_bonus: 7
            },
            {
                name: "Healing Touch (4/Day)",
                desc: "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Plesiosaurus",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 68,
        hit_dice: "8d10 + 24",
        speed: "20 ft., swim 40 ft.",
        stats: [18, 15, 16, 2, 12, 5],
        skillsaves: [{ perception: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Hold Breath",
                desc: "The plesiosaurus can hold its breath for 1 hour.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "3d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Poisonous Snake",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 2,
        hit_dice: "1d4 + -1",
        speed: "30 ft., swim 30 ft.",
        stats: [2, 16, 11, 1, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., passive Perception 10",
        languages: "",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 5,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Polar Bear",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 42,
        hit_dice: "5d10 + 14",
        speed: "40 ft., swim 30 ft.",
        stats: [20, 10, 16, 2, 13, 7],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The bear has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The bear makes two attacks: one with its bite and one with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
                attack_bonus: 7,
                damage_dice: "1d8",
                damage_bonus: 5
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Pony",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "40 ft.",
        stats: [15, 10, 13, 2, 11, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
                attack_bonus: 4,
                damage_dice: "2d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Priest",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        hp: 27,
        hit_dice: "5d8 + 4",
        speed: "25 ft.",
        stats: [10, 10, 12, 13, 16, 13],
        skillsaves: [{ medicine: 7 }, { persuasion: 3 }, { religion: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "any two languages",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Divine Eminence",
                desc: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st.",
                attack_bonus: 0,
                damage_dice: "3d6"
            }
        ],
        actions: [
            {
                name: "Mace",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage.",
                attack_bonus: 2,
                damage_dice: "1d6"
            }
        ],
        spells: [
            "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:",
            { "Cantrips (at will)": "light, sacred flame, thaumaturgy" },
            { "1st level (4 slots)": "cure wounds, guiding bolt, sanctuary" },
            { "2nd level (3 slots)": "lesser restoration, spiritual weapon" },
            { "3rd level (2 slots)": "dispel magic, spirit guardians" }
        ]
    },
    {
        name: "Pseudodragon",
        source: "5e SRD",
        size: "Tiny",
        type: "dragon",
        subtype: "",
        alignment: "neutral good",
        ac: 13,
        hp: 7,
        hit_dice: "2d4 + 2",
        speed: "15 ft., fly 60 ft.",
        stats: [6, 15, 13, 10, 12, 10],
        skillsaves: [{ perception: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 13",
        languages: "understands Common and Draconic but can't speak",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Keen Senses",
                desc: "The pseudodragon has advantage on Wisdom (Perception) checks that rely on sight, hearing, or smell.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The pseudodragon has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Limited Telepathy",
                desc: "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 ft. of it that can understand a language.",
                attack_bonus: 0
            },
            {
                name: "Variant: Familiar",
                desc: "The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Sting",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Purple Worm",
        source: "5e SRD",
        size: "Gargantuan",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 18,
        hp: 247,
        hit_dice: "15d20 + 89",
        speed: "50 ft., burrow 30 ft.",
        stats: [28, 7, 22, 1, 8, 4],
        saves: [{ constitution: 11 }, { wisdom: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 30 ft., tremorsense 60 ft., passive Perception 9",
        languages: "",
        cr: "15",
        bestiary: true,
        traits: [
            {
                name: "Tunneler",
                desc: "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The worm makes two attacks: one with its bite and one with its stinger.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone.",
                attack_bonus: 9,
                damage_dice: "3d8",
                damage_bonus: 9
            },
            {
                name: "Tail Stinger",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 9,
                damage_dice: "3d6",
                damage_bonus: 9
            }
        ]
    },
    {
        name: "Quasit",
        source: "5e SRD",
        size: "Tiny",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 13,
        hp: 7,
        hit_dice: "3d4 + -1",
        speed: "40 ft.",
        stats: [5, 17, 10, 7, 10, 10],
        skillsaves: [{ stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold; fire; lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "Abyssal, Common",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form . Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed . It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The quasit has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Variant: Familiar",
                desc: "The quasit can serve another creature as a familiar, forming a telepathic bond with its willing master. While the two are bonded, the master can sense what the quasit senses as long as they are within 1 mile of each other. While the quasit is within 10 feet of its master, the master shares the quasit's Magic Resistance trait. At any time and for any reason, the quasit can end its service as a familiar, ending the telepathic bond.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claw (Bite in Beast Form)",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 3
            },
            {
                name: "Scare (1/day)",
                desc: "One creature of the quasit's choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.",
                attack_bonus: 0
            },
            {
                name: "Invisibility",
                desc: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Quipper",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "swim 40 ft.",
        stats: [2, 16, 9, 1, 7, 2],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Blood Frenzy",
                desc: "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The quipper can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack_bonus: 5,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Rakshasa",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "",
        alignment: "lawful evil",
        ac: 16,
        hp: 110,
        hit_dice: "13d8 + 51",
        speed: "40 ft.",
        stats: [14, 17, 18, 13, 16, 20],
        skillsaves: [{ deception: 10 }, { insight: 8 }],
        damage_vulnerabilities:
            "piercing from magic weapons wielded by good creatures",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "Common, Infernal",
        cr: "13",
        bestiary: true,
        traits: [
            {
                name: "Limited Magic Immunity",
                desc: "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:\n\nAt will: detect thoughts, disguise self, mage hand, minor illusion\n3/day each: charm person, detect magic, invisibility, major image, suggestion\n1/day each: dominate person, fly, plane shift, true seeing",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The rakshasa makes two claw attacks",
                attack_bonus: 0
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Rat",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "20 ft.",
        stats: [2, 11, 9, 2, 10, 4],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The rat has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack_bonus: 0,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Raven",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "10 ft., fly 50 ft.",
        stats: [2, 14, 8, 2, 12, 6],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Mimicry",
                desc: "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Red Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 17,
        hp: 75,
        hit_dice: "10d8 + 30",
        speed: "30 ft., climb 30 ft., fly 60 ft.",
        stats: [19, 10, 17, 12, 11, 15],
        saves: [
            { dexterity: 2 },
            { constitution: 5 },
            { wisdom: 2 },
            { charisma: 4 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "4",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage.",
                attack_bonus: 6,
                damage_dice: "1d10 + 1d6",
                damage_bonus: 4
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "7d6"
            }
        ]
    },
    {
        name: "Reef Shark",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "4d8 + 4",
        speed: "swim 40 ft.",
        stats: [14, 13, 13, 1, 10, 4],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 30 ft., passive Perception 12",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Pack Tactics",
                desc: "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The shark can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Remorhaz",
        source: "5e SRD",
        size: "Huge",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 17,
        hp: 195,
        hit_dice: "17d12 + 84",
        speed: "30 ft., burrow 20 ft.",
        stats: [24, 13, 21, 4, 10, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold, fire",
        condition_immunities: "",
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 10",
        languages: "",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Heated Body",
                desc: "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage.",
                attack_bonus: 0,
                damage_dice: "3d6"
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target.",
                attack_bonus: 11,
                damage_dice: "6d10 + 3d6",
                damage_bonus: 7
            },
            {
                name: "Swallow",
                desc: "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet oft he remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Rhinoceros",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 45,
        hit_dice: "6d10 + 12",
        speed: "40 ft.",
        stats: [21, 8, 15, 2, 12, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d8"
            }
        ],
        actions: [
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Riding Horse",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 13,
        hit_dice: "2d10 + 2",
        speed: "60 ft.",
        stats: [16, 10, 12, 2, 11, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
                attack_bonus: 5,
                damage_dice: "2d4",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Roc",
        source: "5e SRD",
        size: "Gargantuan",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 15,
        hp: 248,
        hit_dice: "16d20 + 80",
        speed: "20 ft., fly 120 ft.",
        stats: [28, 10, 20, 3, 10, 9],
        saves: [
            { dexterity: 4 },
            { constitution: 9 },
            { wisdom: 4 },
            { charisma: 3 }
        ],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "11",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight",
                desc: "The roc has advantage on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The roc makes two attacks: one with its beak and one with its talons.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage.",
                attack_bonus: 13,
                damage_dice: "4d8",
                damage_bonus: 9
            },
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target.",
                attack_bonus: 13,
                damage_dice: "4d6",
                damage_bonus: 9
            }
        ]
    },
    {
        name: "Roper",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral evil",
        ac: 20,
        hp: 93,
        hit_dice: "11d10 + 32",
        speed: "10 ft., climb 10 ft.",
        stats: [18, 8, 17, 7, 16, 6],
        skillsaves: [{ perception: 6 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 16",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite.",
                attack_bonus: 0
            },
            {
                name: "Grasping Tendrils",
                desc: "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "4d8",
                damage_bonus: 4
            },
            {
                name: "Tendril",
                desc: "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target.",
                attack_bonus: 7
            },
            {
                name: "Reel",
                desc: "The roper pulls each creature grappled by it up to 25 ft. straight toward it.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Rug of Smothering",
        source: "5e SRD",
        size: "Large",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 33,
        hit_dice: "6d10",
        speed: "10 ft.",
        stats: [17, 14, 10, 1, 3, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison, psychic",
        condition_immunities:
            "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 6",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Antimagic Susceptibility",
                desc: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
                attack_bonus: 0
            },
            {
                name: "Damage Transfer",
                desc: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half.",
                attack_bonus: 0
            },
            {
                name: "False Appearance",
                desc: "While the rug remains motionless, it is indistinguishable from a normal rug.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Smother",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.",
                attack_bonus: 0,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Rust Monster",
        source: "5e SRD",
        size: "Medium",
        type: "monstrosity",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 27,
        hit_dice: "5d8 + 4",
        speed: "40 ft.",
        stats: [13, 12, 13, 2, 13, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Iron Scent",
                desc: "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it.",
                attack_bonus: 0
            },
            {
                name: "Rust Metal",
                desc: "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative -1 penalty to damage rolls. If its penalty drops to -5, the weapon is destroyed. Non magical ammunition made of metal that hits the rust monster is destroyed after dealing damage.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d8",
                damage_bonus: 1
            },
            {
                name: "Antennae",
                desc: "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.\nIf the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Saber-Toothed Tiger",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 52,
        hit_dice: "7d10 + 13",
        speed: "40 ft.",
        stats: [18, 14, 15, 3, 12, 8],
        skillsaves: [{ perception: 3 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Pounce",
                desc: "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d10",
                damage_bonus: 5
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 5
            }
        ]
    },
    {
        name: "Sahuagin",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "sahuagin",
        alignment: "lawful evil",
        ac: 12,
        hp: 22,
        hit_dice: "4d8 + 4",
        speed: "30 ft., swim 40 ft.",
        stats: [13, 11, 12, 12, 13, 9],
        skillsaves: [{ perception: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 15",
        languages: "Sahuagin",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Blood Frenzy",
                desc: "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
                attack_bonus: 0
            },
            {
                name: "Limited Amphibiousness",
                desc: "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating.",
                attack_bonus: 0
            },
            {
                name: "Shark Telepathy",
                desc: "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage.",
                attack_bonus: 3,
                damage_dice: "1d4",
                damage_bonus: 1
            },
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Salamander",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "neutral evil",
        ac: 15,
        hp: 90,
        hit_dice: "12d10 + 24",
        speed: "30 ft.",
        stats: [18, 14, 15, 11, 10, 12],
        damage_vulnerabilities: "cold",
        damage_resistances:
            "bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Ignan",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Heated Body",
                desc: "A creature that touches the salamander or hits it with a melee attack while within 5 ft. of it takes 7 (2d6) fire damage.",
                attack_bonus: 0,
                damage_dice: "2d6"
            },
            {
                name: "Heated Weapons",
                desc: "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack).",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The salamander makes two attacks: one with its spear and one with its tail.",
                attack_bonus: 0
            },
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.",
                attack_bonus: 7,
                damage_dice: "2d6 + 2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Satyr",
        source: "5e SRD",
        size: "Medium",
        type: "fey",
        subtype: "",
        alignment: "chaotic neutral",
        ac: 14,
        hp: 31,
        hit_dice: "7d8 + -1",
        speed: "40 ft.",
        stats: [12, 16, 11, 12, 10, 14],
        skillsaves: [{ perception: 2 }, { performance: 6 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "Common, Elvish, Sylvan",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The satyr has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Ram",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage.",
                attack_bonus: 3,
                damage_dice: "2d4",
                damage_bonus: 1
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1 d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Shortbow",
                desc: "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Variant: Panpipes",
                desc: "Gentle Lullaby. The creature falls asleep and is unconscious for 1 minute. The effect ends if the creature takes damage or if someone takes an action to shake the creature awake.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Scorpion",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "10 ft.",
        stats: [2, 11, 8, 1, 8, 2],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "blindsight 10 ft., passive Perception 9",
        languages: "",
        cr: "0",
        bestiary: true,
        actions: [
            {
                name: "Sting",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 2,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Scout",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 13,
        hp: 16,
        hit_dice: "3d8 + 2",
        speed: "30 ft.",
        stats: [11, 14, 12, 11, 13, 11],
        skillsaves: [
            { nature: 4 },
            { perception: 5 },
            { stealth: 6 },
            { survival: 5 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 15",
        languages: "any one language (usually Common)",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Sight",
                desc: "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The scout makes two melee attacks or two ranged attacks.",
                attack_bonus: 0
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +4 to hit, ranged 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Sea Hag",
        source: "5e SRD",
        size: "Medium",
        type: "fey",
        subtype: "",
        alignment: "chaotic evil",
        ac: 14,
        hp: 52,
        hit_dice: "7d8 + 20",
        speed: "30 ft., swim 40 ft.",
        stats: [16, 13, 16, 12, 12, 13],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 11",
        languages: "Aquan, Common, Giant",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The hag can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Horrific Appearance",
                desc: "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.\nUnless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag.",
                attack_bonus: 0
            },
            {
                name: "Hag Coven",
                desc: "When hags must work together, they form covens, in spite of their selfish natures. A coven is made up of hags of any type, all of whom are equals within the group. However, each of the hags continues to desire more personal power.\nA coven consists of three hags so that any arguments between two hags can be settled by the third. If more than three hags ever come together, as might happen if two covens come into conflict, the result is usually chaos.",
                attack_bonus: 0
            },
            {
                name: "Shared Spellcasting (Coven Only)",
                desc: "While all three members of a hag coven are within 30 feet of one another, they can each cast the following spells from the wizard's spell list but must share the spell slots among themselves:\n\n• 1st level (4 slots): identify, ray of sickness\n• 2nd level (3 slots): hold person, locate object\n• 3rd level (3 slots): bestow curse, counterspell, lightning bolt\n• 4th level (3 slots): phantasmal killer, polymorph\n• 5th level (2 slots): contact other plane, scrying\n• 6th level (1 slot): eye bite\n\nFor casting these spells, each hag is a 12th-level spellcaster that uses Intelligence as her spellcasting ability. The spell save DC is 12+the hag's Intelligence modifier, and the spell attack bonus is 4+the hag's Intelligence modifier.",
                attack_bonus: 0
            },
            {
                name: "Hag Eye (Coven Only)",
                desc: "A hag coven can craft a magic item called a hag eye, which is made from a real eye coated in varnish and often fitted to a pendant or other wearable item. The hag eye is usually entrusted to a minion for safekeeping and transport. A hag in the coven can take an action to see what the hag eye sees if the hag eye is on the same plane of existence. A hag eye has AC 10, 1 hit point, and darkvision with a radius of 60 feet. If it is destroyed, each coven member takes 3d10 psychic damage and is blinded for 24 hours.\nA hag coven can have only one hag eye at a time, and creating a new one requires all three members of the coven to perform a ritual. The ritual takes 1 hour, and the hags can't perform it while blinded. During the ritual, if the hags take any action other than performing the ritual, they must start over.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Death Glare",
                desc: "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points.",
                attack_bonus: 0
            },
            {
                name: "Illusory Appearance",
                desc: "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Sea Horse",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "swim 20 ft.",
        stats: [1, 12, 8, 1, 10, 2],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Water Breathing",
                desc: "The sea horse can breathe only underwater.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Shadow",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "chaotic evil",
        ac: 12,
        hp: 16,
        hit_dice: "3d8 + 2",
        speed: "40 ft.",
        stats: [6, 14, 13, 6, 10, 8],
        skillsaves: [{ stealth: 4 }],
        damage_vulnerabilities: "radiant",
        damage_resistances:
            "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "necrotic, poison",
        condition_immunities:
            "exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Amorphous",
                desc: "The shadow can move through a space as narrow as 1 inch wide without squeezing.",
                attack_bonus: 0
            },
            {
                name: "Shadow Stealth",
                desc: "While in dim light or darkness, the shadow can take the Hide action as a bonus action. Its stealth bonus is also improved to +6.",
                attack_bonus: 0
            },
            {
                name: "Sunlight Weakness",
                desc: "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Strength Drain",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later.",
                attack_bonus: 4,
                damage_dice: "2d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Shambling Mound",
        source: "5e SRD",
        size: "Large",
        type: "plant",
        subtype: "",
        alignment: "unaligned",
        ac: 15,
        hp: 136,
        hit_dice: "16d10 + 48",
        speed: "20 ft., swim 20 ft.",
        stats: [18, 8, 16, 5, 10, 5],
        skillsaves: [{ stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "cold, fire",
        damage_immunities: "lightning",
        condition_immunities: "blinded, deafened, exhaustion",
        senses: "blindsight 60 ft. (blind beyond this radius), passive Perception 10",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Lightning Absorption",
                desc: "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Engulf",
                desc: "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Shield Guardian",
        source: "5e SRD",
        size: "Large",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 17,
        hp: 142,
        hit_dice: "15d10 + 59",
        speed: "30 ft.",
        stats: [18, 8, 18, 7, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, poisoned",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 10",
        languages: "understands commands given in any language but can't speak",
        cr: "7",
        bestiary: true,
        traits: [
            {
                name: "Bound",
                desc: "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian.",
                attack_bonus: 0
            },
            {
                name: "Regeneration",
                desc: "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit. point.",
                attack_bonus: 0
            },
            {
                name: "Spell Storing",
                desc: "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The guardian makes two fist attacks.",
                attack_bonus: 0
            },
            {
                name: "Fist",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ],
        reactions: [
            {
                name: "Shield",
                desc: "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Shrieker",
        source: "5e SRD",
        size: "Medium",
        type: "plant",
        subtype: "",
        alignment: "unaligned",
        ac: 5,
        hp: 13,
        hit_dice: "3d8 + -1",
        speed: "0 ft.",
        stats: [1, 1, 10, 1, 3, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "blinded, deafened, frightened",
        senses: "blindsight 30 ft. (blind beyond this radius), passive Perception 6",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Shriek",
                desc: "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Silver Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 17,
        hp: 45,
        hit_dice: "6d8 + 18",
        speed: "30 ft., fly 60 ft.",
        stats: [19, 10, 17, 12, 11, 15],
        saves: [
            { dexterity: 2 },
            { constitution: 5 },
            { wisdom: 2 },
            { charisma: 4 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage.",
                attack_bonus: 6,
                damage_dice: "1d10",
                damage_bonus: 4
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "4d8"
            }
        ]
    },
    {
        name: "Skeleton",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "lawful evil",
        ac: 13,
        hp: 13,
        hit_dice: "2d8 + 4",
        speed: "30 ft.",
        stats: [10, 14, 15, 6, 8, 5],
        damage_vulnerabilities: "bludgeoning",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "understands all languages it spoke in life but can't speak",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Shortbow",
                desc: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Solar",
        source: "5e SRD",
        size: "Large",
        type: "celestial",
        subtype: "",
        alignment: "lawful good",
        ac: 21,
        hp: 243,
        hit_dice: "18d10 + 144",
        speed: "50 ft., fly 150 ft.",
        stats: [26, 22, 26, 25, 25, 30],
        saves: [{ intelligence: 14 }, { wisdom: 14 }, { charisma: 17 }],
        skillsaves: [{ perception: 14 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "necrotic, poison",
        condition_immunities: "charmed, exhaustion, frightened, poisoned",
        senses: "truesight 120 ft., passive Perception 24",
        languages: "all, telepathy 120 ft.",
        cr: "21",
        bestiary: true,
        traits: [
            {
                name: "Angelic Weapons",
                desc: "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack).",
                attack_bonus: 0
            },
            {
                name: "Divine Awareness",
                desc: "The solar knows if it hears a lie.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The solar's spell casting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:\nAt will: detect evil and good, invisibility (self only)\n3/day each: blade barrier, dispel evil and good, resurrection\n1/day each: commune, control weather",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The solar has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The solar makes two greatsword attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatsword",
                desc: "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage.",
                attack_bonus: 15,
                damage_dice: "4d6 + 6d8",
                damage_bonus: 8
            },
            {
                name: "Slaying Longbow",
                desc: "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die.",
                attack_bonus: 13,
                damage_dice: "2d8 + 6d8",
                damage_bonus: 6
            },
            {
                name: "Flying Sword",
                desc: "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies.",
                attack_bonus: 0
            },
            {
                name: "Healing Touch (4/Day)",
                desc: "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Teleport",
                desc: "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 ft. to an unoccupied space it can see.",
                attack_bonus: 0
            },
            {
                name: "Searing Burst (Costs 2 Actions)",
                desc: "The solar emits magical, divine energy. Each creature of its choice in a 10 -foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0
            },
            {
                name: "Blinding Gaze (Costs 3 Actions)",
                desc: "The solar targets one creature it can see within 30 ft. of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Specter",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "chaotic evil",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "0 ft., fly 50 ft. (hover)",
        stats: [1, 14, 11, 10, 10, 11],
        damage_vulnerabilities: "",
        damage_resistances:
            "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "necrotic, poison",
        condition_immunities:
            "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "understands all languages it knew in life but can't speak",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Incorporeal Movement",
                desc: "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
                attack_bonus: 0
            },
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Life Drain",
                desc: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                attack_bonus: 4,
                damage_dice: "3d6"
            }
        ]
    },
    {
        name: "Spider",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "20 ft., climb 20 ft.",
        stats: [2, 14, 8, 1, 10, 2],
        skillsaves: [{ stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 30 ft., passive Perception 12",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Spider Climb",
                desc: "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Web Sense",
                desc: "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The spider ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
                attack_bonus: 4,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Spirit Naga",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "chaotic evil",
        ac: 15,
        hp: 75,
        hit_dice: "10d10 + 20",
        speed: "40 ft.",
        stats: [18, 17, 14, 16, 15, 16],
        saves: [
            { dexterity: 6 },
            { constitution: 5 },
            { wisdom: 5 },
            { charisma: 6 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "charmed, poisoned",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Abyssal, Common",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Rejuvenation",
                desc: "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 7,
                damage_dice: "1d6",
                damage_bonus: 4
            }
        ],
        spells: [
            "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:",
            { "Cantrips (at will)": "mage hand, minor illusion, ray of frost" },
            { "1st level (4 slots)": "charm person, detect magic, sleep" },
            { "2nd level (3 slots)": "detect thoughts, hold person" },
            { "3rd level (3 slots)": "lightning bolt, water breathing" },
            { "4th level (3 slots)": "blight, dimension door" },
            { "5th level (2 slots)": "dominate person" }
        ]
    },
    {
        name: "Sprite",
        source: "5e SRD",
        size: "Tiny",
        type: "fey",
        subtype: "",
        alignment: "neutral good",
        ac: 15,
        hp: 2,
        hit_dice: "1d4 + -1",
        speed: "10 ft., fly 40 ft.",
        stats: [3, 18, 10, 14, 13, 11],
        skillsaves: [{ perception: 3 }, { stealth: 8 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "Common, Elvish, Sylvan",
        cr: "1/4",
        bestiary: true,
        actions: [
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
                attack_bonus: 2,
                damage_bonus: 1
            },
            {
                name: "Shortbow",
                desc: "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake.",
                attack_bonus: 6,
                damage_bonus: 1
            },
            {
                name: "Heart Sight",
                desc: "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw.",
                attack_bonus: 0
            },
            {
                name: "Invisibility",
                desc: "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Spy",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 27,
        hit_dice: "6d8",
        speed: "30 ft.",
        stats: [10, 15, 10, 12, 14, 16],
        skillsaves: [
            { deception: 5 },
            { insight: 4 },
            { investigation: 5 },
            { perception: 6 },
            { persuasion: 5 },
            { stealth: 4 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 16",
        languages: "any two languages",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Cunning Action",
                desc: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action.",
                attack_bonus: 0
            },
            {
                name: "Sneak Attack (1/Turn)",
                desc: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 ft. of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll.",
                attack_bonus: 0,
                damage_dice: "2d6"
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The spy makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Hand Crossbow",
                desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Steam Mephit",
        source: "5e SRD",
        size: "Small",
        type: "elemental",
        subtype: "",
        alignment: "neutral evil",
        ac: 10,
        hp: 21,
        hit_dice: "6d6",
        speed: "30 ft., fly 30 ft.",
        stats: [5, 11, 10, 11, 10, 12],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire, poison",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Aquan, Ignan",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Death Burst",
                desc: "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 ft. of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage.",
                attack_bonus: 0,
                damage_dice: "1d8"
            },
            {
                name: "Innate Spellcasting (1/Day)",
                desc: "The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage.",
                attack_bonus: 2,
                damage_dice: "2d4"
            },
            {
                name: "Steam Breath (Recharge 6)",
                desc: "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Mephits (1/Day)",
                desc: "The mephit has a 25 percent chance of summoning 1d4 mephits of its kind. A summoned mephit appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other mephits. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Stirge",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 2,
        hit_dice: "1d4 + -1",
        speed: "10 ft., fly 40 ft.",
        stats: [4, 16, 11, 2, 8, 6],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "",
        cr: "1/8",
        bestiary: true,
        actions: [
            {
                name: "Blood Drain",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
                attack_bonus: 5,
                damage_dice: "1d4",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Stone Giant",
        source: "5e SRD",
        size: "Huge",
        type: "giant",
        subtype: "",
        alignment: "neutral",
        ac: 17,
        hp: 126,
        hit_dice: "11d12 + 54",
        speed: "40 ft.",
        stats: [23, 15, 20, 10, 12, 9],
        saves: [{ dexterity: 5 }, { constitution: 8 }, { wisdom: 4 }],
        skillsaves: [{ athletics: 12 }, { perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Giant",
        cr: "7",
        bestiary: true,
        traits: [
            {
                name: "Stone Camouflage",
                desc: "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The giant makes two greatclub attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatclub",
                desc: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
                attack_bonus: 9,
                damage_dice: "3d8",
                damage_bonus: 6
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone.",
                attack_bonus: 9,
                damage_dice: "4d10",
                damage_bonus: 6
            }
        ],
        reactions: [
            {
                name: "Rock Catching",
                desc: "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Stone Golem",
        source: "5e SRD",
        size: "Large",
        type: "construct",
        subtype: "",
        alignment: "unaligned",
        ac: 17,
        hp: 178,
        hit_dice: "17d10 + 84",
        speed: "30 ft.",
        stats: [22, 9, 20, 3, 11, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "poison, psychic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine",
        condition_immunities:
            "charmed, exhaustion, frightened, paralyzed, petrified, poisoned",
        senses: "darkvision 120 ft., passive Perception 10",
        languages: "understands the languages of its creator but can't speak",
        cr: "10",
        bestiary: true,
        traits: [
            {
                name: "Immutable Form",
                desc: "The golem is immune to any spell or effect that would alter its form.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The golem has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The golem's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The golem makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage.",
                attack_bonus: 10,
                damage_dice: "3d8",
                damage_bonus: 6
            },
            {
                name: "Slow (Recharge 5-6)",
                desc: "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Storm Giant",
        source: "5e SRD",
        size: "Huge",
        type: "giant",
        subtype: "",
        alignment: "chaotic good",
        ac: 16,
        hp: 230,
        hit_dice: "20d12 + 100",
        speed: "50 ft., swim 50 ft.",
        stats: [29, 14, 20, 16, 18, 18],
        saves: [
            { strength: 14 },
            { constitution: 10 },
            { wisdom: 9 },
            { charisma: 9 }
        ],
        skillsaves: [
            { arcana: 8 },
            { athletics: 14 },
            { history: 8 },
            { perception: 9 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "cold",
        damage_immunities: "lightning, thunder",
        condition_immunities: "",
        senses: "passive Perception 19",
        languages: "Common, Giant",
        cr: "13",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The giant can breathe air and water.",
                attack_bonus: 0
            },
            {
                name: "Innate Spellcasting",
                desc: "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, feather fall, levitate, light\n3/day each: control weather, water breathing",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The giant makes two greatsword attacks.",
                attack_bonus: 0
            },
            {
                name: "Greatsword",
                desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage.",
                attack_bonus: 14,
                damage_dice: "6d6",
                damage_bonus: 9
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage.",
                attack_bonus: 14,
                damage_dice: "4d12",
                damage_bonus: 9
            },
            {
                name: "Lightning Strike (Recharge 5-6)",
                desc: "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d8"
            }
        ]
    },
    {
        name: "Succubus/Incubus",
        source: "5e SRD",
        size: "Medium",
        type: "fiend",
        subtype: "shapechanger",
        alignment: "neutral evil",
        ac: 15,
        hp: 66,
        hit_dice: "12d8 + 12",
        speed: "30 ft., fly 60 ft.",
        stats: [8, 17, 13, 15, 12, 20],
        skillsaves: [
            { deception: 9 },
            { insight: 5 },
            { perception: 5 },
            { persuasion: 9 },
            { stealth: 7 }
        ],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire, lightning, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "Abyssal, Common, Infernal, telepathy 60 ft.",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Telepathic Bond",
                desc: "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence.",
                attack_bonus: 0
            },
            {
                name: "Shapechanger",
                desc: "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Claw (Fiend Form Only)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Charm",
                desc: "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends.",
                attack_bonus: 0
            },
            {
                name: "Draining Kiss",
                desc: "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                attack_bonus: 0,
                damage_dice: "5d10",
                damage_bonus: 5
            },
            {
                name: "Etherealness",
                desc: "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Swarm of Bats",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "0 ft., fly 30 ft.",
        stats: [5, 15, 10, 2, 12, 4],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 60 ft., passive Perception 11",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Echolocation",
                desc: "The swarm can't use its blindsight while deafened.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing",
                desc: "The swarm has advantage on Wisdom (Perception) checks that rely on hearing.",
                attack_bonus: 0
            },
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 4,
                damage_dice: "2d4"
            }
        ]
    },
    {
        name: "Swarm of Beetles",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "20 ft., burrow 5 ft., climb 20 ft.",
        stats: [3, 13, 10, 1, 7, 1],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 10 ft., passive Perception 8",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 3,
                damage_dice: "4d4"
            }
        ]
    },
    {
        name: "Swarm of Centipedes",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "20 ft., climb 20 ft.",
        stats: [3, 13, 10, 1, 7, 1],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 10 ft., passive Perception 8",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.\nA creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way.",
                attack_bonus: 3,
                damage_dice: "4d4"
            }
        ]
    },
    {
        name: "Swarm of Insects",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "20 ft., climb 20 ft.",
        stats: [3, 13, 10, 1, 7, 1],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 10 ft., passive Perception 8",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 3,
                damage_dice: "4d4"
            }
        ]
    },
    {
        name: "Swarm of Poisonous Snakes",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 14,
        hp: 36,
        hit_dice: "8d8",
        speed: "30 ft., swim 30 ft.",
        stats: [8, 18, 11, 1, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 10 ft., passive Perception 10",
        languages: "",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 6,
                damage_dice: "2d6"
            }
        ]
    },
    {
        name: "Swarm of Quippers",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 28,
        hit_dice: "8d8 + -8",
        speed: "0 ft., swim 40 ft.",
        stats: [13, 16, 9, 1, 7, 2],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Blood Frenzy",
                desc: "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points.",
                attack_bonus: 0
            },
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            },
            {
                name: "Water Breathing",
                desc: "The swarm can breathe only underwater.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 5,
                damage_dice: "4d6"
            }
        ]
    },
    {
        name: "Swarm of Rats",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 24,
        hit_dice: "7d8 + -8",
        speed: "30 ft.",
        stats: [9, 11, 9, 2, 10, 3],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "darkvision 30 ft., passive Perception 10",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The swarm has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 2,
                damage_dice: "2d6"
            }
        ]
    },
    {
        name: "Swarm of Ravens",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 24,
        hit_dice: "7d8 + -8",
        speed: "10 ft., fly 50 ft.",
        stats: [6, 14, 8, 3, 12, 6],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "passive Perception 15",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Beaks",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 4,
                damage_dice: "2d6"
            }
        ]
    },
    {
        name: "Swarm of Spiders",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "20 ft., climb 20 ft.",
        stats: [3, 13, 10, 1, 7, 1],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 10 ft., passive Perception 8",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Web Sense",
                desc: "While in contact with a web, the swarm knows the exact location of any other creature in contact with the same web.",
                attack_bonus: 0
            },
            {
                name: "Web Walker",
                desc: "The swarm ignores movement restrictions caused by webbing.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 3,
                damage_dice: "4d4"
            }
        ]
    },
    {
        name: "Swarm of Wasps",
        source: "5e SRD",
        size: "Medium",
        type: "swarm of Tiny beasts",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 22,
        hit_dice: "5d8 + -1",
        speed: "5 ft., fly 30 ft.",
        stats: [3, 13, 10, 1, 7, 1],
        damage_vulnerabilities: "",
        damage_resistances: "bludgeoning, piercing, slashing",
        damage_immunities: "",
        condition_immunities:
            "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
        senses: "blindsight 10 ft., passive Perception 8",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Swarm",
                desc: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bites",
                desc: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
                attack_bonus: 3,
                damage_dice: "4d4"
            }
        ]
    },
    {
        name: "Tarrasque",
        source: "5e SRD",
        size: "Gargantuan",
        type: "monstrosity",
        subtype: "titan",
        alignment: "unaligned",
        ac: 25,
        hp: 676,
        hit_dice: "33d20 + 329",
        speed: "40 ft.",
        stats: [30, 11, 30, 3, 11, 11],
        saves: [{ intelligence: 5 }, { wisdom: 9 }, { charisma: 9 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "fire, poison; bludgeoning, piercing, and slashing from nonmagical weapons",
        condition_immunities: "charmed, frightened, paralyzed, poisoned",
        senses: "blindsight 120 ft., passive Perception 10",
        languages: "",
        cr: "30",
        bestiary: true,
        traits: [
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the tarrasque fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The tarrasque has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Reflective Carapace",
                desc: "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target.",
                attack_bonus: 0
            },
            {
                name: "Siege Monster",
                desc: "The tarrasque deals double damage to objects and structures.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tai l. It can use its Swallow instead of its bite.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target.",
                attack_bonus: 19,
                damage_dice: "4d12",
                damage_bonus: 10
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage.",
                attack_bonus: 19,
                damage_dice: "4d8",
                damage_bonus: 10
            },
            {
                name: "Horns",
                desc: "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage.",
                attack_bonus: 19,
                damage_dice: "4d10",
                damage_bonus: 10
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone.",
                attack_bonus: 19,
                damage_dice: "4d6",
                damage_bonus: 10
            },
            {
                name: "Frightful Presence",
                desc: "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours.",
                attack_bonus: 0
            },
            {
                name: "Swallow",
                desc: "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Attack",
                desc: "The tarrasque makes one claw attack or tail attack.",
                attack_bonus: 0
            },
            {
                name: "Move",
                desc: "The tarrasque moves up to half its speed.",
                attack_bonus: 0
            },
            {
                name: "Chomp (Costs 2 Actions)",
                desc: "The tarrasque makes one bite attack or uses its Swallow.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Thug",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any non-good alignment",
        ac: 11,
        hp: 32,
        hit_dice: "5d8 + 9",
        speed: "30 ft.",
        stats: [15, 11, 14, 10, 10, 11],
        skillsaves: [{ intimidation: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language (usually Common)",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Pack Tactics",
                desc: "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The thug makes two melee attacks.",
                attack_bonus: 0
            },
            {
                name: "Mace",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Heavy Crossbow",
                desc: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage.",
                attack_bonus: 2,
                damage_dice: "1d10"
            }
        ]
    },
    {
        name: "Tiger",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 12,
        hp: 37,
        hit_dice: "5d10 + 9",
        speed: "40 ft.",
        stats: [17, 15, 14, 3, 12, 8],
        skillsaves: [{ perception: 3 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "",
        cr: "1",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The tiger has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Pounce",
                desc: "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d10",
                damage_bonus: 3
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Treant",
        source: "5e SRD",
        size: "Huge",
        type: "plant",
        subtype: "",
        alignment: "chaotic good",
        ac: 16,
        hp: 138,
        hit_dice: "12d12 + 60",
        speed: "30 ft.",
        stats: [23, 8, 21, 12, 16, 12],
        damage_vulnerabilities: "fire",
        damage_resistances: "bludgeoning, piercing",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "Common, Druidic, Elvish, Sylvan",
        cr: "9",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the treant remains motionless, it is indistinguishable from a normal tree.",
                attack_bonus: 0
            },
            {
                name: "Siege Monster",
                desc: "The treant deals double damage to objects and structures.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The treant makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage.",
                attack_bonus: 10,
                damage_dice: "3d6",
                damage_bonus: 6
            },
            {
                name: "Rock",
                desc: "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage.",
                attack_bonus: 10,
                damage_dice: "4d10",
                damage_bonus: 6
            },
            {
                name: "Animate Trees (1/Day)",
                desc: "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Tribal Warrior",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 12,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "30 ft.",
        stats: [13, 11, 12, 8, 11, 8],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "any one language",
        cr: "1/8",
        bestiary: true,
        traits: [
            {
                name: "Pack Tactics",
                desc: "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Spear",
                desc: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Triceratops",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 95,
        hit_dice: "10d12 + 30",
        speed: "50 ft.",
        stats: [22, 9, 17, 2, 11, 5],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 10",
        languages: "",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Trampling Charge",
                desc: "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Gore",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.",
                attack_bonus: 9,
                damage_dice: "4d8",
                damage_bonus: 6
            },
            {
                name: "Stomp",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage",
                attack_bonus: 9,
                damage_dice: "3d10",
                damage_bonus: 6
            }
        ]
    },
    {
        name: "Troll",
        source: "5e SRD",
        size: "Large",
        type: "giant",
        subtype: "",
        alignment: "chaotic evil",
        ac: 15,
        hp: 84,
        hit_dice: "8d10 + 40",
        speed: "30 ft.",
        stats: [18, 13, 20, 7, 9, 7],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "Giant",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Keen Smell",
                desc: "The troll has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            },
            {
                name: "Regeneration",
                desc: "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate.",
                attack_bonus: 0
            },
            {
                name: "Variant: Loathsome Limbs",
                desc: "Whenever the troll takes at least 15 slashing damage at one time, roll a d20 to determine what else happens to it:\n1-10: Nothing else happens.\n11-14: One leg is severed from the troll if it has any legs left.\n15- 18: One arm is severed from the troll if it has any arms left.\n19-20: The troll is decapitated, but the troll dies only if it can't regenerate. If it dies, so does the severed head.\nIf the troll finishes a short or long rest without reattaching a severed limb or head, the part regrows. At that point, the severed part dies. Until then, a severed part acts on the troll's initiative and has its own action and movement. A severed part has AC 13, 10 hit points, and the troll's Regeneration trait.\nA severed leg is unable to attack and has a speed of 5 feet.\nA severed arm has a speed of 5 feet and can make one claw attack on its turn, with disadvantage on the attack roll unless the troll can see the arm and its target. Each time the troll loses an arm, it loses a claw attack.\nIf its head is severed, the troll loses its bite attack and its body is blinded unless the head can see it. The severed head has a speed of 0 feet and the troll's Keen Smell trait. It can make a bite attack but only against a target in its space.\nThe troll's speed is halved if it's missing a leg. If it loses both legs, it falls prone. If it has both arms, it can crawl. With only one arm, it can still crawl, but its speed is halved. With no arms or legs, its speed is 0, and it can't benefit from bonuses to speed.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The troll makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "1d6",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Tyrannosaurus Rex",
        source: "5e SRD",
        size: "Huge",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 136,
        hit_dice: "13d12 + 51",
        speed: "50 ft.",
        stats: [25, 10, 19, 2, 12, 9],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "",
        cr: "8",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.",
                attack_bonus: 10,
                damage_dice: "4d12",
                damage_bonus: 7
            },
            {
                name: "Tail",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
                attack_bonus: 10,
                damage_dice: "3d8",
                damage_bonus: 7
            }
        ]
    },
    {
        name: "Unicorn",
        source: "5e SRD",
        size: "Large",
        type: "celestial",
        subtype: "",
        alignment: "lawful good",
        ac: 12,
        hp: 67,
        hit_dice: "9d10 + 17",
        speed: "50 ft.",
        stats: [18, 14, 15, 11, 17, 16],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "charmed, paralyzed, poisoned",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "Celestial, Elvish, Sylvan, telepathy 60 ft.",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Charge",
                desc: "If the unicorn moves at least 20 ft. straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d8"
            },
            {
                name: "Innate Spellcasting",
                desc: "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:\n\nAt will: detect evil and good, druidcraft, pass without trace\n1/day each: calm emotions, dispel evil and good, entangle",
                attack_bonus: 0
            },
            {
                name: "Magic Resistance",
                desc: "The unicorn has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            },
            {
                name: "Magic Weapons",
                desc: "The unicorn's weapon attacks are magical.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The unicorn makes two attacks: one with its hooves and one with its horn.",
                attack_bonus: 0
            },
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Horn",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft ., one target. Hit: 8 (1d8 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Healing Touch (3/Day)",
                desc: "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target.",
                attack_bonus: 0
            },
            {
                name: "Teleport (1/Day)",
                desc: "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Hooves",
                desc: "The unicorn makes one attack with its hooves.",
                attack_bonus: 0
            },
            {
                name: "Shimmering Shield (Costs 2 Actions)",
                desc: "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 ft. of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn.",
                attack_bonus: 0
            },
            {
                name: "Heal Self (Costs 3 Actions)",
                desc: "The unicorn magically regains 11 (2d8 + 2) hit points.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Vampire",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "shapechanger",
        alignment: "lawful evil",
        ac: 16,
        hp: 144,
        hit_dice: "17d8 + 67",
        speed: "30 ft.",
        stats: [18, 18, 18, 17, 15, 18],
        saves: [{ dexterity: 9 }, { wisdom: 7 }, { charisma: 9 }],
        skillsaves: [{ perception: 7 }, { stealth: 9 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "necrotic; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 120 ft., passive Perception 17",
        languages: "the languages it knew in life",
        cr: "13",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "If the vampire isn't in sun light or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.\nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.",
                attack_bonus: 0
            },
            {
                name: "Legendary Resistance (3/Day)",
                desc: "If the vampire fails a saving throw, it can choose to succeed instead.",
                attack_bonus: 0
            },
            {
                name: "Misty Escape",
                desc: "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.",
                attack_bonus: 0
            },
            {
                name: "Regeneration",
                desc: "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Vampire Weaknesses",
                desc: "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage if it ends its turn in running water.\nStake to the Heart. If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed.\nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack (Vampire Form Only)",
                desc: "The vampire makes two attacks, only one of which can be a bite attack.",
                attack_bonus: 0
            },
            {
                name: "Unarmed Strike (Vampire Form Only)",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).",
                attack_bonus: 9,
                damage_dice: "1d8",
                damage_bonus: 4
            },
            {
                name: "Bite (Bat or Vampire Form Only)",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control.",
                attack_bonus: 9,
                damage_dice: "1d6 + 3d6",
                damage_bonus: 4
            },
            {
                name: "Charm",
                desc: "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.",
                attack_bonus: 0
            },
            {
                name: "Children of the Night (1/Day)",
                desc: "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.",
                attack_bonus: 0
            }
        ],
        legendary_actions: [
            {
                name: "Move",
                desc: "The vampire moves up to its speed without provoking opportunity attacks.",
                attack_bonus: 0
            },
            {
                name: "Unarmed Strike",
                desc: "The vampire makes one unarmed strike.",
                attack_bonus: 0
            },
            {
                name: "Bite (Costs 2 Actions)",
                desc: "The vampire makes one bite attack.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Vampire Spawn",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "neutral evil",
        ac: 15,
        hp: 82,
        hit_dice: "11d8 + 32",
        speed: "30 ft.",
        stats: [16, 16, 16, 11, 10, 12],
        saves: [{ dexterity: 6 }, { wisdom: 3 }],
        skillsaves: [{ perception: 3 }, { stealth: 6 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "necrotic; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "the languages it knew in life",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Regeneration",
                desc: "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.",
                attack_bonus: 0
            },
            {
                name: "Spider Climb",
                desc: "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
                attack_bonus: 0
            },
            {
                name: "Vampire Weaknesses",
                desc: "The vampire has the following flaws:\nForbiddance. The vampire can't enter a residence without an invitation from one of the occupants.\nHarmed by Running Water. The vampire takes 20 acid damage when it ends its turn in running water.\nStake to the Heart. The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place.\nSunlight Hypersensitivity. The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The vampire makes two attacks, only one of which can be a bite attack.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                attack_bonus: 61
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13).",
                attack_bonus: 6,
                damage_dice: "2d4",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Veteran",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "any race",
        alignment: "any alignment",
        ac: 17,
        hp: 58,
        hit_dice: "9d8 + 17",
        speed: "30 ft.",
        stats: [16, 13, 14, 10, 11, 10],
        skillsaves: [{ athletics: 5 }, { perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "any one language (usually Common)",
        cr: "3",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack.",
                attack_bonus: 0
            },
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Shortsword",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Heavy Crossbow",
                desc: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage.",
                attack_bonus: 3,
                damage_dice: "1d10",
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Violet Fungus",
        source: "5e SRD",
        size: "Medium",
        type: "plant",
        subtype: "",
        alignment: "unaligned",
        ac: 5,
        hp: 18,
        hit_dice: "4d8",
        speed: "5 ft.",
        stats: [3, 1, 10, 1, 3, 1],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "blinded, deafened, frightened",
        senses: "blindsight 30 ft. (blind beyond this radius), passive Perception 6",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "False Appearance",
                desc: "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The fungus makes 1d4 Rotting Touch attacks.",
                attack_bonus: 0
            },
            {
                name: "Rotting Touch",
                desc: "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage.",
                attack_bonus: 2,
                damage_dice: "1d8"
            }
        ]
    },
    {
        name: "Vrock",
        source: "5e SRD",
        size: "Large",
        type: "fiend",
        subtype: "demon",
        alignment: "chaotic evil",
        ac: 15,
        hp: 104,
        hit_dice: "11d10 + 43",
        speed: "40 ft., fly 60 ft.",
        stats: [17, 15, 18, 8, 13, 8],
        saves: [{ dexterity: 5 }, { wisdom: 4 }, { charisma: 2 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "cold, fire, lightning; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "darkvision 120 ft., passive Perception 11",
        languages: "Abyssal, telepathy 120 ft.",
        cr: "6",
        bestiary: true,
        traits: [
            {
                name: "Magic Resistance",
                desc: "The vrock has advantage on saving throws against spells and other magical effects.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The vrock makes two attacks: one with its beak and one with its talons.",
                attack_bonus: 0
            },
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Talons",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage.",
                attack_bonus: 6,
                damage_dice: "2d10",
                damage_bonus: 3
            },
            {
                name: "Spores (Recharge 6)",
                desc: "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it.",
                attack_bonus: 0
            },
            {
                name: "Stunning Screech (1/Day)",
                desc: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn .",
                attack_bonus: 0
            },
            {
                name: "Variant: Summon Demon (1/Day)",
                desc: "The demon chooses what to summon and attempts a magical summoning.\nA vrock has a 30 percent chance of summoning 2d4 dretches or one vrock.\nA summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 1 minute, until it or its summoner dies, or until its summoner dismisses it as an action.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Vulture",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 10,
        hp: 5,
        hit_dice: "1d8",
        speed: "10 ft., fly 50 ft.",
        stats: [7, 10, 13, 2, 12, 4],
        skillsaves: [{ perception: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Sight and Smell",
                desc: "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Beak",
                desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
                attack_bonus: 2,
                damage_dice: "1d4"
            }
        ]
    },
    {
        name: "Warhorse",
        source: "5e SRD",
        size: "Large",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 11,
        hp: 19,
        hit_dice: "3d10 + 2",
        speed: "60 ft.",
        stats: [18, 12, 13, 2, 12, 7],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 11",
        languages: "",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Trampling Charge",
                desc: "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Warhorse Skeleton",
        source: "5e SRD",
        size: "Large",
        type: "undead",
        subtype: "",
        alignment: "lawful evil",
        ac: 13,
        hp: 22,
        hit_dice: "3d10 + 5",
        speed: "60 ft.",
        stats: [18, 12, 15, 2, 8, 5],
        damage_vulnerabilities: "bludgeoning",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "exhaustion, poisoned",
        senses: "darkvision 60 ft., passive Perception 9",
        languages: "",
        cr: "1/2",
        bestiary: true,
        actions: [
            {
                name: "Hooves",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Water Elemental",
        source: "5e SRD",
        size: "Large",
        type: "elemental",
        subtype: "",
        alignment: "neutral",
        ac: 14,
        hp: 114,
        hit_dice: "12d10 + 48",
        speed: "30 ft., swim 90 ft.",
        stats: [18, 14, 18, 5, 10, 8],
        damage_vulnerabilities: "",
        damage_resistances:
            "acid; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "poison",
        condition_immunities:
            "exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconscious",
        senses: "darkvision 60 ft., passive Perception 10",
        languages: "Aquan",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Water Form",
                desc: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing.",
                attack_bonus: 0
            },
            {
                name: "Freeze",
                desc: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 ft. until the end of its next turn.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The elemental makes two slam attacks.",
                attack_bonus: 0
            },
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Whelm (Recharge 4-6)",
                desc: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Weasel",
        source: "5e SRD",
        size: "Tiny",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 1,
        hit_dice: "1d4 + -2",
        speed: "30 ft.",
        stats: [3, 16, 8, 2, 12, 3],
        skillsaves: [{ perception: 3 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "0",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
                attack_bonus: 5,
                damage_bonus: 1
            }
        ]
    },
    {
        name: "Werebear",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "neutral good",
        ac: 10,
        hp: 135,
        hit_dice: "18d8 + 54",
        speed: "30 ft. (40 ft., climb 30 ft. in bear or hybrid form)",
        stats: [19, 10, 17, 11, 12, 12],
        skillsaves: [{ perception: 7 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
        condition_immunities: "",
        senses: "passive Perception 17",
        languages: "Common (can't speak in bear form)",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it. is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Keen Smell",
                desc: "The werebear has advantage on WisGlom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid.",
                attack_bonus: 0
            },
            {
                name: "Bite (Bear or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with were bear lycanthropy.",
                attack_bonus: 7,
                damage_dice: "2d10",
                damage_bonus: 4
            },
            {
                name: "Claw (Bear or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Greataxe (Humanoid or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "1d12",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Wereboar",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "neutral evil",
        ac: 10,
        hp: 78,
        hit_dice: "12d8 + 24",
        speed: "30 ft. (40 ft. in boar form)",
        stats: [17, 10, 15, 10, 11, 8],
        skillsaves: [{ perception: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
        condition_immunities: "",
        senses: "passive Perception 12",
        languages: "Common (can't speak in boar form)",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Charge (Boar or Hybrid Form Only)",
                desc: "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack_bonus: 0,
                damage_dice: "2d6"
            },
            {
                name: "Relentless (Recharges after a Short or Long Rest)",
                desc: "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                desc: "The wereboar makes two attacks, only one of which can be with its tusks.",
                attack_bonus: 0
            },
            {
                name: "Maul (Humanoid or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            },
            {
                name: "Tusks (Boar or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Wererat",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "lawful evil",
        ac: 12,
        hp: 33,
        hit_dice: "6d8 + 6",
        speed: "30 ft.",
        stats: [10, 15, 12, 11, 10, 8],
        skillsaves: [{ perception: 2 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
        condition_immunities: "",
        senses: "darkvision 60 ft. (rat form only), passive Perception 12",
        languages: "Common (can't speak in rat form)",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Keen Smell",
                desc: "The wererat has advantage on Wisdom (Perception) checks that rely on smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                desc: "The wererat makes two attacks, only one of which can be a bite.",
                attack_bonus: 0
            },
            {
                name: "Bite (Rat or Hybrid Form Only).",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy.",
                attack_bonus: 4,
                damage_dice: "1d4",
                damage_bonus: 2
            },
            {
                name: "Shortsword (Humanoid or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Hand Crossbow (Humanoid or Hybrid Form Only)",
                desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Weretiger",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "neutral",
        ac: 12,
        hp: 120,
        hit_dice: "16d8 + 48",
        speed: "30 ft. (40 ft. in tiger form)",
        stats: [17, 15, 16, 10, 13, 11],
        skillsaves: [{ perception: 5 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 15",
        languages: "Common (can't speak in tiger form)",
        cr: "4",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing and Smell",
                desc: "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Pounce (Tiger or Hybrid Form Only)",
                desc: "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                desc: "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.",
                attack_bonus: 0
            },
            {
                name: "Bite (Tiger or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.",
                attack_bonus: 5,
                damage_dice: "1d10",
                damage_bonus: 3
            },
            {
                name: "Claw (Tiger or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d8",
                damage_bonus: 3
            },
            {
                name: "Scimitar (Humanoid or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                attack_bonus: 5,
                damage_dice: "1d6",
                damage_bonus: 3
            },
            {
                name: "Longbow (Humanoid or Hybrid Form Only)",
                desc: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Werewolf",
        source: "5e SRD",
        size: "Medium",
        type: "humanoid",
        subtype: "human",
        alignment: "chaotic evil",
        ac: 11,
        hp: 58,
        hit_dice: "9d8 + 17",
        speed: "30 ft. (40 ft. in wolf form)",
        stats: [15, 13, 14, 10, 11, 10],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "bludgeoning, piercing, and slashing damage from nonmagical weapons that aren't silvered",
        condition_immunities: "",
        senses: "passive Perception 14",
        languages: "Common (can't speak in wolf form)",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Shapechanger",
                desc: "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
                attack_bonus: 0
            },
            {
                name: "Keen Hearing and Smell",
                desc: "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack (Humanoid or Hybrid Form Only)",
                desc: "The werewolf makes two attacks: one with its bite and one with its claws or spear.",
                attack_bonus: 0
            },
            {
                name: "Bite (Wolf or Hybrid Form Only)",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Claws (Hybrid Form Only)",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage.",
                attack_bonus: 4,
                damage_dice: "2d4",
                damage_bonus: 2
            },
            {
                name: "Spear (Humanoid Form Only)",
                desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: -2
            }
        ]
    },
    {
        name: "White Dragon Wyrmling",
        source: "5e SRD",
        size: "Medium",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 16,
        hp: 32,
        hit_dice: "5d8 + 9",
        speed: "30 ft., burrow 15 ft., fly 60 ft., swim 30 ft.",
        stats: [14, 10, 14, 5, 10, 11],
        saves: [
            { dexterity: 2 },
            { constitution: 4 },
            { wisdom: 2 },
            { charisma: 2 }
        ],
        skillsaves: [{ perception: 4 }, { stealth: 2 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
        languages: "Draconic",
        cr: "2",
        bestiary: true,
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage.",
                attack_bonus: 4,
                damage_dice: "1d10 + 1d4",
                damage_bonus: 2
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                desc: "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "5d8"
            }
        ]
    },
    {
        name: "Wight",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "neutral evil",
        ac: 14,
        hp: 45,
        hit_dice: "6d8 + 18",
        speed: "30 ft.",
        stats: [15, 14, 16, 10, 13, 15],
        skillsaves: [{ perception: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities:
            "necrotic; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 13",
        languages: "the languages it knew in life",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack.",
                attack_bonus: 0
            },
            {
                name: "Life Drain",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.\nA humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time.",
                attack_bonus: 4,
                damage_dice: "1d6",
                damage_bonus: 2
            },
            {
                name: "Longsword",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            },
            {
                name: "Longbow",
                desc: "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
                attack_bonus: 4,
                damage_dice: "1d8",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Will-o'-Wisp",
        source: "5e SRD",
        size: "Tiny",
        type: "undead",
        subtype: "",
        alignment: "chaotic evil",
        ac: 19,
        hp: 22,
        hit_dice: "9d4 + -1",
        speed: "0 ft., fly 50 ft. (hover)",
        stats: [1, 28, 10, 13, 14, 11],
        damage_vulnerabilities: "",
        damage_resistances:
            "acid, cold, fire, necrotic, thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
        damage_immunities: "lightning, poison",
        condition_immunities:
            "exhaustion, grappled, paralyzed, poisoned, prone, restrained, unconscious",
        senses: "darkvision 120 ft., passive Perception 12",
        languages: "the languages it knew in life",
        cr: "2",
        bestiary: true,
        traits: [
            {
                name: "Consume Life",
                desc: "As a bonus action, the will-o'-wisp can target one creature it can see within 5 ft. of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points.",
                attack_bonus: 0
            },
            {
                name: "Ephemeral",
                desc: "The will-o'-wisp can't wear or carry anything.",
                attack_bonus: 0
            },
            {
                name: "Incorporeal Movement",
                desc: "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
                attack_bonus: 0
            },
            {
                name: "Variable Illumination",
                desc: "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of ft. equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Shock",
                desc: "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage.",
                attack_bonus: 4,
                damage_dice: "2d8"
            },
            {
                name: "Invisibility",
                desc: "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell).",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Winter Wolf",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral evil",
        ac: 13,
        hp: 75,
        hit_dice: "10d10 + 20",
        speed: "50 ft.",
        stats: [18, 13, 14, 7, 12, 8],
        skillsaves: [{ perception: 5 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "passive Perception 15",
        languages: "Common, Giant, Winter Wolf",
        cr: "3",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            },
            {
                name: "Snow Camouflage",
                desc: "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone.",
                attack_bonus: 6,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                desc: "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "4d8"
            }
        ]
    },
    {
        name: "Wolf",
        source: "5e SRD",
        size: "Medium",
        type: "beast",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 11,
        hit_dice: "2d8 + 2",
        speed: "40 ft.",
        stats: [12, 15, 12, 3, 12, 6],
        skillsaves: [{ perception: 3 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "passive Perception 13",
        languages: "",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            },
            {
                name: "Pack Tactics",
                desc: "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
                attack_bonus: 4,
                damage_dice: "2d4",
                damage_bonus: 2
            }
        ]
    },
    {
        name: "Worg",
        source: "5e SRD",
        size: "Large",
        type: "monstrosity",
        subtype: "",
        alignment: "neutral evil",
        ac: 13,
        hp: 26,
        hit_dice: "4d10 + 4",
        speed: "50 ft.",
        stats: [16, 13, 13, 7, 11, 8],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "Goblin, Worg",
        cr: "1/2",
        bestiary: true,
        traits: [
            {
                name: "Keen Hearing and Smell",
                desc: "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
                attack_bonus: 5,
                damage_dice: "2d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Wraith",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "neutral evil",
        ac: 13,
        hp: 67,
        hit_dice: "9d8 + 26",
        speed: "0 ft., fly 60 ft. (hover)",
        stats: [6, 16, 16, 12, 14, 15],
        damage_vulnerabilities: "",
        damage_resistances:
            "acid, cold, fire, lightning, thunder; bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered",
        damage_immunities: "necrotic, poison",
        condition_immunities:
            "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained",
        senses: "darkvision 60 ft., passive Perception 12",
        languages: "the languages it knew in life",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Incorporeal Movement",
                desc: "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
                attack_bonus: 0
            },
            {
                name: "Sunlight Sensitivity",
                desc: "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Life Drain",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.",
                attack_bonus: 6,
                damage_dice: "4d8",
                damage_bonus: 3
            },
            {
                name: "Create Specter",
                desc: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.",
                attack_bonus: 0
            }
        ]
    },
    {
        name: "Wyvern",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "unaligned",
        ac: 13,
        hp: 110,
        hit_dice: "13d10 + 38",
        speed: "20 ft., fly 80 ft.",
        stats: [19, 10, 16, 5, 12, 6],
        skillsaves: [{ perception: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., passive Perception 14",
        languages: "",
        cr: "6",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Claws",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d8",
                damage_bonus: 4
            },
            {
                name: "Stinger",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            }
        ]
    },
    {
        name: "Xorn",
        source: "5e SRD",
        size: "Medium",
        type: "elemental",
        subtype: "",
        alignment: "neutral",
        ac: 19,
        hp: 73,
        hit_dice: "7d8 + 41",
        speed: "20 ft., burrow 20 ft.",
        stats: [17, 10, 22, 11, 10, 11],
        skillsaves: [{ perception: 6 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances:
            "piercing and slashing from nonmagical weapons that aren't adamantine",
        damage_immunities: "",
        condition_immunities: "",
        senses: "darkvision 60 ft., tremorsense 60 ft., passive Perception 16",
        languages: "Terran",
        cr: "5",
        bestiary: true,
        traits: [
            {
                name: "Earth Glide",
                desc: "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through.",
                attack_bonus: 0
            },
            {
                name: "Stone Camouflage",
                desc: "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain.",
                attack_bonus: 0
            },
            {
                name: "Treasure Sense",
                desc: "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 ft. of it.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The xorn makes three claw attacks and one bite attack.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage.",
                attack_bonus: 6,
                damage_dice: "3d6",
                damage_bonus: 3
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
                attack_bonus: 6,
                damage_dice: "1d6",
                damage_bonus: 3
            }
        ]
    },
    {
        name: "Young Black Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 18,
        hp: 127,
        hit_dice: "15d10 + 44",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [19, 14, 17, 12, 11, 15],
        saves: [
            { dexterity: 5 },
            { constitution: 6 },
            { wisdom: 3 },
            { charisma: 5 }
        ],
        skillsaves: [{ perception: 6 }, { stealth: 5 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 16",
        languages: "Common, Draconic",
        cr: "7",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage.",
                attack_bonus: 7,
                damage_dice: "2d10 + 1d8",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Acid Breath (Recharge 5-6)",
                desc: "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "11d8"
            }
        ]
    },
    {
        name: "Young Blue Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 18,
        hp: 152,
        hit_dice: "16d10 + 64",
        speed: "40 ft., burrow 40 ft., fly 80 ft.",
        stats: [21, 10, 19, 14, 13, 17],
        saves: [
            { dexterity: 4 },
            { constitution: 8 },
            { wisdom: 5 },
            { charisma: 7 }
        ],
        skillsaves: [{ perception: 9 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 19",
        languages: "Common, Draconic",
        cr: "9",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage.",
                attack_bonus: 9,
                damage_dice: "2d10 + 1d10",
                damage_bonus: 5
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                attack_bonus: 9,
                damage_dice: "2d6",
                damage_bonus: 5
            },
            {
                name: "Lightning Breath (Recharge 5-6)",
                desc: "The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "10d10"
            }
        ]
    },
    {
        name: "Young Brass Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 17,
        hp: 110,
        hit_dice: "13d10 + 38",
        speed: "40 ft., burrow 20 ft., fly 80 ft.",
        stats: [19, 10, 17, 12, 11, 15],
        saves: [
            { dexterity: 3 },
            { constitution: 6 },
            { wisdom: 3 },
            { charisma: 5 }
        ],
        skillsaves: [{ perception: 6 }, { persuasion: 5 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 16",
        languages: "Common, Draconic",
        cr: "6",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "2d10",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it.",
                attack_bonus: 0,
                damage_dice: "12d6"
            }
        ]
    },
    {
        name: "Young Bronze Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 18,
        hp: 142,
        hit_dice: "15d10 + 59",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [21, 10, 19, 14, 13, 17],
        saves: [
            { dexterity: 3 },
            { constitution: 7 },
            { wisdom: 4 },
            { charisma: 6 }
        ],
        skillsaves: [{ insight: 4 }, { perception: 7 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "lightning",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 17",
        languages: "Common, Draconic",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage.",
                attack_bonus: 8,
                damage_dice: "2d10",
                damage_bonus: 5
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
                attack_bonus: 8,
                damage_dice: "2d6",
                damage_bonus: 5
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon.",
                attack_bonus: 0,
                damage_dice: "10d10"
            }
        ]
    },
    {
        name: "Young Copper Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "chaotic good",
        ac: 17,
        hp: 119,
        hit_dice: "14d10 + 42",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        stats: [19, 12, 17, 16, 13, 15],
        saves: [
            { dexterity: 4 },
            { constitution: 6 },
            { wisdom: 4 },
            { charisma: 5 }
        ],
        skillsaves: [{ deception: 5 }, { perception: 7 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "acid",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 17",
        languages: "Common, Draconic",
        cr: "7",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage.",
                attack_bonus: 7,
                damage_dice: "2d10",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save.",
                attack_bonus: 0,
                damage_dice: "9d8"
            }
        ]
    },
    {
        name: "Young Gold Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 18,
        hp: 178,
        hit_dice: "17d10 + 84",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [23, 14, 21, 16, 13, 20],
        saves: [
            { dexterity: 6 },
            { constitution: 9 },
            { wisdom: 5 },
            { charisma: 9 }
        ],
        skillsaves: [
            { insight: 5 },
            { perception: 9 },
            { persuasion: 9 },
            { stealth: 6 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 19",
        languages: "Common, Draconic",
        cr: "10",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
                attack_bonus: 10,
                damage_dice: "2d10",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 10,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "10d10"
            }
        ]
    },
    {
        name: "Young Green Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "lawful evil",
        ac: 18,
        hp: 136,
        hit_dice: "16d10 + 48",
        speed: "40 ft., fly 80 ft., swim 40 ft.",
        stats: [19, 12, 17, 16, 13, 15],
        saves: [
            { dexterity: 4 },
            { constitution: 6 },
            { wisdom: 4 },
            { charisma: 5 }
        ],
        skillsaves: [{ deception: 5 }, { perception: 7 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "poison",
        condition_immunities: "poisoned",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 17",
        languages: "Common, Draconic",
        cr: "8",
        bestiary: true,
        traits: [
            {
                name: "Amphibious",
                desc: "The dragon can breathe air and water.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage.",
                attack_bonus: 7,
                damage_dice: "2d10 + 2d6",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Poison Breath (Recharge 5-6)",
                desc: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "12d6"
            }
        ]
    },
    {
        name: "Young Red Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 18,
        hp: 178,
        hit_dice: "17d10 + 84",
        speed: "40 ft., climb 40 ft., fly 80 ft.",
        stats: [23, 10, 21, 14, 11, 19],
        saves: [
            { dexterity: 4 },
            { constitution: 9 },
            { wisdom: 4 },
            { charisma: 8 }
        ],
        skillsaves: [{ perception: 8 }, { stealth: 4 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "fire",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 18",
        languages: "Common, Draconic",
        cr: "10",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage.",
                attack_bonus: 10,
                damage_dice: "2d10 + 1d6",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 10,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Fire Breath (Recharge 5-6)",
                desc: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "16d6"
            }
        ]
    },
    {
        name: "Young Silver Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "lawful good",
        ac: 18,
        hp: 168,
        hit_dice: "16d10 + 80",
        speed: "40 ft., fly 80 ft.",
        stats: [23, 10, 21, 14, 11, 19],
        saves: [
            { dexterity: 4 },
            { constitution: 9 },
            { wisdom: 4 },
            { charisma: 8 }
        ],
        skillsaves: [
            { arcana: 6 },
            { history: 6 },
            { perception: 8 },
            { stealth: 4 }
        ],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 18",
        languages: "Common, Draconic",
        cr: "9",
        bestiary: true,
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage.",
                attack_bonus: 10,
                damage_dice: "2d10",
                damage_bonus: 6
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage.",
                attack_bonus: 10,
                damage_dice: "2d6",
                damage_bonus: 6
            },
            {
                name: "Breath Weapons (Recharge 5-6)",
                desc: "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
                attack_bonus: 0,
                damage_dice: "12d8"
            }
        ]
    },
    {
        name: "Young White Dragon",
        source: "5e SRD",
        size: "Large",
        type: "dragon",
        subtype: "",
        alignment: "chaotic evil",
        ac: 17,
        hp: 133,
        hit_dice: "14d10 + 56",
        speed: "40 ft., burrow 20 ft., fly 80 ft., swim 40 ft.",
        stats: [18, 10, 18, 6, 11, 12],
        saves: [
            { dexterity: 3 },
            { constitution: 7 },
            { wisdom: 3 },
            { charisma: 4 }
        ],
        skillsaves: [{ perception: 6 }, { stealth: 3 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "cold",
        condition_immunities: "",
        senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 16",
        languages: "Common, Draconic",
        cr: "6",
        bestiary: true,
        traits: [
            {
                name: "Ice Walk",
                desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra moment.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Multiattack",
                desc: "The dragon makes three attacks: one with its bite and two with its claws.",
                attack_bonus: 0
            },
            {
                name: "Bite",
                desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage.",
                attack_bonus: 7,
                damage_dice: "2d10 + 1d8",
                damage_bonus: 4
            },
            {
                name: "Claw",
                desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
                attack_bonus: 7,
                damage_dice: "2d6",
                damage_bonus: 4
            },
            {
                name: "Cold Breath (Recharge 5-6)",
                desc: "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one.",
                attack_bonus: 0,
                damage_dice: "10d8"
            }
        ]
    },
    {
        name: "Zombie",
        source: "5e SRD",
        size: "Medium",
        type: "undead",
        subtype: "",
        alignment: "neutral evil",
        ac: 8,
        hp: 22,
        hit_dice: "3d8 + 8",
        speed: "20 ft.",
        stats: [13, 6, 16, 3, 6, 5],
        saves: [{ wisdom: 0 }],
        damage_vulnerabilities: "",
        damage_resistances: "",
        damage_immunities: "",
        condition_immunities: "poisoned",
        senses: "darkvision 60 ft., passive Perception 8",
        languages: "understands all languages it spoke in life but can't speak",
        cr: "1/4",
        bestiary: true,
        traits: [
            {
                name: "Undead Fortitude",
                desc: "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5+the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead.",
                attack_bonus: 0
            }
        ],
        actions: [
            {
                name: "Slam",
                desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
                attack_bonus: 3,
                damage_dice: "1d6",
                damage_bonus: 1
            }
        ]
    }
];

export const BESTIARY_BY_NAME: Map<string, Monster> = new Map(
    BESTIARY.map((monster) => {
        return [monster.name, monster];
    })
);
