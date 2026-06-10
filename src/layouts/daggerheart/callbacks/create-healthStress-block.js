const getStatLine = () => {
    const statLine = document.createElement("div");
    const statClass = `${monster.name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()}-block`;
    statLine.classList.add("adversary-block");
    statLine.classList.add(statClass);

    let numBlocks = monster.qty ? monster.qty : 1;

    for (let i = 1; i <= numBlocks; i++) {
        let adversaryBlock = document.createElement("div");
        let adversaryClass = `${monster.name.replace(/[^a-zA-Z0-9]/g,'-').toLowerCase()}-block`;
        adversaryBlock.classList.add("stat-line");
        adversaryBlock.classList.add(adversaryClass);

        // add adversary name/number
        adversaryBlock.append(getAdversaryNameBlock(monster.name, i));
        
        // add hp title
        adversaryBlock.append(document.createElement("br"));
        adversaryBlock.append(getStatNameBlock("HP"));

        // for each hp make checkbox
        for (let h = 0; h < monster.hp; h++) {
            adversaryBlock.append(getCheckboxValueBlock("hp", h));
        }
        
        // add stress title
        adversaryBlock.append(document.createElement("br"));
        adversaryBlock.append(getStatNameBlock("stress"));

        // for each stress make checkbox
        for (let s = 0; s < monster.stress; s++) {
            adversaryBlock.append(getCheckboxValueBlock("stress", s));
        }

        statLine.append(adversaryBlock);
    }
    
    return statLine;
}

const getCheckboxValueBlock = (type, val) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add(`${type}-${val}`);
    checkbox.classList.add("stat-value");
    checkbox.onclick = () => {
        console.log(tp);
    };
    return checkbox;
}

const getStatNameBlock = (statName) => {
    const statNameBlock = document.createElement("span");
    statNameBlock.classList.add("stat-name");
    statNameBlock.innerText = `${statName.toUpperCase()}: `;
    return statNameBlock;
}

const getAdversaryNameBlock = (adversaryName, num) => {
    const adversaryNameBlock = document.createElement("span");
    adversaryNameBlock.classList.add("adversary-name");
    adversaryNameBlock.innerText = `${adversaryName.toUpperCase()} #${num}: `;
    return adversaryNameBlock;
}

const statFullBlock = document.createElement("div");
statFullBlock.classList.add("stat-block");
statFullBlock.append(getStatLine());

return statFullBlock;
