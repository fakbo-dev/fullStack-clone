// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object


const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const jsonString = JSON.stringify(names);

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.error(error))
     