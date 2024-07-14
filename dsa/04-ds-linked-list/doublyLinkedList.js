
// Create a doublyNode

class NodeTest {

    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {

    constructor(data) {

        const newNode = new NodeTest(data);

        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    // #1 push method allow to add a new node in the end od the array
    //  1.1 create a new Node.
    //  1.2 change the next propertie to the tail for the new created node
    //  1.3 taking the tail and point to the new Node.
    //  1.4 the next propertie of my new node is now referece to null.
    //  1.5 increment the length for 1.

    push(data) {
        const newNode = new NodeTest(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        this.length++;
        return this.length;
    }
    // #2 pop method allows to remove the last item from the entire linkedList 
    //  1.1 create a temp variable a ponit to the tail
    //  1.2 take the tail a point to the prev Node
    //  1.3 break the chain for the next a prev in the current tail and the delete Node
    pop() {

        if (this.length === 0) {
            return null;
        }

        const temp = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }


        this.tail = this.tail.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    // #3 unshift allow to add a new Node in the beggining of the LinkedList

    unshift(data) {


        const newNode = new NodeTest(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;

        return this.length;
    }

    // #4 shift method allows to delete the first element of our linkedList

    shift() {

        if (this.length === 0) {
            return null;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        const temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp.next = null;
        this.length--;

        return temp;
    }
}

const doublyLinkedList = new DoublyLinkedList(1);

// console.log(doublyLinkedList);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
// console.log(doublyLinkedList);
doublyLinkedList.pop();
// console.log(doublyLinkedList);
doublyLinkedList.unshift(0);
console.log(doublyLinkedList);
doublyLinkedList.shift();
console.log(doublyLinkedList);


