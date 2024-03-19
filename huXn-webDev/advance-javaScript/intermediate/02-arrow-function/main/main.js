// Arrow functions, also known as fat arrow functions, are a concise and shorter way to define functions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional function expressions


// function greet(username) {
//     return `Hello ${username}`
// }


//Restructuring 

const greet = (username) => {
    return `Hello ${username}`;
};
console.log(greet("fakbo"));


// function double(n) {
//     return n * 2;
// }

// Restructure

const double = n => n * 2;
console.log(double(125));