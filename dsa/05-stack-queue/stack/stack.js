// Stack

// A Stack is a linear data structure that follows LIFO, or (Last in, First Out) principe.

// Create a Node.


class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Stack {

    constructor(data) {
        const newNode = new Node(data);
        this.first = newNode;
        this.length = 1;
    }

    // #1 Push method (stack) Allows to enter an element at the BEGGINING of the Stack

    push(data) {
        const temp = this.first;
        const newNode = new Node(data);
        if (!this.first) {
            this.first = newNode;
        }


        this.first = newNode;
        newNode.next = temp;

        this.length++;

        return this.length;
    }

    // #2 pop method allows to remove the First Element.

    pop() {

        const temp = this.first;
        this.first = this.first.next;
        temp.first = null;

        this.length--;

        return this.length;
    }
}


const stack = new Stack(0);
stack.push(1);
stack.push(2);
console.log(stack);
stack.pop();
console.log(stack);