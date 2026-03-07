# Manual Column Break Feature Test

## Test Case 1: No Manual Break (Default Behavior - 2 Columns)

```statblock
columns: 2
name: Test Creature 1
ac: 15
hp: 30
speed: 30 ft.

traits:
  - name: Trait One
    desc: This is a long trait description that might cause automatic column balancing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

  - name: Trait Two
    desc: Another trait with substantial content. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  - name: Trait Three
    desc: Yet another trait. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

  - name: Trait Four
    desc: Fourth trait for height. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

actions:
  - name: Attack One
    desc: Melee attack with a weapon. This action has substantial descriptive text.

  - name: Attack Two
    desc: Ranged attack option with multiple uses and effects.
```

**Expected Result:** Content should be distributed automatically across 2 columns based on height balancing.

---

## Test Case 2: Single Manual Break (2 Columns)

```statblock
columns: 2
forceColumns: true
name: Test Creature 2
ac: 15
hp: 45
hit_dice: 5d8 + 15
speed: 30 ft.
stats: [10,14,16,12,10,18]

traits:
  - name: Spellcasting
    desc: "The warlock is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It has the following warlock spells prepared: Cantrips (at will) - Eldritch Blast, Mage Hand. 1st level - Armor of Agathys, Hex. 2nd level - Darkness, Suggestion. 3rd level - Counterspell, Summon Lesser Demons. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  - name: Eldritch Mind
    desc: "The warlock has advantage on Constitution saving throws made to maintain concentration on spells. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

  - name: Devil's Sight
    desc: "Magical darkness doesn't impede the warlock's darkvision. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."

  - name: Dark One's Own Luck
    desc: "When the warlock makes an ability check, attack roll, or saving throw, it can use this feature to add 1d4 to the result. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt."

[column-break]

actions:
  - name: Eldritch Blast
    desc: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (1d10 + 4) force damage per beam. The warlock can target up to two creatures within range. This action appears after the column break and should start in column 2."

  - name: Chill Touch
    desc: "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 4) necrotic damage, and the target can't regain hit points until the end of the warlock's next turn. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  - name: Hex
    desc: "The warlock chooses one creature it can see within 60 ft. The target must make a Charisma saving throw. On a failed save, the warlock can add 1d6 damage to attack rolls against the target and subtract 1d6 from the target's ability checks. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

  - name: Fireball
    desc: "Each creature in a 20-foot-radius sphere must make a Dexterity saving throw. A target takes 22 (4d10) fire damage on a failed save, or half as much damage on a successful one. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
```

**Expected Result:** 
- Column 1: name, ac, hp, hit_dice, speed, stats, traits (substantial content)
- Column 2: actions (substantial content)

The `[column-break]` marker forces the actions section to start in a new column. With manual breaks enabled, automatic column balancing is disabled.

---

## Test Case 3: Multiple Manual Breaks (3 Columns)

```statblock
columns: 3
forceColumns: true
name: Test Creature 3
ac: 15
hp: 60
hit_dice: 7d8 + 21
speed: 30 ft. fly 60 ft.
stats: [12,14,16,13,14,16]

traits:
  - name: Spellcasting
    desc: "The creature is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It has the following warlock spells prepared: Cantrips (at will) - Eldritch Blast, Mage Hand. 1st level (4 slots) - Armor of Agathys, Hex, Hellish Rebuke. 2nd level (3 slots) - Darkness, Suggestion. 3rd level (2 slots) - Counterspell, Summon Lesser Demons. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt."

  - name: Dark Resilience
    desc: "The creature has resistance to cold, fire, lightning, necrotic, and poison damage. It also has immunity to being charmed and frightened. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  - name: Devil Tongue
    desc: "The creature can speak the languages it knew in life. It can understand all languages it hears. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

  - name: Legendary Resistance
    desc: "The creature can choose to succeed on one saving throw it fails. It can use this ability up to three times, and regains all uses at the end of a long rest. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."

[column-break]

actions:
  - name: Multiattack
    desc: "The creature makes two Eldritch Blast attacks or uses Spellcasting twice. It can replace one attack with a use of Spellcasting. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

  - name: Eldritch Blast
    desc: "Ranged Spell Attack: +7 to hit, range 120 ft., up to two targets. Hit: 11 (1d10 + 6) force damage per beam. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  - name: Chill Touch
    desc: "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (1d10 + 6) necrotic damage, and the target can't regain hit points until the end of the creature's next turn. Duis aute irure dolor in reprehenderit in voluptate velit."

  - name: Hex
    desc: "One creature within 60 ft. must succeed on a Charisma saving throw. On failure, add 1d6 to attack rolls and subtract 1d6 from ability checks made using a specific ability. Excepteur sint occaecat cupidatat non proident sunt in culpa."

[column-break]

reactions:
  - name: Counterspell
    desc: "The creature uses its reaction to attempt to interrupt a spell it sees a creature casting within 60 ft. The caster must make an Intelligence saving throw against the creature's spell save DC. On a failed save, the spell is countered. On a successful save, the spell is cast normally. Lorem ipsum dolor sit amet."

  - name: Parry
    desc: "The creature uses its reaction to add its Charisma modifier to its AC against one attack that would hit it this turn. This ability can cause an attack that hit to miss. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."

  - name: Defensive Reaction
    desc: "The creature can use its reaction to reduce damage from a single source by half, using its innate magical defenses. This ability recharges after a short rest. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."

  - name: Arcane Reaction
    desc: "When a creature the creature can see within 30 ft. makes an attack roll, an ability check, or a damage roll, the creature can use its reaction to subtract 1d4 from the roll. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
```

