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
    get(index: number): T {
        return this.data[index];
    }

    // Elimina el ultimo dato en nuestro array y reduce su length

    pop(): T {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    // elmina el primer elementon de un array y devuelve el elemento removido. este metodo reduce su length

    shift(): T {
        // Toma el primer elemento del array
        const firstItem: T = this.data[0];

        // Iteramos a travez de todo el array y sumamos uno a cada propiedad
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        // Eliminamos la propiedad del objeto data
        delete this.data[this.length - 1];
        // Eliminamos uno en nuestra length para tener datos iguales con nuetra length 
        this.length--;
        // Devolvemos el valor eliminado
        return firstItem;
    }

    // eliminar un elemento por su index y re-ordenar los otros elementos
    deleByIndex(index: number) {
        const deleteIndex = this.data[index];
        for (let i = index; i < this.length - 1; i++) {

            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return deleteIndex;
    }
}

const myNewArray = new MyArray<string | number>();
myNewArray.push("test1");
myNewArray.push("test2");
myNewArray.push("test3");
myNewArray.push("she said she was twelves");

// console.log(myNewArray);
// myNewArray.pop();
// console.log(myNewArray);

// console.log(myNewArray.shift());
// console.log(myNewArray);
// console.log(myNewArray.shift());
// console.log(myNewArray);

myNewArray.deleByIndex(0);
console.log(myNewArray);