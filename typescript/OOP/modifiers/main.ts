
class Human {

    private name: string;
    public last: string;
    protected age?: number;
    constructor(name: string, last: string, age?: number) {
        this.name = name;
        this.last = last;
        this.age = age;

    }

    getName(): string {

        return `${this.name} ${this.last} Age: ${this.age}`;
    }

}

class Person extends Human {

    constructor(name: string, last: string, age?: number) {
        super(name, last);
        this.age = age;
    }
}


let p1 = new Person("John", "Doe", 20);

console.log(p1.getName());