// !Graph

// A Graph is a non-linear data structure that models relations between objects. it consists of two main components Vertices (Nodes) & Edges

// ?Vertices (Nodes)

// these represent the individual entities within the graph.

//? Edges (Links)

// these conenct vertices, significantly a relationship of connection between them.


class Graph {

    constructor() {
        this.adjacencyList = {};
    }

    // Add vertex(node)

    addVertex(vtx) {

        if (!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = [];
            return true;
        }
        return false;
    }

    // Create connections

    addEdge(vtx, vtx2) {

        if (this.adjacencyList[vtx] && this.adjacencyList[vtx2]) {
            this.adjacencyList[vtx].push(vtx2)
            this.adjacencyList[vtx2].push(vtx)
            return true;
        }

        return false;
    }

    // Remove Edges

    removeEdges(vtx1, vtx2) {
        if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {

            this.adjacencyList[vtx1] = this.adjacencyList[vtx2].filter(v => v !== vtx2);
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(v => v !== vtx1);
            return true;
        }
        return false;
    }

    // Remove vertex

    removeVertex(vtx) {

        if (!this.adjacencyList[vtx]) return null;

        for (let neighbor of this.adjacencyList[vtx]) {
            this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(v => v !== vtx);
        }

        delete this.adjacencyList[vtx];
        return this;
    }
}


const g = new Graph();
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");
// console.log(g);
// g.addEdge("A", "B");
// g.addEdge("B", "C");
// g.addEdge("C", "A");
//  console.log(g);
// g.removeEdges("A", "B");
// console.log(g);

const finalTest = new Graph();

finalTest.addVertex("A");
finalTest.addVertex("B");
finalTest.addVertex("C");
finalTest.addVertex("D");

finalTest.addEdge("A", "B");
finalTest.addEdge("A", "C");
finalTest.addEdge("A", "D");
finalTest.addEdge("B", "D");
finalTest.addEdge("C", "D");
finalTest.removeVertex("D");
console.log(finalTest);
