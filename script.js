// Variables
const billValue = document.querySelector('.billvalue');
const numberOfPeople = document.querySelector('.numberofpeople');
const buttonReset = document.querySelector('.button__reset');
const tipPerson = document.querySelector('.tipperson');
const totalPerson = document.querySelector('.totalperson');
const tipButton = document.querySelectorAll('.button__percentage');
const input = document.querySelectorAll('input');
const customPercentage = document.querySelector('.button__custom');
const zeroMessage = document.querySelector('.zerovalue');

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
        removeCustomPercentage();
    })
);

numberOfPeople.addEventListener("input", () => {
    if (numberOfPeople.value == 0) {
        zeroMessage.classList.add("zerovalue__visible");
        numberOfPeople.classList.add("zerovalueborder");
    } else {
        zeroMessage.classList.remove("zerovalue__visible");
        numberOfPeople.classList.remove("zerovalueborder");
    }
    calculateOutput();
}
);

billValue.addEventListener("input", () => {
    calculateOutput();
}
);

customPercentage.addEventListener("input", (e) => {
    CurrentPercenateTip = +e.target.value;
    removeActive();
    customPercentage.classList.add("activeCustomButton");
    calculateOutput();
})

buttonReset.addEventListener("click", () => {
    numberOfPeople.value = 1;
    billValue.value = 0;
    CurrentPercenateTip = 0;
    calculateOutput();
    removeActive();
})

function calculateOutput() {
    if (numberOfPeople.value == 0) {
        tipPersonAmount = 0;
        totalPersonAmount = 0;
    } else {
        tipPersonAmount = (
            (billValue.value / numberOfPeople.value) /
            100 *
            CurrentPercenateTip
        ).toFixed(2);
        totalPersonAmount = (
            Number(billValue.value / numberOfPeople.value) +
            Number(tipPersonAmount)
        ).toFixed(2);
    }

    tipPerson.innerHTML = '$' + tipPersonAmount;
    totalPerson.innerHTML = '$' + totalPersonAmount;
}

function removeActive() {
    for (let i = 0; i < tipButton.length; i++)
        tipButton[i].classList.remove("active");
    customPercentage.classList.remove("activeCustomButton");
}

function removeCustomPercentage() {
    customPercentage.value = "";
}