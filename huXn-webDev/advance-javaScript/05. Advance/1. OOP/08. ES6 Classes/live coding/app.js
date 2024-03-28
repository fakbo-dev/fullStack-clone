// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.


//Class Declaration

class Person {
  constructor(firstName, lastName, age) {
    //Instance Members
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.printUserInfo = function () {
      return `Name: ${this.firstName} ${this.lastName}, age: ${this.age}`
    };
  };

  //Prototype Members
  greet() {
    return `Hello my name is ${this.firstName} ${this.lastName} & I'am ${this.age} years old`
  }
}


class Programmer extends Person {
  constructor(firstName, lastName, age, pl, experience) {
    super(firstName, lastName, age);
    this.pl = pl;
    this.experience = experience;
  }
}


const john = new Person("Fakbo", "WebDev", "20");

console.log(john);

const fakbo = new Programmer("fakbo", "oropeza", 20, "JavaScript", "zero");


console.log(fakbo.printUserInfo());


