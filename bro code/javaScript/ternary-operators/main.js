// ternary operator = a shorcut to if{} and else{} statements
//                    Helps to assign a variable based on a condition
//                    condition ? condeIfTrue : codeIfFalse;

let age = 21;

let message = age >= 18 ? 'You\'re an adult' : 'You\'re a minor';


console.log(message); // You're a minor

let time = 12;
let greeting =  time < 12 ? "Good morning" : "Good afternoon!";

console.log(greeting) // Good afternoon!

let isStudent = true;
let message2 = isStudent ? "You're student" : "You are NOT a student";

console.log(message2) // You're a student

let purchaseAmmount = 125;
let discount = purchaseAmmount >= 100 ? 10 : 0 ;

console.log(`Your total is $${purchaseAmmount - purchaseAmmount * (discount / 100)}`)