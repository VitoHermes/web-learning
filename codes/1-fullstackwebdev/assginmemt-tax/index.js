document.getElementById("calculate").addEventListener("click", () => {
    const income = document.getElementById("income").value;
    const taxYear = document.getElementById("taxYear").value;
    const incomeNumber = parseFloat(income);
    if (isNaN(incomeNumber)) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.color = "red";
        return;
    }
    document.querySelector(".error").style.display = "none";
    const result = document.querySelector(".result");
    let taxYearNumber = parseInt(taxYear);
    let tax = taxCalculator(incomeNumber, taxYearNumber);

    result.style.display = "block";
    result.innerText = `Your Tax is : ${tax.toFixed(2)}`;
});

document.getElementById("reset").addEventListener("click", () => {
    document.querySelector(".error").style.display = "none";
    document.getElementById("income").value = "";
    document.querySelector(".result").style.display = "none";
});


const TaxTable_2023 = [
    { min: 0, max: 18200, tax: 0, base: 0 },
    { min: 18201, max: 45000, tax: 0.19, base: 0 },
    { min: 45001, max: 120000, tax: 0.325, base: 5092 },
    { min: 120001, max: 180000, tax: 0.37, base: 29467 },
    { min: 180001, max: Infinity, tax: 0.45, base: 51667 }
]
const TaxTable_2024 = [
    { min: 0, max: 18200, tax: 0, base: 0 },
    { min: 18201, max: 45000, tax: 0.16, base: 0 },
    { min: 45001, max: 120000, tax: 0.30, base: 4288 },
    { min: 120001, max: 190000, tax: 0.37, base: 31288 },
    { min: 190001, max: Infinity, tax: 0.45, base: 51638 }
]


function taxCalculator(income, taxYear) {
    const taxTable = taxYear === 2023 ? TaxTable_2023 : TaxTable_2024;
    const bracket = taxTable.find(b => income <= b.max);
    const { tax, base, min } = bracket;
    return base + (income - min) * tax;
}
