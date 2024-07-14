// Queue

// A queue is a linear data structure that functions like a wating line. it follows the FIFO (First in, First Out) principe, meaning the element that enters the queue first will be first one to be removed.



class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class Queue {

    constructor(data) {
        const newNode = new Node(data);
        this.first = newNode;
        this.last = this.first;
        this.length = 1;
    }


    // #1 enqueue add a node to the last node and change is last.
    enqueue(data) {
        const newNode = new Node(data);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }

        this.last.next = newNode;
        this.last = newNode;
        this.length++;

        return this.length;
    }

    // #2 dequeue remove the First Node.
    dequeue() {
        const temp = this.first;

        if (this.length === 0) {
            return null;
        }

        this.first = this.first.next;
        temp.next = null;
        this.length--;

        return temp;
    }

    // remove the last item from the queue
    removeLast() {
        let temp = this.first;
        let prev = this.first;

        while (temp.next !== null) {
            prev = temp;
            temp = temp.next;
        }

        this.last = prev;
        this.last.next = null;
        this.length--;
        return this.length;
    }

    // maybe need to delete?
    shift(data) {


        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        const newNode = new Node(data);

        newNode.next = this.first;
        this.first = newNode;

        this.length++;

        return this.length;
    }
}


const queue = new Queue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);
