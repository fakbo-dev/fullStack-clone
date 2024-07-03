function printNumber(item: number, defaults: number): [number, number] {

    return [item, defaults];
}

function printString(item: string, defaults: string): [string, string] {

    return [item, defaults];
}

function printBoolean(item: boolean, defaults: boolean): [boolean, boolean] {

    return [item, defaults];
}

const number = printNumber(12, 24);
const str = printString("with you and i", "fakbo");
const bool = printBoolean(true, false);
console.log(number);


// ----------------------------------------------------------------------

// Generic function


function uniqueDataTypeFunc<T>(item: T, defaults: T): [T, T] {

    return [item, defaults];
}


const chad = uniqueDataTypeFunc<string>("fakbo", "pog");
const chadNumber = uniqueDataTypeFunc<number>(19, 20);



interface Dog {
    name: string;
    breed: string;
}

const dog1 = uniqueDataTypeFunc<Dog>({ name: "labrador", breed: "pog" }, { name: "chad", breed: "gigachad" });
console.log(dog1[0]);
console.log(dog1[1]);




function getRandomKeyValuePair<T>(obj: { [key: string]: T }): { key: string; value: T; } {

    const key = Object.keys(obj);
    const ranKey = key[Math.floor(Math.random() * key.length)];

    return { key: ranKey, value: obj[ranKey] };
}

const stringObject = { a: "apple", b: "banana", c: "cherry" };


const res = getRandomKeyValuePair<String>(stringObject);

console.log(res);

const numberObject = { a: 1, b: 2, c: 3 };

const getRandomNumber = getRandomKeyValuePair<number>(numberObject);

// ------------------------------------------------------------------------------------------------------------------


function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {

    return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const evenNumbers = filterArray<number>(numberArray, (item) => item % 2 === 0);
const oddNumbers = filterArray<number>(numberArray, (item) => item % 2 === 1);

console.log(oddNumbers);

const stringArr = ["Apple", "Orange", "Pongo", "bongo bongo", "calacas"];

const filterString = filterArray<string>(stringArr, (item) => item.length > 6);

console.log(filterString);

interface Fruit {
    name: string;
    color: string;
}

const fruits: Fruit[] = [
    {
        name: "Apple",
        color: "red"
    },
    {
        name: "cherry",
        color: "red",
    },
    {
        name: "banana",
        color: "orange",
    }
];

const redFruits = filterArray<Fruit>(fruits, (item) => item.color === "red");

console.log(redFruits);


// -------------------------------------------------------------------------------------------------------------------------

function reversePair<T, U>(value1: T, value2: U): [U, T] {

    return [value2, value1];
}

const reversePairValue = reversePair("hello", 20);

// -----------------------------------------------------------------


class Box<T> {
    private content: T;

    constructor(initialContent: T) {
        this.content = initialContent;
    }

    getContent(): T {
        return this.content;
    }


    setContent(newContent: T): void {
        this.content = newContent;
    }
}


const box1 = new Box<String>("Hello Typescript");
console.log(box1);

box1.setContent("new Content!!");
console.log(box1);
