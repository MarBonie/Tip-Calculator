// Variables
const billValue = document.querySelector('.billvalue');
const numberofpeople = document.querySelector('.numberofpeople');
const button__reset = document.querySelector('.button__reset');
const tipperson = document.querySelector('.tipperson');
const totalperson = document.querySelector('.totalperson');
const button__percentage = document.querySelectorAll('.button__percentage');
const input = document.querySelector('input');

// Variable to contain current % of tip
const CurrentPercenateTip = [];

button__percentage.forEach(element => element.addEventListener("click", calculateOutput));


button__reset.addEventListener("click", () => {
    numberofpeople.value = 0;
    billValue.value = 0;
})

input.addEventListener('input', updateValue);

function updateValue(e) {
    log.textContent = e.target.value;
}

function calculateOutput(element) {
    if (numberofpeople.value == 0) {
        tipperson.innerHTML = 0;
        totalperson.innerHTML = 0;
    } else {
        tipperson.innerHTML = ((billValue.value / numberofpeople.value) * 0.01 * element.value).toFixed(2);
        totalperson.innerHTML = (Number((billValue.value / numberofpeople.value)) + Number(tipperson.innerHTML)).toFixed(2);
    }
    if (tipperson.innerHTML == 0.00) tipperson.innerHTML = 0;
    if (totalperson.innerHTML == 0.00) totalperson.innerHTML = 0;
}