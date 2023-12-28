function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "你点击了按钮！";
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

const para1 = document.getElementById("button-1");
para1.addEventListener('click', updateName);

function updateName() {
    const name = prompt("Enter a name!");
    para1.textContent = `玩家 1：${name}`;
}
