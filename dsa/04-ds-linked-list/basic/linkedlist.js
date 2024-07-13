// Linked list

//? A linked list is a linear data structure where elements, called nodes, are not stored contigously in memory.
//? instead, each node contains data and a reference, or link, to the next node in te sequence.

// !important

// data any valid data type;
// reference any valid node or null;


// 1. Node

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}



class LinkedList {

    constructor(data) {
        // Crear el primer nodo
        const newNode = new Node(data);
        // asignar head al primer valor.
        this.head = newNode;
        // asiganr la cola al ultimo valor, en este caso solo tenemos un nodo por lo cual sera nuestra cola.
        this.tail = this.head;
        this.length = 1;
    }


    // #1 push method allows to add a NEW NODE at the end of the linkedList
    //  1.1 create a new Node.
    //  1.2 change the next propertie to the tail for the new created node
    //  1.3 taking the tail and point to the new Node.
    //  1.4 the next propertie of my new node is now referece to null.
    //  1.5 increment the length for 1.

    push(data) {
        const newNode = new Node(data);

        // Si no existe ningun valor en nuestra linkedList.

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return newNode;
    }

    // #2 pop method allows to remove the last item from the entire linkedList 
    //  1.1 we need to iterate over the entire linkedList and first find the last Element, after that we need to find the previous element to the last one.
    //  1.2 take the tail and point to the previous element
    //  1.3 after that remove the last element
    //  1.4 we need to create 2 variables a temporal variable and a previous variable
    //  1.5 point the 2 variables to the head.
    //  1.5 iterate over the linked list and check -> temp check is the current element is the last element if not keep moving and the prev element is now the temp element.
    // 1.6 when temp find the last element delete that node.

    pop() {
        let temp = this.head;
        let prev = this.head;

        if (!this.head) {
            return null;
        }

        while (temp.next !== null) {
            prev = temp;
            temp = temp.next;
        }

        this.tail = prev;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return temp;
    }

    // #3 unshift method allows to add a new node  at the beginning of a linkedList.
    //  1.1 create a newNode 
    // 1.2 take the head a set to the new create Node.


    unshift(data) {
        const temp = this.head;
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.head = newNode;
        this.head.next = temp;
        this.length++;
        return newNode;
    }

    // #4 shift method allows to remove the first element of a linkedList
    //  1.1 we need to take our head and point to the next node.
    //  1.2 after that we need to remove the first Element.

    shift() {
        const tempValue = this.head;

        if (!this.head) {
            return null;
        }
        this.head = this.head.next;
        tempValue.next = null;
        this.length--;

        return tempValue;
    }

    // #5 getFirstElement return the the firstNode (head);

    getFistElement() {

        return this.head;
    }

    // #6 getLastElement
    getLastElement() {
        let temp = this.head;

        if (!this.head) {
            return null;
        }

        while (temp.next !== null) {
            temp = temp.next;
        }
        return temp;
    }

    // #7 get return the data of the node

    get(index) {
        let temp = this.head;
        let element = 0;
        while (temp.next !== null) {

            if (temp.data === index) {
                element = temp;
            }
            temp = temp.next;
        }

        return element;
    }

    // #7 set update the data of the node
    //  1.1 take two parameters index and data
    //  1.2 iterate over the linked list and find the node with the given index.
    //  1.3 update the node with the given index with the new data.

    set(index, data) {
        let temp = this.get(index);

        if (temp) {
            temp.data = data;
            return true;
        }

        return false;
    }
}


const linkedList = new LinkedList(1);
// console.log(linkedList);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
// console.log(linkedList);
linkedList.pop();
console.log(linkedList);
linkedList.unshift(0);
console.log(linkedList);
linkedList.shift();
console.log(linkedList);
// console.log(linkedList.getFistElement());
// console.log(linkedList.getLastElement());
// console.log(linkedList.get(3));
linkedList.set(2, 20);

console.log(linkedList);
