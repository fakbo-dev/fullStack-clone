let btnTxt = document.querySelector('button');
let pTxt = document.querySelector('p');

addEventListener('click', initiate)

function initiate() {
    if (btnTxt.textContent === 'Start machine') {
        btnTxt.textContent = 'Stop machine';
        pTxt.textContent = 'The machine is working!!!';
    } else {
        btnTxt.textContent = 'Start machine';
        pTxt.textContent = 'The machine is stopped :c';
    }
}