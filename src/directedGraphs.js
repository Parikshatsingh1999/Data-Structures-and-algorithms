console.log("Directed graphs");

class DirectedGraph {

    constructor() {
        this.list = {};
    }


    display() {
        for (let vertex in this.list) {
            console.log(`${vertex} ->`, ...this.list[vertex]);
        }
    }

    addVertex(...vertices) {
        if (!vertices.length) {
            return;
        }
        vertices.forEach(vertex => {
            if (!this.list[vertex]) {
                this.list[vertex] = new Set();
            }
        })
    }

    addEdge(vertex1, vertex2) {

        if (vertex1 === vertex2) {
            console.warn("self loop not implemented");
        }

        if (!this.list[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.list[vertex2]) {
            this.addVertex(vertex2);
        }
        this.list[vertex1].add(vertex2);
    }

    hasEdge(vertex1, vertex2) {
        return this.list[vertex1]?.has(vertex2) ?? false;
    }

    deleteEdge(vertex1, vertex2) {
        this.list[vertex1]?.delete(vertex2)
    }

    deleteVertex(vertex) {

        if (!this.list[vertex]) return null;
        for (let edge of this.list[vertex]) {
            this.deleteEdge(edge, vertex);
        }

        delete this.list[vertex];

    }

}

const dGraph = new DirectedGraph();

dGraph.addVertex("A", "B", "C")
dGraph.addEdge("A", "B");
dGraph.addEdge("A", "C");
dGraph.addEdge("C", "A");
dGraph.deleteEdge("C", "B");
dGraph.deleteVertex("C");
console.log(dGraph.hasEdge("C", "A"))
console.log(dGraph.hasEdge("A", "B"))
dGraph.display()