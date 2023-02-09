// Variables
let billValue = document.querySelector('.billvalue');
let numberofpeople = document.querySelector('.numberofpeople');
let button__reset = document.querySelector('.button__reset');
let tipperson = document.querySelector('.tipperson');
let totalperson = document.querySelector('.totalperson');
let button__percentage = document.querySelectorAll('.button__percentage');

// Variable to contain current % of tip
let CurrentPercenateTip = [];

button__percentage.forEach(element => element.addEventListener("click", () => {
    numberofpeople.value == 0 ? tipperson.innerHTML = 0 : tipperson.innerHTML = ((billValue.value / numberofpeople.value) * 0.01 * element.value).toFixed(2);
    numberofpeople.value == 0 ? totalperson.innerHTML = 0 : totalperson.innerHTML = (Number((billValue.value / numberofpeople.value)) + Number(tipperson.innerHTML)).toFixed(2);
    if (tipperson.innerHTML == 0.00) tipperson.innerHTML = 0;
    if (totalperson.innerHTML == 0.00) totalperson.innerHTML = 0;
}));


button__reset.addEventListener("click", () => {
    numberofpeople.value = 0;
    billValue.value = 0;
})
