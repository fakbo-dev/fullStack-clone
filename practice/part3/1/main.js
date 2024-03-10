// write  a JavaScript Program to find the numbers of even digits in an array



const arrayEven = (arr) => {
    return arr.filter(num => num % 2 === 0).length;
};

console.log(arrayEven([1,2,3,4,5,6]));