// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Functions makes the program easier as each small task is divided into a function
// Function increases readability.
// DRY -> Don't Repeat Yourself
// function name(parameterIfAny) {...}

function greet() {
    console.log("Hello from a function");
}

// Call, run, execute

greet();

//Parameter, local value

function sayHello(username) {
    console.log(`Hello ${username}`);
}

sayHello("fakbo");


// return -> function
function add(x, y) {
    return x + y;
}

const rest = add(10, 20);