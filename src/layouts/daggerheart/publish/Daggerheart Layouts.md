---
aliases: [Daggerheart Layouts]
description: "This page provides a basic code blocks for the Daggerheart Layouts included within Fantasy Statblocks."
image: [[Example-Adversary.png]]
order: 5
permalink: statblock/layouts/integrated/daggerheart
publish: true
tags: [Statblocks/Layout/Daggerheart]
---

[[Fantasy Statblocks|Fantasy Statblocks]] > [[Integrated Layouts|Integrated Statblock Layouts]] > Daggerheart

---

## Description

This collection of layouts is for use with the Daggerheart System Reference Document (SRD) as well as homebrew content made by the community. There are basic layouts for each of the following types of Daggerheart information:

- Adversary
- Environment
- Card

## Getting SRD Content

To get SRD available content, such as adversaries and environments, follow the directions below by heading to the daggerheart-srd project repository on github.com and download the json files.

- Go to: [https://github.com/seansbox/daggerheart-srd/tree/main/.build/json](https://github.com/seansbox/daggerheart-srd/tree/main/.build/json)
- Download the files you care about (for example adversaries.json contains all SRD adversaries).
- Open your vault and navigate to the fantasy-statblock plugin options.
- Select the Import Generic Data > Choose Files button.
- Select the file you wish to import.
- Obsidian will ask you to Set Sources, type in "daggerheart-type" (Example: daggerheart-adversary or daggerheart-environment)
- Confirm and your content should be installed.

## Credit and Attributions

This data is available courtesy of seansbox and Darrington Press, I am not the author, I just wrote the layouts. To learn more about seansbox' work go here: [https://github.com/seansbox/daggerheart-srd/](https://github.com/seansbox/daggerheart-srd/). To learn more about the SRD and Community Gaming License provided by Darrington Press/Critical Role See the Content License Below.

If you really wish to follow me you can [find me on github](https://github.com/gotsanity).

## Content License

This layout includes materials from the Daggerheart System Reference Document 1.0, © Critical Role, LLC. under the terms of the Darrington Press Community Gaming (DPCGL) License. More information can be found at https://www.daggerheart.com/. There are minor modifications to format and structure. No previous modifications by others.

Daggerheart and all related marks are trademarks of Critical Role, LLC and used with permission. This project is not affiliated with, endorsed, or sponsored by Critical Role or Darrington Press.

For full license terms, see: https://www.daggerheart.com/


## Adversary Sample Image

>[!screenshot]- Screenshot of an Adversary
> ![https://raw.githubusercontent.com/gotsanity/fantasy-statblocks/refs/heads/main/src/layouts/daggerheart/publish/images/Example-Adversary.png](https://raw.githubusercontent.com/gotsanity/fantasy-statblocks/refs/heads/main/src/layouts/daggerheart/publish/images/Example-Adversary.png) 

## Daggerheart Adversary Code Block

````yaml
```statblock
layout: Daggerheart Adversary
source: "daggerheart-adversary"
name: "Acid Burrower"
tier: 1
type: "Solo"
description: "A horse-sized insect with digging claws and acidic blood."
motives_and_tactics: "Burrow, drag away, feed, reposition"
difficulty: 14
thresholds: "8/15"
hp: 8
stress: 3
atk: "+3"
attack: "Claws"
range: "Very Close"
damage: "1d12+2 phy"
experience: "Tremor Sense +2"
feats:
- name: "Relentless (3) - Passive"
  text: "The Burrower can be spotlighted up to three times per GM turn. Spend Fear as usual to spotlight them."
- name: "Earth Eruption - Action"
  text: "Mark a Stress to have the Burrower burst out of the ground. All creatures within Very Close range must succeed on an Agility Reaction Roll or be knocked over, making them Vulnerable until they next act."
- name: "Spit Acid - Action"
  text: "Make an attack against all targets in front of the Burrower within Close range. Targets the Burrower succeeds against take 2d6 physical damage and must mark an Armor Slot without receiving its benefits (they can still use armor to reduce the damage). If they can’t mark an Armor Slot, they must mark an additional HP and you gain a Fear."
- name: "Acid Bath - Reaction"
  text: "When the Burrower takes Severe damage, all creatures within Close range are bathed in their acidic blood, taking 1d10 physical damage. This splash covers the ground within Very Close range with blood, and all creatures other than the Burrower who move through it take 1d6 physical damage."
```
````


### Daggerheart Adversary Empty Codeblock

````yaml
```statblock
columns: integer between 1 and 2
forceColumns: Boolean
layout: Daggerheart Adversary
source: Your Source
name: string
tier: integer
type: string
description: string
motives_and_tactics: string
difficulty: integer
thresholds: string
hp: integer
stress: integer
atk: string
attack: string
range: string
damage: string
experience: string
feats:
- name: Feature 1 string
  text: Feature 1 text string
- name: Feature 2 string
  text: Feature 2 text string
```
````

## Card Sample Image

>[!screenshot]- Screenshot of a Card
> ![https://raw.githubusercontent.com/gotsanity/fantasy-statblocks/refs/heads/main/src/layouts/daggerheart/publish/images/Example-Card.png](https://raw.githubusercontent.com/gotsanity/fantasy-statblocks/refs/heads/main/src/layouts/daggerheart/publish/images/Example-Card.png) 


### Daggerheart Card Codeblock

````yaml
```statblock
layout: Daggerheart Card
name: Big Damage Ability
image: image.png (Not Yet Impelemented)
domain: Other
level: 1
recall: 0
type: Ability
text: This card does big damage
```
````

### Daggerheart Card Empty Codeblock

````yaml
```statblock
layout: Daggerheart Card
name: string
image: image.png (Not Yet Impelemented)
domain: string
level: integer
recall: integer
type: string
text: string
```
````

## Adversary Sample Image

>[!screenshot]- Screenshot of an Adversary
> ![https://raw.githubusercontent.com/gotsanity/fantasy-statblocks/refs/heads/main/src/layouts/daggerheart/publish/images/Example-Environment.png](https://raw.githubusercontent.com/gotsanity/fantasy-statblocks/refs/heads/main/src/layouts/daggerheart/publish/images/Example-Environment.png) 

### Daggerheart Environment Code Block

````yaml
```statblock
layout: Daggerheart Environment
name: "Abandoned Grove"
tier: 1
type: "Exploration"
description: "A former druidic grove lying fallow and fully reclaimed by nature."
impulses: "Draw in the curious, echo the past"
difficulty: 11
potential_adversaries: "Beasts (Bear, Dire Wolf, Glass Snake), Grove Guardians (Minor Treant, Sylvan Soldier, Young Dryad)"
feats:
- name: Overgrown Battlefield - Passive,
  text: There has been a battle here. A PC can make an Instinct Roll to identify evidence of that fight. On a success with Hope, learn all three pieces of information below. On a success with Fear, learn two. On a failure, a PC can mark 3 Stress to learn one and gain advantage on the next action roll to investigate this environment. A PC with an appropriate background or Experience can learn an additional detail and ask a follow-up question about the scene and get a truthful (if not always complete) answer.\n\n  - Traces of a battle (broken weapons and branches, gouges in the ground) litter the ground.\n  - A moss-covered tree trunk is actually the corpse of a treant.\n  - Still-standing trees are twisted in strange ways, as if by powerful magic.
- name: Barbed Vines - Action,
  text: Pick a point within the grove. All targets within Very Close range of that point must succeed on an Agility Reaction Roll or take 1d8+3 physical damage and become Restrained by barbed vines. Restrained creatures until they’re freed with a successful Finesse or Strength roll or by dealing at least 6 damage to the vines.
- name: You Are Not Welcome Here - Action,
  text: A Young Dryad, two Sylvan Soldiers, and a number of Minor Treants equal to the number of PCs appear to confront the party for their intrusion.
- name: Defiler - Action,
  text: Spend a Fear to summon a Minor Chaos Adversary drawn to the echoes of violence and discord. They appear within Far range of a chosen PC and immediately take the spotlight.
```
````


### Daggerheart Environment Empty Codeblock

````yaml
```statblock
columns: integer between 1 and 2
forceColumns: Boolean
layout: Daggerheart Adversary
source: Your Source
name: string
tier: integer
type: string
description: string
impulses: string
difficulty: integer
potential_adversaries: string
feats:
- name: Feature 1 string
  text: Feature 1 text string
- name: Feature 2 string
  text: Feature 2 text string
```
````