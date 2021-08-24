function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const valueInNumber = parseFloat(valueInText);
    inputField.value = '';
    return valueInNumber;

}

function getInnerTaxtValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const valueInText = fieldTag.innerText;
    const valueInNumber = parseFloat(valueInText);
    return valueInNumber;
}
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTaxtValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;

}
function updateBalance(amount, isAdding) {
    const previousBalance = getInnerTaxtValue('balance-total')
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else if (isAdding == false) {
        newBalance = previousBalance - amount;
    }

    document.getElementById('balance-total').innerText = newBalance;

}
//handle deposite
document.getElementById('deposite-btn').addEventListener('click', function () {
    const amount = getInputValue('deposite-input');
    if (amount > 0) {
        updateTotal('deposite-total', amount);
        updateBalance(amount, true);
    }
});

//handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTaxtValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false);
    }
})