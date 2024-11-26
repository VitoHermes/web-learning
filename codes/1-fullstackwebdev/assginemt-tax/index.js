
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
    } else if (income < 100) {
        tax = (income - 00) * 0.19;
    }
    return tax;
}