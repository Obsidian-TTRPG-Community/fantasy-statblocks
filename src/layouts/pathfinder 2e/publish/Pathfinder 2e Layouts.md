---
aliases: 
  - Pathfinder 2e Layouts
  - Basic Pathfinder 2e Layout
  - Pathfinder 2e Creature Layout
description: "This page provides a basic code block for the Pathfinder 2e Layouts which are included within Fantasy Statblocks."
image: 
order: 4
permalink: statblock/layouts/integrated/pf2e
publish: true
tags: [Statblocks/Layout/PF2e]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > [[Integrated Layouts|Integrated Statblock Layouts]] > *You Are Here*

---

This page provides basic code blocks for the Pathfinder 2e layouts included within Fantasy Statblocks.

The layouts include all the essential [[Key|Key]] information needed to create a creature—now it is up to you and your imagination to do the rest. Make its abilities, attacks, and skills. Give it spells, or an image. Turn your favorite character into a statblock, or even the building across the street.

There are two Pathfinder 2e layout types. Both layouts look the same with the default settings, but their statblocks are defined differently.

- [[#Pathfinder 2e Creature Layout]]: Use this for regular creatures and NPCs. This is what you should use in most circumstances.
- [[#Basic Pathfinder 2e Layout]]: This is a more basic layout which is not as specialised for creatures, but can be used for other types (e.g. hazards). It can also be used for creatures.

>[!screenshot]- Screenshot of a Seething Umbral Dragon
> ![Seething Umbral Dragon](https://github.com/valentine195/fantasy-statblocks/blob/gh-pages/images/statblock/pf2e.png?raw=true)

## Pathfinder 2e Creature Layout

Most fields are optional. If you're using the Initiative Tracker plugin, then the required fields for full functionality are:
- `name`
- `level`
- `modifier`
- `ac`
- `hp`

```yaml
```statblock
layout: Pathfinder 2e Creature Layout
source: Abbreviated source
sourcebook: Full book reference with page number
name: Creature name
level: Creature 0

alignment: Alignment
size: Size of the creature, e.g. medium
rarity: Rarity of the creature, e.g. uncommon
traits:
  - A generic trait for the creature, e.g. unholy
  - "[[Traits can be links but they need to be surrounded in quotes]]"

modifier: Perception modifier as a number, e.g. 14
senses: Additional senses and related abilities, e.g. darkvision, scent (imprecise) 30 feet
languages: Languages the creature knows e.g. Aklo; telepathy 100 feet
skills:
  - The Name Of A Skill: The creature's bonus for this skill as a number, e.g. 12
    A situation where a different bonus applies, e.g. to Escape: An alternate bonus for this case as a number, e.g. 14. Notice the indentation and lack of a "- " at the start of the line.
    note: Optionally, a skill might have an associated note. In this case, you can include it like this. Notice the indentation and lack of a "- " at the start of the line
  - "Lore: Something": You can include Lore skills too, but you need to surround the name in quotes
  - note: Optionally, you can include notes to do with skills in general here, with the "note" name
attributes:
  - str: Strength attribute modifier for the creature, e.g. +1
  - dex: 1
  - con: -2
  - int: 0
  - wis: -3
  - cha: 4
items: Items in the creature's possession e.g. javelin (5), longspear

abilities_top:
  - name: Name of an ability which should be displayed in the top part of the statblock, e.g. Reactive Strike
    desc: Ability description. You can use ⬻, ⬺, ⬽, ⬲ and ⭓ for action icons, and you can use markdown formatting here.

ac: DC to hit the creature, as a number, e.g. 24
acNote: Any related notes to the AC. This is rendered after the AC with a space in between. e.g. (22 with shed scales)
saves:
  - fort: Fortitude saving throw for the creature
    note: Optionally you can include any notes relating to this saving throw here. Notice the indentation and lack of a "- " at the start of the line
  - ref: Reflex saving throw for the creature
    A situation where a different bonus applies, e.g. vs traps: An alternate bonus for this situation, e.g. 14. Notice the indentation and lack of a "- " at the start of the line
  - will: Will saving throw for the creature
  - note: Optionally, you can include notes to do with the saves in general here, with the "note" name, e.g. +1 status to all saves vs magic
hp: HP of the creature as a number, e.g. 120
hpNote: Any notes relating to the creature's HP, e.g. head regrowth, regeneration hydra
hardness: Hardness of the creature as a number, for construct types, e.g. 5
immunities: Creature's immunities as a string, e.g. death effects
resistances: Creature's resistances as a string, e.g. fire 5
weaknesses: Creature's weaknesses as a string, e.g. cold 5

abilities_mid:
  - name: Name of an ability which should be displayed in the middle part of the statblock.
    desc: Ability description. A pattern like +N or NdN will be turned into Dice Roller blocks if you have the plugin installed. e.g. The creature makes a +20 Acrobatics check or it takes 4d10+4 damage and falls prone.

speed: Creature's speed as a string, e.g. 25 feet, swim 25 feet

abilities_bot:
  - name: Name of an ability which should be displayed in the bottom part of the statblock.
    desc: >
      If you want to use multiple lines, you can use the ">" character like this, and then you can
      use multiple lines in the description and they will be removed in the rendered output.
      This can be useful for longer abilities or those with formatting. Example:
      ⬲ **Trigger** The creature is targeted with a melee or ranged attack;
      **Effect** The creature gains a +2 circumstance bonus to AC against the triggering attack.

attacks:
  - name: __Melee/Ranged__ ⬻ name of the strike, e.g. tail
    bonus: Attack bonus for this strike as a number, e.g. 12
    damage: Damage and on-hit effects for this attack, e.g. 2d4+3 bludgeoning plus Knockdown
    desc: Description for this attack which should go before the damage, such as traits. e.g. (agile)

spellcasting:
  - name: Name of a type of spellcasting, e.g. Divine Innate Spells
    dc: DC for spells within this group, e.g. 32
    bonus: Attack bonus for spells within this group, e.g. 15
    fp: Number of focus points available for casting spells within this group, e.g. 2
    desc: >
      The spells. You can use a quoted string here, or you can use "> " and indent the rest to use multiple
      lines without having multiple lines in the rendered output. Example:
      **4th** heal (x4), invisibility (at will; self only);
      **Cantrips (4th)** dancing lights, detect magic; 
      **Constant (7th)** see invisibility;
      **(5th)** tongues
```

## Basic Pathfinder 2e Layout

````yaml
```statblock
columns: Number
forcecolumns: Boolean
layout: Basic Pathfinder 2e Layout
source: "Source in String"
name: "Name in String"
level: "Creature 16"
rare_01: "Rarity in String"
rare_02: "Rarity in String"
rare_03: "Rarity in String"
rare_04: "Rarity in String"
alignment: "Alignment in String"
size: "Size in String"
trait_01: "Trait in String"
trait_02: "Trait in String"
trait_03: "Trait in String"
trait_04: "Trait in String"
trait_05: "Trait in String"
trait_06: "Trait in String"
trait_07: "Trait in String"
modifier: Number
perception:
  - name: "Perception or Name in String"
    desc: "Description in String"
languages: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
skills:
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
abilityMods: [8, 5, 6, 4, 5, 5]

abilities_mid:
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
abilities_bot:
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."

speed: Speed in no string

ac: Number
armorclass:
  - name: Name
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
hp: Number
health:
  - name: Name
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."


attacks:
  - name: Name
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: Name
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: Name
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
  - name: Name
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."

spellcasting:
  - name: "Name in String"
    desc: "Description in String. Links in Wikilink. Bolds surrounded by Underscores."
sourcebook: "Name in String"
```
````


---
