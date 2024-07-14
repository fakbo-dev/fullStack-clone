

class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {

    constructor(data) {
        const newNode = new Node(data);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(data) {
        const newNode = new Node(data);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++

        return newNode;
    }

    // #1 reverseLinkedList
    // 1.1 change the head and tail
    // 1.2 reverse the arrows

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
    }
}


const linkedList = new LinkedList(0);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.reverse();
console.log(linkedList)