// while loop = repeat some code WHILE some condition is true 

let userName = "";

while (userName === "" || userName === null) {
    userName = window.prompt("Enter your Name");
}
console.log(`Hello ${userName}`);

// do while loop

do {
    userName = window.prompt("Enter your Name");
} while (userName === "" || userName === null);

console.log(`hello ${userName}`);

// another example

let loggedIn = false;
let userName2;
let password;

while(!(loggedIn)) {
    userName2 = window.prompt("Enter your username");
    password = window.prompt("Enter you password");

    if(userName2 === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("you are logged in!")
    }
    else {
        console.log("Invalid credentials Please try again")
    }
}