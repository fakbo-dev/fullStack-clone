// Create a person object and store your name & age
// -> Also create a method name (greetRegular) by using a regular function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`
// -> Create one more method name (greetArrow) using arrow function
//  --> Print this message `Hello, my name is ${this.name} & I'm ${this.age} years old.`



const person = {
  name: "fakbo",
  age: 20,
  greetRegular: function () {
    return `Hello, my name is ${this.name} & I'm ${this.age} Years Old`;
  },
  greetArrow: () => {
    return `Hello, my name is ${this.name} & I'm ${this.age} Years Old`;
  },
};

console.log(person.greetRegular());
console.log(person.greetArrow());