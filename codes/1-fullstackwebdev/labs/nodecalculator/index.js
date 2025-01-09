const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calResult(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
    }
}

function cal(answer) {
    const operators = [];
    const operands = [];
    const tokens = answer.match(/\d+|\+|\-|\*|\/|\(|\)/g);

    const precedence = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
    };

    const applyOperator = () => {
        const b = operands.pop();
        const a = operands.pop();
        const operator = operators.pop();
        const result = calResult(operator, a, b);
        operands.push(result);
    };

    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const isNumber = !isNaN(parseInt(token));

        if (isNumber) {
            operands.push(parseInt(token));
        } else if (token === "(") {
            operators.push(token);
        } else if (token === ")") {
            while (operators[operators.length - 1] !== "(") {
                applyOperator();
            }
            operators.pop(); // Remove the '('
        } else {
            while (
                operators.length &&
                precedence[operators[operators.length - 1]] >= precedence[token]
            ) {
                applyOperator();
            }
            operators.push(token);
        }
    }

    while (operators.length) {
        applyOperator();
    }

    return operands[0];
}

const askQuestion = () => {
    rl.question("Hello, please input:", (answer) => {
        if (answer === "EXIT") {
            rl.close();
            return;
        }
        const result = cal(answer);
        console.log(result);
        askQuestion();
    });
};

askQuestion();
