// arrow function = a consise way to write function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code

const hello = (name, age) => {console.log(`Hello ${name}`), console.log(`You are ${age} years old`)};

hello("fakbo", 20);

// another exmple

setTimeout(() => console.log("hello"), 3000);

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares = numbers.map((element) => Math.pow(element, 2));

console.log(squares);

const cube = numbers.map((element) => Math.pow(element, 3));

console.log(squares);

const evenNums = numbers.filter((element) => element % 2 === 0);

console.log(evenNums);

const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((init, element) => init + element);

console.log(total);