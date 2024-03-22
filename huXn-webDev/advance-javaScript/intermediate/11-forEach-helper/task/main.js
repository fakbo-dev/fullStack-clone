// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of number & add that with sum variable.
// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// 5. print the sum variable.



const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = 0;

function adder(n) {
    total += n;
}

arrNumber.forEach(adder);

console.log(total);