// The rest parameter syntax allows a function to accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.



function user(x, ...userData) {
    console.log(x);
    console.log(userData);
}

console.log(user("Fakbo", 20, "Programming"));


function person(firstName, lastName, ...hobbies) {
    console.log("first Name: ", firstName);
    console.log("last Name: ", lastName);
    console.log("Hobbies: ", hobbies);
}

person("Fakbo", "WebDev", "Programmer", "gamer", "Reader", "Artist", "Chef");