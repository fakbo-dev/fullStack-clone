
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

    // #1 min method return the node with the lowest value

    min() {
        let temp = this.first;
        let minValue = temp.data;
        while (temp !== null) {

            minValue = Math.min(minValue, temp.data);
            temp = temp.next;
        }
        return;
    }
}

const stack = new Stack(100);
stack.push(20);
stack.push(4);
stack.push(500);
// console.log(stack);
console.log(stack.min());