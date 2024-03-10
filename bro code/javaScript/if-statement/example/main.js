// IF STATEMENTS = if a condition is true, execute some code
//                 if not, do something else

const  myText = document.querySelector('input');
const btn = document.querySelector('button');
const para = document.querySelector('p');
let age;


btn.addEventListener('click', () => {
    age = myText.value;
    age = Number(age);

    if (age >= 100) {
        para.textContent = 'You are TOO OLD to enter this site';

    } else if (age === 0) {
        para.textContent = 'You can\'t enter, You were just born';

    } else if (age >= 18) {
        para.textContent = 'You are old enough to enter this site';

    } else if (age < 0) {
        para.textContent = 'Your age can\'t be below 0';

    } else {
        para.textContent = 'you must be 18+ to enter this site';
    }
})
