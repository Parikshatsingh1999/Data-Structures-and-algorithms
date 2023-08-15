console.log("Double Linked List");


class Node {
    constructor(data, next = null, previous = null) {

        this.data = data;
        this.next = next;
        this.previous = previous

    }
}

class DoubleLinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    addAtFirst(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.size++;
    }

    addAtLast(data) {
        if (!this.head) {
            this.addAtFirst(data);
            return;
        }
        const node = new Node(data);
        let lastNode = this.head, counter = 1;
        while (counter < this.size) {
            lastNode = lastNode.next;
            counter++;
        }
        node.previous = lastNode;
        lastNode.next = node;
        this.size++
    }

    addAtIndex(data, index = null) {

        if (index == null || index < 0 || index > this.size) {
            console.warn("Going out of bounds")
            return;
        }

        if (index == 0) {
            this.addAtFirst(data)
            return;
        }
        if (index == this.size) {
            this.addAtLast(data);
            return;
        }

        let oneBeforeReqNode = this.head, counter = 1;
        const node = new Node(data);
        while (counter < index) {
            oneBeforeReqNode = oneBeforeReqNode.next;
            counter++
        }

        node.next = oneBeforeReqNode.next;
        node.previous = oneBeforeReqNode;
        oneBeforeReqNode.next.previous = node
        oneBeforeReqNode.next = node;
        this.size++

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
        this.head = this.head.next
        this.head.previous = null
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

        let secondlastNode = this.head, counter = 2;
        while (counter < this.size) {
            secondlastNode = secondlastNode.next
            counter++
        }
        secondlastNode.next = null
        this.size--
    }

    removeAtIndex(index = null) {

        if (index == null || !this.head || index < 0 || index >= this.size) {
            console.warn("Going out of Bounds");
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

        let reqNode = this.head, counter = 0;
        while (counter < index) {
            reqNode = reqNode.next;
            counter++
        }
        let previous = reqNode.previous;
        previous.next = reqNode.next;
        reqNode.next.previous = previous;
        this.size--

    }


    printList() {

        if (!this.head) {
            console.warn("Empty list");
            return;
        }
        let current = this.head, counter = 0;
        const result = [];
        while (counter < this.size) {
            result.push(current.data);
            current = current.next;
            counter++
        }
        console.log(result);
        console.log(this)
    }

}

const dl = new DoubleLinkedList();


dl.addAtFirst(10)
dl.addAtLast(30);
dl.addAtLast(40);
dl.addAtIndex(20, 2);
dl.removeAtIndex(1);
dl.getAtIndex(0)
dl.printList();