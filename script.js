// Variables
let billValue = document.querySelector('.billvalue');
let numberofpeople = document.querySelector('.numberofpeople');
let button__reset = document.querySelector('.button__reset');
let tipperson = document.querySelector('.tippreson');
let totalperson = document.querySelector('.totalperson');
let button__percentage = document.querySelector('.button__percentage');


//Current tip percentage
let currentTipPercentage = [];

button__percentage.addEventListener("click", () => {
    currentTipPercentage = button__percentage.value;
})

button__reset.addEventListener("click", () => {

    numberofpeople.value = 1;

    billValue.value = currentTipPercentage;
})

function calculate() {
    if (billValue.value && numberofpeople.value) {
        return tipperson.value = (billValue.value / numberofpeople.value);
    }
}

totalperson.innerHTML = 5344;