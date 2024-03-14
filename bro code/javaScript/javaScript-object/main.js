// object = A collection of related properties and or methods
//          Can represent real world object (people,products, places)
//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function() {
        console.log("Hi, I am Spongebob")
    },
    eat: () => {console.log("hey, I am eating a krabby patty")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function() {
        console.log("Hi, I am Patrick")
    },
    eat: () => {console.log("I am eating roast beef, chicken, and pizza")},
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();