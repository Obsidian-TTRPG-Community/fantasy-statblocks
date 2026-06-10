const headingBlock = document.createElement("div");
headingBlock.classList.add("daggerheart-heading");

const typeBlock = document.createElement("div");
typeBlock.classList.add("card-type");
typeBlock.classList.add(monster.domain);

const typeText = document.createElement("span");
typeText.innerText = monster.type;
typeBlock.append(typeText)

headingBlock.append(typeBlock);

return headingBlock;