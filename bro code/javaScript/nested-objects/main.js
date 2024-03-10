// nested objects = Object inside of other object.
//                  Allows you to represent more complex data structures
//                  child object is enclosed by parent object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "SPongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 conch st.",
        city: "bikini bottom",
        country: "Int. water"
    },
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.address.city);

//* loop through the properties of an nested object

for(const property in person.address) {
    console.log(person.address[property]);
}

class Person {

    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}


class Address {

    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 34, "124 Conch st.", "Bikini Bottom", "int. Waters");

const person2 = new Person("Patrick", 34, "128 Conch st.", "Bikini Bottom", "int. Waters");

const person3 = new Person("Squidward", 45, "126 Conch st.", "Bikini Bottom", "int. Waters");

console.log(person1.address);