// Expresiones de tipo de funcion

function greeter(fn: (a: string) => void) {
    fn("hello, World");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

// Firmas de llamadas

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

function myFunc(someArg: number) {
    return someArg > 3;
}

myFunc.description = "default Description";

doSomething(myFunc);

// Construir Firmas


// type SomeConstructor = {
//     new (s:string): SomeObject;
// }

interface CallOrConstruct {
    (n?: number): string;
    new(s: string): Date;
}


// Functiones genericas

function firstElement<Type>(arr: Type[]): Type | undefined {

    return arr[0];
}
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);


// inferencia

function map<Input, Ouput>(arr: Input[], func: (arg: Input) => Ouput): Ouput[] {

    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

console.log(parsed);

// Restricciones

function longest<Type extends { length: number }>(a: Type, b: Type) {

    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }

}
const longArray = longest([1, 2], [1, 2, 3]);
const longerString = longest("alice", "bob");
// Throw an error
// const notOk = longest(10, 100);



// ---------------------------------------------------------------------------------------------------

// Empujar parametros de tipo hacia abajo

function firstElement1<Type>(arr: Type[]) { // ✅

    return arr[0];
}


function firstElement2<Type extends any[]>(arr: Type) { //❌
    return arr[0];
}



// Sobrecarga de funciones

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(morTimeStamp: number, d?: number, y?: number): Date {

    if (d !== undefined && y !== undefined) {
        return new Date(y, morTimeStamp)
    } else {
        return new Date(morTimeStamp);
    }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// Error
// const d3 = makeDate(1, 3);