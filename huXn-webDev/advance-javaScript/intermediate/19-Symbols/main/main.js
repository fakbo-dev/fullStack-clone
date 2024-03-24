// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed. This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.


const mySymbol = Symbol("My Custom Symbol");


console.log(typeof mySymbol);


//Comparing Symbols


const mySimbol1 = Symbol("name");
const mySimbol2 = Symbol("name");

console.log(mySimbol1 === mySimbol2); //false


const obj = {};

obj[mySimbol1] = "Value 1";
obj[mySimbol2] = "Value 2";

console.log(obj);


const fakbo = {};

fakbo.age = 20;
fakbo.gender = "Male";
fakbo.gender = "Female";
fakbo.mySimbol1 = "Alex";
fakbo.mySimbol2 = "John";
console.log(fakbo);