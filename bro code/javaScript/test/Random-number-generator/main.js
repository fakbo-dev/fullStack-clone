// Random number generator

const btn = document.getElementById('myBtn');
const myLabel = document.getElementById('myLabel');
const min = 1;
const max = 6;
let randomNum;


btn.addEventListener('click', () => {
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum;
});