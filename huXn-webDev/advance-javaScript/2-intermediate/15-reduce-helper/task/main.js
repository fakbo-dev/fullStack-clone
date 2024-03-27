// -------------------------------------
// Write a function called calculateProduct that takes an array of numbers as an argument and returns the product of all the numbers in the array.

// Write the calculateProduct function using the reduce() method to achieve this task.

// Something like this 👇
// const numbers = [2, 3, 4, 5];

// const product = calculateProduct(numbers);
// console.log(product); // 120
// -------------------------------------


function calculateProduct(arr) {
    return arr.reduce((p, c) => p * c);
}

const numbers = [2, 3, 4, 5];

const sum = calculateProduct(numbers);

console.log(sum);