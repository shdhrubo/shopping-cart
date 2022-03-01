//function for product plus or minus
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}
//calculate total function
function getInputValue(product) {
    const phoneInput = document.getElementById(product + '-input');
    const phoneNumber = parseInt(phoneInput.value);
    return phoneNumber;

}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal/10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = total;
}
//event for phone  plus
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
//event for phone minus
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})
//event for case plus
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
//event for case minus
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})