// JSON (JavaScript Object Notation)

const person = {
    name: "Jhon Doe",
    age: 20,
    email: "js@gmail.com",
    isSubscribed: true,
    hoobies: [
        "Reading",
        "Running",
        "Cooking"
    ],
    address: {
        city: "New York",
        idk: true,
    }
};

// JSON.stringify()

const jsonString = JSON.stringify(person);


console.log(jsonString);


// JSON.parse();

const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);

