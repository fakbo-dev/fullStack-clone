// Write a JavaScript program to find the number of even
// values up to  a given number

const countEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for( let i = 0; i < num; i += 1) {
        returnArray.push(i);
    }
    return returnArray;
};

console.log(countEvenNumbers(createArrayOfNumbers(6)));
console.log(countEvenNumbers(createArrayOfNumbers(9)));

