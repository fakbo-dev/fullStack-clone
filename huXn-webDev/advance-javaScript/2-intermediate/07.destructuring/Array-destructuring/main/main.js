/// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.



const foo = ["one", "two", "three"];


const [x, y, z] = foo;

console.log(x);
console.log(y);
console.log(z);

//////////////

let a, b;

[a = 5, b = 8] = [];


//Parse an Array


function f() {
    return [1, 2];
}

let c, d;

[c, d] = f();

console.log(c);
console.log(d);


//ignore some values from a function


function func() {
    return [1, 2, 3];
}

const [s, , r] = func();

console.log(s);
console.log(r);


// Assigning the rest of an array to a variable

const [one, ...two] = ["one", "two", "three"];

console.log(one);
console.log(two);