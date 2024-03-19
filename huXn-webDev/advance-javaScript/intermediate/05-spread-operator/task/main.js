// 1. Make a clone of "arr, arr2" by using spead operator
// 2. Make a clone of "user" object using spread operator

let arr = [1, 2, 3];
let arr2 = [4, 5];

const user = {
    name: "jen",
    age: 22,
};

const clone1 = [...arr, ...arr2];

const clone2 = { ...user };

console.log(clone1);

console.log(clone2);