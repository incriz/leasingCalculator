const leasingElement = document.getElementById('leasing');
const leasingValueElement = document.getElementById('leasing-value');

const downPaymentElement = document.getElementById('down-payment');
const downPaymentValueElement = document.getElementById('down-payment-value');

const leasingTermElement = document.getElementById('leasing-term');
const leasingTermValueElement = document.getElementById('leasing-term-value');

const monthlyPayment = document.getElementById("monthly-payment")
const amountAgreement = document.getElementById("amount-agreement")


let initialLeasing = +leasingElement.value;
let initialDownPayment = +downPaymentElement.value
let initialLeasingTerm = +leasingTermElement.value

const R = 0.17 + 0.06


function calculator() {
    console.log("initialLeasing>>", initialLeasing, "initialDownPayment>>", initialDownPayment, "initialLeasingTerm>>", initialLeasingTerm)
    let initialPayment = initialLeasing / 100 * initialDownPayment
    console.log("initialPayment>>", initialPayment)
    let monthPayment = initialLeasing - initialPayment
    console.log("monthPayment>>", monthPayment)
    let result = Math.ceil((monthPayment * R) / (1 - Math.pow((1 + R), -initialLeasingTerm)))
    let sum = Math.ceil(result * initialLeasingTerm + initialPayment)

    console.log("monthlyPayment >>", result, "amountAgreement >>", sum)

    monthlyPayment.innerHTML = String(result)
    amountAgreement.innerHTML = String(sum)
}




leasingElement.addEventListener('input', function (event) {
    let value = parseInt(event.target.value);
    leasingValueElement.innerHTML = formatNumber(value) + " ₽";
    initialLeasing = +value
    calculator()
});


downPaymentElement.addEventListener('input', function (event) {
    let value = parseInt(event.target.value);
    downPaymentValueElement.innerHTML = value + '%';
    initialDownPayment = +value;
    calculator()
});


leasingTermElement.addEventListener('input', function (event) {
    let value = parseInt(event.target.value);
    leasingTermValueElement.innerHTML = value + ' месяцев';
    initialLeasingTerm = +value
    calculator()
});

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


calculator()


// function sliderLeasing() {
//     let valPercent = (leasingElement.value / leasingElement.max) * 100;
//     leasingElement.style.background = `linear-gradient(to right, #000000 ${valPercent}%, #d5d5d5 ${valPercent}%, #d5d5d5)`;
// }
//
//
// function sliderPayment(){
//     let valPercent = (downPaymentElement.value / downPaymentElement.max) * 100;
//     downPaymentElement.style.background = `linear-gradient(to right, #000000, ${valPercent}%, #d5d5d5 ${valPercent}%, #d5d5d5)`;
// }
//
// function sliderTerm(){
//     let valPercent = (leasingTermElement.value / leasingTermElement.max) * 100;
//     leasingTermElement.style.background = `linear-gradient(to right, #000000, ${valPercent}%, #d5d5d5 ${valPercent}%, #d5d5d5)`;
//     console.log(leasingTermElement.value)
// }
