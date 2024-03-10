// spread operator = ... allows an iterable such as an
//                   array of string to be expanded
//                   into separate elements
//                   (unpacks the elements)


// find the highest value
let numbers = [1, 2, 3, 4, 5];
let maximun = Math.max(numbers); // NaN ❌
maximun = Math.max(...numbers); // 5

// when you use this operator imagine you are opening a box and take it all the content inside
let minimun = Math.min(...numbers); // 1

//we can also use it in strings
let username = "Mauricio Oropeza";
let letters = [...username];

console.log(letters) // print each letter of my Name and return an array of characters

//join back together

letters = [...username].join("-");

console.log(letters) //M-a-u-r-i-c-i-o- -O-r-o-p-e-z-a

//create a shallow copy
let fruits = ["apple", "orange", "banana"];
let newFruits = [...fruits]; //same array  as fruits but store in a different variable

let vegetable = ["carrot", "celery", "potatoes"];

//This array contain all elements from this two arrays we can use the spread operator to combine arrays we can also add values directly with a comma separator

let foods = [...fruits, ...vegetable, "eggs", "milk"];
