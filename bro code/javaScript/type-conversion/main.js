// Type conversion = change the datatype of a value to another
//                   (string, numbers, booleans)

let age = window.prompt('How old are you?');

age += 1;

console.log(age); //251  String❌

age = Number(age);

console.log(age) // 26  Number ✔


let x = 'pizza';
let y = 'pizza';
let z = 'pizza';

x = Number(x);
y = String(x);
z = Boolean(x);


console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // pizza String
console.log(z, typeof z); // true 'boolean'


x = '';
y = '';
z = '';

x = Number(x);
y = String(x);
z = Boolean(x);


console.log(x, typeof x); // 0 'number'
console.log(y, typeof y); //  String
console.log(z, typeof z); // false 'boolean'


let q;
let w;
let r;

q = Number(x);
w = String(x);
r = Boolean(x);


console.log(q, typeof q); // NaN 'number'
console.log(w, typeof w); //  undefined String
console.log(r, typeof r); // false 'boolean'


