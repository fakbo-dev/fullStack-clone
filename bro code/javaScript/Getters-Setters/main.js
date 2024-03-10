// getter = special method that makaes property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writting a property

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if(newWidth > 0) {
            this._width = newWidth;
        }
        else {
            console.error("width must be a positive number")
        }
    }
    set height(newHeight) {
        if(newHeight > 0) {
            this._height = newHeight;
        }
        else {
            console.error("Height must be a positive number")
        }
    }
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);


//another example

class Person {
    constructor(firstName,lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof newFirstName  === "string" &&  newFirstName.length > 0) {
            this._firstName = newFirstName;
        }
        else {
            console.error("First name must be a non-empty string")
        }
    }
    set lastName(newLastName) {
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        }
        else {
            console.error("Last name must be a non-empy string");
        }
    }
    set age(newAge) {
        if (typeof newAge === "number" && newAge > 0) {
            this._age = newAge;
        }
        else {
            console.error("age must be a number greater than 0");
        }
    }

    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get age() {
        return this._age;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }


}

const person = new Person("pablo", "pepe", 15);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName);