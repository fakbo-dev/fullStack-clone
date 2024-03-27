// -------------------------------------
// REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }


let age = 15;

const result = age >= 18 ? "You are elegible to vote" : "You are not eligible to vote yet";


console.log(result);


// Create a program which checks if number is positive, negative or zero

let number = 1;

const checker = number >= 0 ? (number === 0 ? "zero" : "Positive") : "Negative number";


//If the person have money they can "buy products"
//If the person don't have any money "They should bring money"

const money = true;
const person = money === true ? "buy Products" : "They should bring money";

console.log(checker);
console.log(person);