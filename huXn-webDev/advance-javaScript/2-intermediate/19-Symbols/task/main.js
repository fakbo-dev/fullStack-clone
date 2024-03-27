// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

const mySymbol = Symbol("foo");

console.log(typeof mySymbol);


const obj = {};

obj.mySymbol = "foo";

console.log(obj);


for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}