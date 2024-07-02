// Primitivos String, number, Booleans

// String

const firstProfile: string = "John Doe";

// Number

const numberTest: number = 42;

// Booleans

const booleanTest: boolean = true;

// Arrays

const arrayTest: number[] = [1, 2, 3, 4];

const arrayTest2: Array<number> = [2, 3, 4, 5];

// any

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;


// funciones

// --------------------------------------------------------------------------------------------------
// Anotacion por parametros

function greed(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");

}

greed("fakbo") // Hello, FAKBO!!

// Anotacion de retorno

function getFavoriteNumber(): number {

    return 26;
}

// Funciones que devuelven promesas

async function getFavoriteNumberTwo(): Promise<number> {
    return 25;
}

// Functiones anonimas

const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUpperCase());
});

// ------------------------------------------------------------------------------------------------------------------------------------
// tipos en objetos

function printCoord(pt: { x: number, y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}


printCoord({ x: 3, y: 7 });

// Propiedades opcionales

function printName(obj: {
    first: string,
    last?: string,
}) {
    // Error - might crash if 'obj.last' wasn't provided!

    // console.log(obj.last.toUpperCase());

    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }

    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}


// ---------------------------------------------------------------------------------

// Tipos de uniones

// Definicion de tipo de union


function printId(id: number | string) {
    console.log("Your ID is: " + id);
}

printId(42);
printId("ccb6:ae0a:86cb:a6d2:0434:fc21:1ad2:256c");

//! Error
// printId({myID: 22342}); OBJ

// Trabajar con tipos de union

function printIdTwo(id: number | string) {

    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

// Union con Elementos en comun
function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}

//Puede resultar confuso que una unión de tipos parezca tener la intersección de las propiedades de esos tipos. Esto no es casualidad: el nombre de unión proviene de la teoría de tipos. La unión number | string se compone tomando la unión de los valores de cada tipo. Observe que, dados dos conjuntos con hechos correspondientes sobre cada conjunto, solo la intersección de esos hechos se aplica a la unión de los conjuntos mismos. Por ejemplo, si tuviéramos una sala con personas altas que usan sombreros y otra sala con hispanohablantes que usan sombreros, después de combinar esas salas, lo único que sabemos sobre cada persona es que deben usar sombrero.

// Alias de tipo

type Point = {
    x: number;
    y: number;
}

function printCoordTwo(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

type ID = number | string;

// Interfaces

interface PointTwo {
    x: number;
    y: number;
}

function printCoordThree(pt: PointTwo) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


// Afirmaciones de tipo

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvasTwo = <HTMLCanvasElement>document.getElementById("main_canvas");
