let finalResult;

let evenOddResult;

// Add your code here

//Variables Base
let x = 12;
let y = 12;
let q = 2;
let w = 4;

//combinaciones

let xy = x + y; // 24
let wq = w - q; // 2

//resultado
 finalResult = xy * wq; //48
evenOddResult = finalResult % 2; // 0 es numero par

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
    