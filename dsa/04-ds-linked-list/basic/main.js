
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

    constructor(newNode) {
        this.head = new NodeTest(newNode);
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

    // 2# pop method
    // Allows you to remove the last node in a linked list
    // delete the last node and change the tail to the previous node and return null to this element

    // Steps
    //  1.iterate over the list and find the last element
    //  2. need to find the previous element
    //  3. taking the tail and set to the previous element
    //  4.remove the last element.

    // we need to create two variables (temp, prev)
    // both varibale initalize with the head value
    // iterate over the list with for... loop or while... lop.


    pop() {
        if (!this.head) {
            return null;
        }
        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return temp;
    }


    // 3# unshift
    //  1.1 iterate over the list
    //  1.2 create a new node
    //  1.3 point the new node to the head
    //  1.4 change the head to the new node
    //  1.5 increase the length by 1
    //  1.6 return the new length
    //  1.7 if the list was empty, set the tail to the new node;

    unshift(value) {
        const newNode = new NodeTest(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;

        this.length++

        return this;
    }

}


const myLinkedList = new LinkedList(1);

// console.log(myLinkedList);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList);
myLinkedList.pop();
console.log(myLinkedList);
myLinkedList.unshift(20);
console.log(myLinkedList);


