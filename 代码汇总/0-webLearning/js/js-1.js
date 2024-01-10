// 创建一个函数，用于在body底部增加段落
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "你点击了按钮！";
    document.body.appendChild(para);
}

// 定位到所有按钮
const buttons = document.querySelectorAll("button");

// 遍历每一个按钮，增加监听器
for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}

function updateName() {
    const name = prompt("Enter a name!");
    para1.textContent = `玩家 1：${name}`;
}

// 定位到按钮，增加监听器
const para1 = document.getElementById("button-1");
para1.addEventListener('click', updateName);


