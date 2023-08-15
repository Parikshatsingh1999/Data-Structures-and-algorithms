console.log("graph");

class Graph {

    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {

        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {

        if (!this.adjacentList[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacentList[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    display() {
        for (let vertex in this.adjacentList) {
            console.log(`${vertex} ->`, ...this.adjacentList[vertex]);
        }
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacentList[vertex1]?.has(vertex2) && this.adjacentList[vertex2]?.has(vertex1);
    }

    deleteEdge(vertex1, vertex2) {
        this.adjacentList[vertex1]?.delete(vertex2)
        this.adjacentList[vertex2]?.delete(vertex1)
    }

    deleteVertex(vertex) {

        if (!this.adjacentList[vertex]) return null;

        for (let edge of this.adjacentList[vertex]) {
            this.deleteEdge(edge, vertex);
        }

        delete this.adjacentList[vertex];

    }

}

const graph = new Graph();

graph.addVertex("A");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");
dGraph.deleteEdge("C", "B")
graph.display();

console.log(graph.hasEdge("B", "C"));