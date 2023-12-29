/*
1.随机生成一个 1 到 100 之间的自然数。
2.记录玩家当前的轮数。从 1 开始。
3.为玩家提供一种猜测数字的方法。
4.一旦有结果提交，先将其记录下来，以便用户可以看到他们先前的猜测。
5.然后检查它是否正确。
6.如果正确：
 1.显示祝贺消息。
 2.阻止玩家继续猜测（这会使游戏混乱）。
 3.显示控件允许玩家重新开始游戏。
7. 如果出错，并且玩家有剩余轮次：
 7.1告诉玩家他们错了。
 7.2允许他们输入另一个猜测。
 7.3轮数加 1。
8.如果出错，并且玩家没有剩余轮次：
 8.1告诉玩家游戏结束。
 8.2阻止玩家继续猜测（这会使游戏混乱）。
 8.3显示控件允许玩家重新开始游戏。
9.一旦游戏重启，确保游戏的逻辑和 UI 完全重置，然后返回步骤 1。
*/


// 1.随机生成一个 1 到 100 之间的自然数。 floor 向下取整数
let randomNumber = Math.floor(Math.random() * 100) + 1;

// const 创建常量
const guessesMin = document.querySelector(".guesses-min");
const guessesMax = document.querySelector(".guesses-max");
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//let 创建变量，猜测次数和重置按钮
let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guessesMin.textContent = "1";
        guessesMax.textContent = "100";
        //初始化guesses的字段，下限和上限是1-100
    }
    // guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) { //猜对了
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) { // 最多猜10次
        lastResult.textContent = "!!!GAME OVER!!!";
        lowOrHi.textContent = "";
        setGameOver();
    } else { // 猜错了
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) { // 偏小
            if (userGuess > guessesMin.textContent)  {guessesMin.textContent = userGuess;}
            lowOrHi.textContent = "Last guess was too low!";
        } else if (userGuess > randomNumber) { // 偏大
            if (userGuess < guessesMax.textContent) { guessesMax.textContent = userGuess;}
            lowOrHi.textContent = "Last guess was too high!";
        }
    }
    guessCount++; // 下一个循环
    guessField.value = ""; // 清空并且聚集
    guessField.focus();
}

//提交按钮点击后，调用一次checkGuess函数
guessSubmit.addEventListener("click", checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1; // 重置次数
    // 把文本都清空,注意选择器的用法
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }
    // 删除reset按钮
    resetButton.parentNode.removeChild(resetButton);

    //恢复按钮
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    // 生成新的随机数
    randomNumber = Math.floor(Math.random() * 100) + 1;
}