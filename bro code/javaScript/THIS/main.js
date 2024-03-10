// this = reference to te object where THIS is used
//        (the object depend on the imdiate context)
//        person.name = this.name;

// IMPORTANT (THIS) DOESN'T WORK WITH ARROW FUNCTIONS
const person1 = {
    name: "Spongebob",
    favFoot: "hamburgers",
    sayHello: function() {
        console.log(`Hi! I am ${this.name}`)
    },
    eat: function() {
        console.log(`${this.name} is eating ${this.favFoot}`)
    },
}
person1.sayHello();
person1.eat();

const person2 = {
    name: "Patrick",
    favFoot: "Pizza",
    sayHello: function() {
        console.log(`Hi! I am ${this.name}`)
    },
    eat: function() {
        console.log(`${this.name} is eating ${this.favFoot}`)
    },
}

person2.sayHello();
person2.eat();