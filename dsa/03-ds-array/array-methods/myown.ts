// push()
// get()
// pop()
// shift()
//deleteByIndex()



class ArrayTest<T> {

    data: { [key: number]: T }
    length: number;

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(element: T) {

        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    get(elementIndex: number) {
        const newElement = this.data[elementIndex];

        return newElement;
    }

    pop() {
        const lastItem = this.data[this.length - 1];

        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    shift() {
        const firstItem = this.data[0];


        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return firstItem;
    }

    deleteByIndex(index: number) {

        const indexItem = this.data[index];

        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
        return indexItem;
    }

}


const myArray = new ArrayTest<number | string>();


myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push("banana");
// console.log(myArray.get(5));

myArray.pop();
// console.log(myArray);
myArray.shift();
console.log(myArray);

myArray.push("cambur");
console.log(myArray);
myArray.deleteByIndex(2);
console.log(myArray);


