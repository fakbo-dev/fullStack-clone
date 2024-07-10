
// Linked list

// A linked list is a linear data structure where elements, called nodes, are not stored contigously in memory.
// instead, each node contains data and a reference, or link, to the next node in te sequence.


// Example

// creating a node


class NodeTest {

    constructor(value) {
        this.head = value;
        this.next = null;
    }

}

// Creating a linkedList


class LinkedList {

    constructor(value) {
        this.head = new NodeTest(value);
        this.tail = this.head;
        this.length = 1;
    }
    // 1# push method
    //  1.1 create a new node.
    //  1.2 change the tail to the last node.
    //  1.3 and point null to the newest node.

    push(value) {
        const newNode = new NodeTest(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
}


const myLinkedList = new LinkedList(1);

console.log(myLinkedList);
myLinkedList.push(2);
console.log(myLinkedList);



