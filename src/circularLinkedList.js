
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class CircularList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtFirst(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            node.next = this.head;
        } else {
            node.next = this.head.next;
            let current = this.head, counter = 0;
            while (counter < this.size) {
                counter++;
                current = current.next;
            }
            current.next = node;
            this.head = node;
        }
        this.size++;
    }

    addAtLast(data) {
        if (!this.head) {
            this.addAtFirst(data)
            return;
        }
        const node = new Node(data);
        let current = this.head, counter = 1;
        while (counter < this.size) {
            current = current.next;
            counter++;
        }
        current.next = node;
        node.next = this.head;
        this.size++;
    }

    addAtIndex(data, index = null) {

        if (index === null || index < 0 || index > this.size) {
            console.warn("Trying to add out of bounds");
            return;
        }

        if (index === 0) {
            this.addAtFirst(data);
        } else if (index === this.size) {
            this.addAtLast(data);
        } else {
            let current = this.head, previous = null, counter = 0;
            const node = new Node(data);
            while (counter < index) {
                previous = current;
                current = current.next;
                counter++
            }
            node.next = current;
            previous.next = node;
            this.size++;
        }
    }

    removeAtFirst() {
        if (!this.head) {
            console.warn("Empty list");
            return;
        }

        if (this.size == 1) {
            this.head = null;
            this.size--
            return;
        }
        let lastNode = this.head, counter = 1;
        while (counter < this.size) {
            lastNode = lastNode.next;
            counter++
        }
        this.head = this.head.next;
        lastNode.next = this.head;
        this.size--
    }

    removeAtLast() {

        if (!this.head) {
            console.warn("Empty list");
            return;
        }

        if (this.size == 1) {
            this.head = null;
            this.size--
            return;
        }

        let secondLastNode = this.head, counter = 2;

        while (counter < this.size) {
            secondLastNode = secondLastNode.next;
            counter++
        }
        secondLastNode.next = this.head;
        this.size--
    }

    removeAtIndex(index = null) {
        if (index === null || index < 0 || index >= this.size) {
            console.warn("Trying to add out of bounds");
            return
        }

        if (!this.head) {
            console.warn("Empty List");
            return;
        }

        if (index == 0) {
            this.removeAtFirst()
            return
        }
        if (index == this.size - 1) {
            this.removeAtLast()
            return;
        }

        let reqNode = this.head, counter = 0, previous = null;

        while (counter < index) {
            previous = reqNode;
            reqNode = reqNode.next;
            counter++
        }
        previous.next = reqNode.next;
        this.size--
    }


    getAtIndex(index = null) {
        if (index == null || !this.head || index >= this.size || index < 0) {
            console.warn("Going out of bounds");
            return
        }
        let current = this.head, counter = 0;
        while (counter < index) {
            current = current.next;
            counter++
        }
        console.log(current.data);
    }

    printList() {
        let current = this.head, counter = 0;
        if (!current) {
            console.warn("Empty list");
            return;
        }
        const result = [];
        while (counter < this.size) {
            result.push(current.data);
            current = current.next;
            counter++
        }
        console.log(result);
    }

}

const cl = new CircularList();

cl.addAtFirst(10);
cl.addAtFirst(20);
cl.addAtLast(30);
cl.addAtIndex(5, 3);
cl.addAtLast(40);
cl.removeAtIndex(1);
cl.getAtIndex(1);

cl.printList();
