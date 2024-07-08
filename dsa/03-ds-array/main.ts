// Array Ds = is an ordered collection of elements that can be accessed using a numerical index


const stringArr: string[] = ["a", "b", "c", "d"];
const numArr: number[] = [1, 2, 3, 4, 5, 6];


// Custom Array


class MyArray<T> {
    length: number;
    data: { [key: number]: T };

    constructor() {
        this.length = 0;
        this.data = {};
    }


    // metodo push toma un valor de entrada y lo ubica al final del array
    push(element: T): number {
        this.data[this.length] = element;
        this.length++;
        return this.length
    }

    // Metodo Get recibe el indice de la propiedad y devuelve su valor
    get(index: number) {

    }
}

const myNewArray = new MyArray<string | number>();
myNewArray.push("test1");
myNewArray.push("test2");
myNewArray.push("test3");
myNewArray.push("she said she was twelves");
console.log(myNewArray);
