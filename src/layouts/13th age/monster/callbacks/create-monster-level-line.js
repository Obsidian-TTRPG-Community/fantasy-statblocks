let base_string = `${monster.level} level ${monster.role}`;

if (monster.size) {
    base_string = `${monster.size} ${base_string}`;
}

const monster_strength = document.createElement("p");
monster_strength.innerHTML = base_string;
monster_strength.classList.add("monster-strength");

if (monster.type) {
    const type = `[${monster.type}]`;
    const type_block = document.createElement("span");
    type_block.classList.add("type");
    type_block.innerText = type;

    monster_strength.append(type_block)
}

return monster_strength;
