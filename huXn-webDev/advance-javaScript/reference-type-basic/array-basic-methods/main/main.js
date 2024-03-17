const fruits = ["Apple", "Pomegranate", "Mango", "Strawberry", "Pineapple", "Grapefruit"]
const moreFruits = ["Cambur", "pera", "pina"];


fruits.push("Banana"); //ads a new element to the end of an array and returns the new length of an array

console.log(fruits);
fruits.pop(); // removes the last element of an array and returns the removed element

fruits.shift() // removes the first element of an array and returns the removed element

fruits.unshift("Pear"); //adds a new element to the beginning of an array and returns the new length of an array

const totalFruits = fruits.concat(moreFruits); //joins two or more arrays and returns a result


const pl = ["JavaScript", "Golang", "Python", "PHP"];

const numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang")); // checks if an array contains a specified element

pl.join("-"); //Convert an Array to String

pl.reverse(); // Revers the order of the array

