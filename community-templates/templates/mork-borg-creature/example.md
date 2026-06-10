---
tags: [bestiary, mork-borg]
---

# The Shedding

This note shows the **in-note format** for a Mörk Borg creature. The
`statblock` code block below references the installed `Mörk Borg Creature`
layout by name with the `layout` field. Every field maps to a property used by
that layout.

```statblock
layout: Mörk Borg Creature
name: The Shedding
subtype: Undead horror
flavor_text: "It was a man once. Now it is mostly teeth and weeping sores."
hp: 12
morale: 9
armor: "Reduces incoming damage by d4 (light)"
actions:
  - name: Raking Claws
    desc: "Two attacks, d6 damage each."
  - name: Wet Shriek
    desc: "DR12 Toughness or be deafened and lose your next action."
traits:
  - name: Spore Cloud
    desc: "Anyone ending their turn adjacent takes d4 rot damage."
  - name: It Keeps Coming
    desc: "When reduced to 0 HP, roll d6. On a 6 it rises next round with d6 HP."
```