**Expected Result:**
- Column 1: name, ac, hp, hit_dice, speed, stats, traits (substantial content)
- Column 2: actions (substantial content)
- Column 3: reactions (substantial content)

Each `[column-break]` marker creates a new column boundary. With 3 columns and manual breaks, automatic balancing is disabled.

---

## Test Case 4: Three Columns with Balanced Content

```statblock
columns: 3
forceColumns: true
name: Test Creature 4
ac: 14
hp: 65
hit_dice: 7d8 + 25
speed: 30 ft. fly 60 ft.
stats: [14,16,16,14,15,17]

traits:
  - name: Spellcasting
    desc: "The creature is a 5th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It has the following warlock spells prepared: Cantrips (at will) - Eldritch Blast, Mage Hand. 1st level (4 slots) - Armor of Agathys, Hex, Hellish Rebuke. 2nd level (3 slots) - Darkness, Suggestion. 3rd level (2 slots) - Counterspell, Summon Lesser Demons."

  - name: Dark Resilience
    desc: "The creature has resistance to cold, fire, lightning, necrotic, and poison damage. It also has immunity to being charmed and frightened."

  - name: Devil Tongue
    desc: "The creature can speak the languages it knew in life. It can understand all languages it hears."

[column-break]

actions:
  - name: Multiattack
    desc: "The creature makes two Eldritch Blast attacks or uses Spellcasting twice. It can replace one attack with a use of Spellcasting. Lorem ipsum dolor sit amet, consectetur adipiscing elit."

  - name: Eldritch Blast
    desc: "Ranged Spell Attack: +7 to hit, range 120 ft., up to two targets. Hit: 11 (1d10 + 6) force damage per beam. Ut enim ad minim veniam, quis nostrud exercitation."

  - name: Chill Touch
    desc: "Melee Spell Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (1d10 + 6) necrotic damage, and the target can't regain hit points until the end of the creature's next turn. Duis aute irure dolor."

  - name: Hex
    desc: "One creature within 60 ft. must succeed on a Charisma saving throw. On failure, add 1d6 to attack rolls and subtract 1d6 from ability checks. Excepteur sint occaecat cupidatat."

[column-break]

reactions:
  - name: Counterspell
    desc: "The creature uses its reaction to attempt to interrupt a spell it sees a creature casting within 60 ft. The caster must make an Intelligence saving throw. On a failed save, the spell is countered."

  - name: Parry
    desc: "The creature uses its reaction to add its Charisma modifier to its AC against one attack that would hit it this turn, potentially causing it to miss. Adds damage mitigation."

  - name: Defensive Reaction
    desc: "The creature can use its reaction to reduce damage from a single source by half, using its innate magical defenses. This ability recharges after a short rest. Lorem ipsum dolor sit."
```

**Expected Result:**
- Column 1: name, ac, hp, hit_dice, speed, stats, traits
- Column 2: actions
- Column 3: reactions

Content is substantial enough to fill all 3 columns.

---

## Test Case 5: Column Break Exceeding Available Columns

```statblock
columns: 2
forceColumns: true
name: Test Creature 5
ac: 13
hp: 40
hit_dice: 4d8 + 12
speed: 30 ft.
stats: [12,14,14,12,13,16]

traits:
  - name: Trait One
    desc: "In column 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."

  - name: Trait Two
    desc: "Still in column 1. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."

[column-break]

actions:
  - name: Action One
    desc: "In column 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud."

  - name: Action Two
    desc: "Still in column 2. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."

[column-break]

reactions:
  - name: Reaction
    desc: "Should NOT create column 3 (only 2 columns allowed). This content stays in column 2 or wraps. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."
```

**Expected Result:** The third column break should be ignored since only 2 columns are configured. All content beyond column 2 stays in column 2.

---

## Important Notes

**Height Requirement:**
- Columns only activate if the total content height exceeds ~600px
- Use multiple traits, actions, and descriptions with substantial text to reach this threshold
- `forceColumns: true` helps ensure columns are used

**Implementation:**
The manual column break feature:
1. Detects `[column-break]` as a literal line in the statblock YAML
2. Converts it to an internal column-break marker node
3. Does NOT render as visible text
4. Forces the next content to start in a new column
5. Respects the configured column limit (ignores extra breaks)
6. Only applies when columns > 1 AND content height > 600px
7. Preserves automatic column balancing when no breaks are present

**YAML Source Position:**
The position of `[column-break]` in your YAML source determines where the visual break occurs:
- Place it after the last property of the section that should appear before the break
- Example: If you want traits in column 1 and actions in column 2, place `[column-break]` after the last trait item

