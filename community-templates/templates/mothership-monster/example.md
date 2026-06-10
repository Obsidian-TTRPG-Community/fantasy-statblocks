---
tags: [bestiary, mothership]
---

# Rogue Android

This note shows the **in-note format** for a Mothership adversary. The
`statblock` code block references the installed `Mothership Monster` layout by
name. Combat and Instinct are percentile checks; Health is rolled.

```statblock
layout: Mothership Monster
name: Android (Rogue)
subtype: Synthetic · Class III
flavor_text: "Its smile never reaches the eyes. There are no eyes."
combat: "45%"
instinct: "60%"
wounds: 3
health: "1d10"
armor: 5
attacks:
  - name: Improvised Weapon
    desc: "1d10 damage. On a hit, Body Save or be knocked prone."
  - name: System Override
    desc: "Hacks one nearby device or door. Targets make a Fear Save."
traits:
  - name: Cold Logic
    desc: "Immune to Fear and Stress effects."
  - name: Self-Repair
    desc: "Restores 1 Health at the start of each of its turns unless on fire."
```
