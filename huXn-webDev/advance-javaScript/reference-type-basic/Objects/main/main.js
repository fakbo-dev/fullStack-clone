// OBJECT -> {label: value}



const person = {
    name: "HuXn",
    lastName: "WebDev",
    age: 19,
    location: ["Planet", "Earth"],
    isProgrammer: true,
    10: "ten"
};

// Accessing Items from our object
console.log(person.name);
console.log(person["age"]);

// When is useful 

console.log(person["10"]);

//add properties to the Object

person.thirdName = "Banca Shat";

console.log(person);

// Delete properties to the Object

delete person.thirdName;

