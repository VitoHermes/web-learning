
document.getElementById("calculate").addEventListener("click", () => {
    // 在点击时获取最新的income值
    const income = document.getElementById("income").value;
    // 将字符串转换为数字
    const incomeNumber = parseFloat(income);
    if (isNaN(incomeNumber)) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.color = "red";
        return;
    }
    document.querySelector(".error").style.display = "none";
    const result = document.querySelector(".result");

    // 计算税金额
    let tax = taxCalculator(incomeNumber);
    
    result.style.display = "block";
    result.innerText = `Your Tax is : ${tax.toFixed(2)}`;
});

document.getElementById("reset").addEventListener("click", () => {
    document.querySelector(".error").style.display = "none";
    document.getElementById("income").value = "";
    document.querySelector(".result").style.display = "none";
});

function taxCalculator(income) {
    let tax = 0;
    if (income < 18200) {
        tax = 0;
    } else if (income < 45000) {
        tax = (income - 18200) * 0.19;
    } else if (income < 120000) {
        tax = (income - 45000) * 0.325 + 5092;
    } else if (income < 180000) {
        tax = (income - 120000) * 0.37 + 29467;
    } else {
        tax = (income - 180000) * 0.45 + 51667;
    }
    return tax;
}