// Array = a variable like structure that can hold more than 1 value


let fruits = ["apple", "orange", "banana"];

console.log(fruits[0]) //apple
console.log(fruits[1]) // orange
console.log(fruits[2]) // banana

fruits[0] = "banana";

console.log(fruits[0]); // coconut

//add an element to the end with .push method

fruits.push("pear");

//remove an element in the end with .pop method

fruits.pop();

// add an element to the beginning with .unshift method

fruits.unshift("mango");

// remove an element to the beginning with .shift method
fruits.shift();


// get the length of an array

let numOfFruits = fruits.length;

console.log(numOfFruits); // 3


// found the index for one value 

let index = fruits.indexOf("apple"); // 0

index = fruits.indexOf("pizza"); // -1 (doesn't exist)

// loop for arrays

for( let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for revers 

for(let i = fruits.length - 1; i > 0; i--) {
    console.log(fruits[i]);
}

//shorcut when you don't need to know the index of an value of the array 

for(let fruit of fruits) {
    console.log(fruit)
}


// for sort in alphabetically order

fruits.sort();

//for reverse method

fruits.sort().reverse();

