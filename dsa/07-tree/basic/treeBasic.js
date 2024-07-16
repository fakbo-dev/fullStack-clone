// Tree

// A tree is a fundamental DS (Data Structure) hierarchical data structure. it represents a collection of elements (data) called nodes, connected by edges (links)
// forming a tree-like structure ----> check the excalidraw for more information

// BST (Binary Search Tree)


// a BST is a special kind of binary tree used to organize data in a sorted way. it works like a filing cabinet where you can efficiently search, add, or remove items



class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BST {

    constructor() {
        this.root = null;
    }

    // #1 insert add a node to the BST and check in each leaf is the value is greater or less than the root and the next node, if is less go to the left if is greater go to the right
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) this.root = newNode;
        let temp = this.root;

        while (true) {
            if (temp.data === newNode.data) {
                return null;
            }

            if (temp.data > newNode.data) {

                if (temp.left === null) {
                    temp.left = newNode;
                    return this;

                } else {
                    temp = temp.left;
                }
            }

            if (temp.data < newNode.data) {
                if (temp.right === null) {
                    temp.right = newNode;
                    return this;
                } else {
                    temp = temp.right;
                }
            }
        }

    }
    // #2 includes method return true is the parameters is in the binary tree
    // 1.1 we need to check is the data is equal to te root
    // 1.2 check if the data is less than the current Node
    // 1.3 check if the data is greater tahn the current Node
    // return true is the result match.
    // return false is not have match.
    includes(data) {
        let temp = this.root;

        while (temp !== null) {

            if (data === temp.data) {
                return true
            } else if (data < temp.data) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }
        return false;
    }

    // 3# bfs (breadth first search)
    bfs() {
        let current = this.root;
        let queue = [];
        let dataValues = [];

        queue.push(current);

        while (queue.length) {

            current = queue.shift();
            dataValues.push(current.data);

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        return dataValues;
    }

    dfsPreOrder(node = this.root, dataArr = []) {
        if (node === null) return dataArr;
        console.log("--------------", dataArr);
        dataArr.push(node.data);
        if (node.left) this.dfsPreOrder(node.left, dataArr);
        if (node.right) this.dfsPreOrder(node.right, dataArr);

        return dataArr;
    }
}


const tree = new BST();

// console.log(tree);
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);
console.log(tree);
console.log(tree.includes(3));
console.log(tree.bfs());
console.log(tree.dfsPreOrder())
