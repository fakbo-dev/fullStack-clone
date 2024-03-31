// Write a JavaScript program to check two
// numbers and return true if one of the numbers
// is 100 or if the sum of the two numbers is
// 100


const checkNumbers = (a, b) => {
    return (a === 100 || b === 100 || a + b === 100) ? true : false;
};

console.log(checkNumbers(80, 20));


