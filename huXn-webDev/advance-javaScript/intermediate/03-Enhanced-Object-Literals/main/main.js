// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods


function user2(name, age, work) {
    return {
        name: name,
        age: age,
        work: work,
        intro: function () {
            return `Hi mi name is ${name} i'm ${age} years old & I'am a ${work}`;
        }
    }
}


//Shorthand for properties 

function user(name, age, work) {
    return {
        name,
        age,
        work,
        intro() {
            return `Hi mi name is ${name} i'm ${age} years old & I'am a ${work}`;
        },
    };
};

const fakbo = user("fakbo", 20, "Programmer");
const amy = user2("Amy", 18, "Designer");


console.log(fakbo.intro());
console.log(amy.intro());

