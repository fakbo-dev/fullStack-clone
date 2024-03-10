// variable =  A container that store a value.
//             Behaves as if it were the value it contains.

//1. declaration  let x;
//2. assigment    x = 100;

let x; //the variable name need to be unique 
let y;

x = 100;

//DATA TYPE

//Number
let age = 23;
let price = 10.99;
let gpa = 2.1;

console.log(`you are ${age} years old`);
console.log(`the prices is $${price}`);
console.log(`your gpa is: ${gpa}`);

//Strings

let firstName = 'fakbo';
let favoriteFood = 'pizza';
let email = 'fakbo0206@gmail.com';

console.log(typeof firstName);
console.log(`your name is ${firstName}`);
console.log(`my favorite food is ${favoriteFood}`);

//Booleans

let online = true;
let forSale = false;
let isStudent = true;

console.log(`fakbo is online :${online}`);
console.log(`is this car for sale :${forSale}`);
console.log(`enrolled: ${isStudent}`);

//example 

let fullName = 'Mauricio Oropeza';
let yearsOld = 20;
let student = true;

document.getElementById('p1').textContent = `Your name is ${fullName}`;
document.getElementById('p2').textContent = `You are ${yearsOld} years old`;
document.getElementById('p3').textContent = `Enrolled: ${student}`;
