// callback = a function that is passed as an argument
//            to another function.

//            used to handle asynchronous operations:
//            Reading a file
//            Network request
//            Interacting with databases

//            "Hey, when you're done, call this next"

//examples

//using callback we are guaranteeing that the function passed in will execute next

function hello(callback) {
    console.log("Hello!");
    callback();
}

function wait() {
    console.log("wait")
}

function leave() {
    console.log("leave")
}

function goodbye() {
    console.log("goodbye");
}

// second example
sum(display, 1, 2) // 3

function sum(callback,  x, y) {
    let result = x + y;
    callback(result);
}

function display(result) {
    console.log(result);
}

// sum function calculate the result first then after that process is finished then display the result to the console