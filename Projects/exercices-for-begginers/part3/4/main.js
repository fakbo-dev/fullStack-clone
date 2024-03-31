// Write a JavaScript program to get the largest even number from an array of integers;

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,1000, 200000, 5555555555];


const largestEvenNumber = (arr) => {
    const newArray = arr.filter((num) => num % 2 === 0);
    
    return Math.max(...newArray);
};


console.log(largestEvenNumber(test));