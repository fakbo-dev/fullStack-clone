// destructuring = extract values from arrays and objects.
//                 then assign then to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring
//                 5 examples


//! EXAMPLE ONE 
//* SWAP THE VALUE OF TWO VARIABLES (destructuring)

let a = 1;
let b = 2;

[a, b] = [b,a];

console.log(a); // 2 not 1
console.log(b); // 1 not 2

//* SWAP @ ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//* ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//* EXTRACT VALUES FROM OBJECT

const person1 ={
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook",
};

const person2 ={
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
};


//* const {firstName, lastName, age, job} = person1;

const {firstName, lastName, age, job = "Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//* DESTRCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job}) {
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);