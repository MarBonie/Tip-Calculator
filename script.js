// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

let billValue = dcoument.querySelector('.billvalue');
let numberofpeople = dcoument.querySelector('.numberofpeople');
let button__reset = dcoument.querySelector('.button__reset');
let tipperson = dcoument.querySelector('.tippreson');
let totalperson = dcoument.querySelector('.totalperson');

// Calculator Display
let realTimeScreenValue = []

// To Clear

button__reset.addEventListener("click", () => {

    realTimeScreenValue = [''];
    tipperson.innerHTML = 0;
    totalperson.innerHTML = 0;
    totalperson.className = 'totalperson';
    tipperson.className = 'tipperson';
})

// Get value of any button clicked and display to the screen

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            totalperson.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})