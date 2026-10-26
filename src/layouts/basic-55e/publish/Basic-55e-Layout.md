---
aliases: [Basic 5.5e Layout]
description: "This page provides the integrated layout block for Dungeons and Dragons 5.5th Edition Statblock, based on the visual representation of the Systems Resource Document (SRD) version."
image: 
order: 3
permalink: statblock/layouts/integrated/dnd55e
publish: true
tags: [Statblocks/Layout/dnd55e]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > [[Integrated Layouts|Integrated Statblock Layouts]] > *You Are Here*

---

## Description

On this page, you will find the layout block for the Dungeons and Dragons 5th Edition Statblock, visually based on the Systems Resource Document (SRD) version. 

## Sample Images

>[!screenshot] - Screenshot of a Mummy Lord
> ![Mummy Lord](./images/55e-mummy-lord.png)

>[!screenshot] - Screenshot of a Priest Acolyte
> ![Priest Acolyte](./images/55e-priest-acolyte.png)

## DnD 5.5e Code Block

````yaml
```statblock
layout: Basic 5e Layout
image: [[Ancient Black Dragon.jpg]]
name: Ancient Black Dragon
size: Gargantuan
type: dragon
subtype:
alignment: chaotic evil
initiative: 16
ac: 22
hp: 367
hit_dice: 21d20
speed: 40 ft., fly 80 ft., swim 40 ft.
stats: [27, 14, 25, 16, 15, 19]
saves:
  - dexterity: 9
  - constitution: 14
  - wisdom: 9
  - charisma: 11
skillsaves:
  - perception: 16
  - stealth: 9
senses: blindsight 60 ft., darkvision 120 ft., passive Perception 26
languages: Common, Draconic
damage_resistances: bludgeoning, piercing, and slashing from nonmagical attacks
damage_immunities: fire, poison
condition_immunities: charmed, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
cr: 21
traits:
  - name: Amphibious
    desc: The dragon can breathe air and water
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
  - name: Bite
    desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
  - name: Claw
    desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
  - name: Tail
    desc: "Melee Weapon Attack: +15 to hit, reach 20 ft ., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
  - name: Frightful Presence
    desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
  - name: Acid Breath (Recharge 5-6)
    desc: The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one.
reactions:
  - name: Amphibious
    desc: The dragon can breathe air and water.
  - name: Legendary Resistance (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
legendary_actions:
  - name: Detect
    desc: The dragon makes a Wisdom (Perception) check.
  - name: Tail Attack
    desc: The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions),
    desc: The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
mythic_actions:
  - name: Tail Attack
    desc: The dragon makes a tail attack.
  - name: Wing Attack (Costs 2 Actions)
    desc: The dragon beats its wings. Each creature within 15 ft. of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed.
spells:
  - The dragon is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared
  - Cantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp
  - 1st level (4 slots): detect magic, identify, mage armor*, magic missile
  - 2nd level (3 slots): detect thoughts, mirror image, misty step
  - 3rd level (3 slots): counterspell, fly, lightning bolt
  - 4th level (3 slots): banishment, fire shield, stoneskin*
  - 5th level (3 slots): cone of cold, scrying, wall of force
  - 6th level (1 slot): globe of invulnerability
  - 7th level (1 slot): teleport
  - 8th level (1 slot): mind blank*
  - 9th level (1 slot): time stop
  - "* The archmage casts these spells on itself before combat."
```
````


### DnD 5.5e Empty Codeblock

````yaml
```statblock
layout: Basic 5.5e Layout
image: 
name: 
size: 
type: 
subtype: 
alignment: 
initiative:
ac: Number
hp: Number
hit_dice: 
speed: 
stats: 
fage_stats: 
saves:
  - dash: 
  - potato: 
  - stew: 
skillsaves:
  - fake-skill: 
  - turtle: 
damage_vulnerabilities: 
damage_resistances: 
damage_immunities: 
condition_immunities: 
senses: string
languages: string
cr: number
spells:
  - 
  - 
  -  
traits:
  - name: 
    desc: 
  - name: 
    desc: 
actions:
  - name: 
    desc: 
  - name: 
    desc: 
legendary_actions:
  - name: 
    desc: 
  - name: 
    desc: 
mythic_actions:
  - name: 
    desc: 
  - name: 
    desc: 
bonus_actions:
  - name: 
    desc: 
  - name: 
    desc: 
reactions:
  - name: 
    desc: 
  - name: 
    desc: 
```
````
