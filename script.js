// Variables
const billValue = document.querySelector('.billvalue');
const numberofpeople = document.querySelector('.numberofpeople');
const buttonReset = document.querySelector('.button__reset');
const tipPerson = document.querySelector('.tipperson');
const totalPerson = document.querySelector('.totalperson');
const tipButton = document.querySelectorAll('.button__percentage');
const input = document.querySelectorAll('input');
const customPercentage = document.querySelector('.button__custom');

// Variable to contain current % of tip
let CurrentPercenateTip = 0;
let tipPersonAmount = 0;
let totalPersonAmount = 0;

tipButton.forEach((element) =>
    element.addEventListener("click", (e) => {
        removeActive();
        CurrentPercenateTip = +e.target.value;
        e.target.classList.add('active');
        calculateOutput();
    })
);

input.forEach((element) =>
    element.addEventListener("input", () => {
        calculateOutput();
    })
);

customPercentage.addEventListener("input", (e) => {
    CurrentPercenateTip = +e.target.value;
    calculateOutput();
})

buttonReset.addEventListener("click", () => {
    numberofpeople.value = 1;
    billValue.value = 0;
    CurrentPercenateTip = 5;
    calculateOutput();
    removeActive();
})

function calculateOutput() {
    if (numberofpeople.value == 0) {
        tipPersonAmount = 0;
        totalPersonAmount = 0;
    } else {
        tipPersonAmount = (
            (billValue.value / numberofpeople.value) /
            100 *
            CurrentPercenateTip
        ).toFixed(2);
        totalPersonAmount = (
            Number(billValue.value / numberofpeople.value) +
            Number(tipPersonAmount)
        ).toFixed(2);
    }
    if (tipPersonAmount == 0.00) tipPersonAmount = 0;
    if (totalPersonAmount == 0.00) totalPersonAmount = 0;

    tipPerson.innerHTML = tipPersonAmount;
    totalPerson.innerHTML = totalPersonAmount;
}

function removeActive() {
    for (let i = 0; i < tipButton.length; i++)
        tipButton[i].classList.remove("active");
}