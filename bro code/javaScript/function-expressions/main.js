// function declaration = define a reusable block of code
//                        that performs a specific task

function hello() {
    console.log("hello")
}

// function expressions = a way to define function as
//                        values or variables

// 1. callbacks in asynchronous operations
// 2. higher-Order functions
// 3. Clousures
// 4. Event listeners


// instead of using a function declaration  we are going to pass afunction expression as an agument to the set timeout function instead of a call back we will create a function we will pass an entire function as an argument


setTimeout(hello, 3000) // ❌

setTimeout(function() {
    console.log("Hello")
}, 3000);               // ✔

// in javaScript is legal to pass an entire function as an argument or treat it as a value

const numbers = [1, 2, 3, 4, 5, 6, 7];
const squares = numbers.map(square);

console.log(squares)

function square(element) {
    return Math.pow(element, 2);
} // ❌

// other way 

// one of the benefits od doing this is that we're not polluting the global name space with function names we're going to be using this function once there's no need to declare a function 


const squares2 = numbers.map(function(element) {
    return Math.pow(element, 2);
}); // ✔

const dube = numbers.map(function(element) {
    return Math.pow(element, 3);
});

const isEven = numbers.filter(function(element) {
    return element % 2 === 0;
});

const isOdd = numbers.filter(function(element) {
    return element % 2 !== 0;
});
const maxNum = numbers.reduce(function(init, element) {
    return init + element;
});

console.log(squares2)

