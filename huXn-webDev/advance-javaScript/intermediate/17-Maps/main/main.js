// Map is a built-in data structure introduced in (ES6) that allows you to store key-value pairs where both the keys and values can be of any data type. It is similar to an object, but with a few key differences:

// -> Keys can be of any data type: Unlike objects, where keys are limited to strings and symbols, Map allows you to use any data type as keys, including numbers, booleans, objects, and even other Map instances.

// -> Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while object keys may not be guaranteed to be in a specific order.

// -> Iteration: Map provides built-in methods for easy iteration over its elements.

// The syntax to create a Map is as follows:
// const myMap = new Map();

// You can also initialize a Map with an array of key-value pairs using the Map constructor:
// const myMap = new Map([
//   [key1, value1],
//   [key2, value2],
// ]);

// Here, key1, key2, etc., can be any data type, and value1, value2, etc., can be any value associated with the respective keys.

// Map provides various methods for managing and accessing its elements, such as set(), get(), has(), delete(), clear(), and more.

// Map is a powerful data structure in JavaScript, and it provides a flexible and efficient way to manage key-value data with various data types as keys.


const map = new Map();


const key1 = "String";
const key2 = {};
const keyThree = function () { };


map.set(key1, "Value of key One");
map.set(key2, "Value of key two");
map.set(keyThree, "Value of key three");

console.log(map);
console.log(map.keys());
console.log(map.values());
// ?console.log(map.delete(key2));
console.log(map.size);



//How to use


for (let [key, value] of map) {
    console.log(`${key} -- ${value}`);
}


//iterate over the keys

for (let key of map.keys()) {
    console.log(key);
}

// iterate over the values 
for (let value of map.values()) {
    console.log(value);
}