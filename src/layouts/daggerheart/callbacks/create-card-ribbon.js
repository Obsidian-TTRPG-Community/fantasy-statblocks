const ribbonBlock = document.createElement("div");
ribbonBlock.classList.add("daggerheart-card-ribbon");

const levelBlock = document.createElement("div");
levelBlock.classList.add("card-level");

const levelText = document.createElement("span");
levelText.innerHTML = monster.level;

levelBlock.append(levelText);

const domainBlock = document.createElement("div");
domainBlock.classList.add("card-domain");
domainBlock.classList.add(monster.domain);

const domainText = document.createElement("span");
domainText.innerText = monster.domain;
domainBlock.append(domainText)

ribbonBlock.append(levelBlock);
ribbonBlock.append(domainBlock);

return ribbonBlock;