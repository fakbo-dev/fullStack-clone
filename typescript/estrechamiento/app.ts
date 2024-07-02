// Imaginemos que tenemos una función llamada padLeft.

function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }

    return padding + input;
}

// Si paddinges un number, lo tratará como la cantidad de espacios que queremos anteponer a input. Si paddinges un string, simplemente debería anteponer paddinga input. Intentemos implementar la lógica para cuando padLeftse pasa un numberfor padding.



// Typeof tipos de proteccion

function printAll(str: string | string[]) {

    if (typeof str === "object") {
        for (const s of str) {
            console.log(s);

        }
    } else if (typeof str === "string") {
        console.log(str);
    } else {

    }

}

// Estrechimiento de veracidad

function printAllTwo(strs: string | string[] | null) {

    if (strs && typeof strs === "object") {
        for (const s of strs) {

            console.log(s);
        }
    } else if (typeof strs === "string") {

        console.log(strs);
    }
}

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {

    if (!values) {
        return values
    } else {
        return values.map((x) => x * factor);
    }
}



// Estrechamiento de igualdad

function example(x: string | number, y: string | boolean) {

    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);


        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}

// el in operator estrecho

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void, fly?: () => void };

function move(animal: Fish | Bird) {

    if ("swim" in animal) {
        return animal.swim();
    }

    return animal.fly();
}

function moveTwo(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
        animal;

    } else {
        animal;

    }
}

// instanceof estrechamiento

function logValue(x: Date | string) {

    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


// analisis de flujo de control

function exampleTwo() {

    let x: string | number | boolean;


    x = Math.random() < 0.5;
    console.log(x);

    if (Math.random() < 0.5) {
        x = 'hello';
        console.log(x)
    } else {
        x = 100;
        console.log(x);
    }

    return x;
}


// Predicados de tipo

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}