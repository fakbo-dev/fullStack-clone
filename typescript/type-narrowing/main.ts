// Typeof Instances

type MyType = string | number;

function exampleFunction(value: MyType): void {

    if (typeof value === "string") {
        console.log(value.toUpperCase())
    } else {
        console.log(value.toFixed(2));
    }
}


// InstancesOf

class Dog {
    bark() {
        console.log("Woof Woof")
    }
}

class Cat {

    meow() {
        console.log("Meoow");
    }
}


function animalSound(animal: Dog | Cat): void {

    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}


const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);