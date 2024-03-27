// 1. Create a function name (sum) which takes (unlimited) amount of parameters
// 2. No matter how many parameters you provide it will return the sum value of those params!


function sum(...unlimited) {
    const total = unlimited.reduce((accumulate, currentValue) => accumulate + currentValue);
    return total;

}

console.log(sum(2, 5, 6, 7));

