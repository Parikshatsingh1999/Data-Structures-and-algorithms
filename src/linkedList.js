
// Linked List
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.last = null;
    }

    addAtFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    addAtLast(data) {

        const node = new Node(data);
        if (!this.head) {
            this.head = node
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
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

    printSize() {
        console.log(this.size);
    }


    printList() {
        let current = this.head;
        const arr = [];
        while (current) {

            arr.push(current.data);
            current = current.next;
        }
        console.log(arr)
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

    removeAtIndex(index = null) {
        if (index == null || !this.head || index >= this.size || index < 0) {
            console.warn("Going out of bounds");
            return
        }
        let current = this.head, counter = 0, previous = null;
        if (index == 0) {
            this.head = this.head.next;
        } else {
            while (counter < index) {
                previous = current;
                current = current.next;
                counter++
            }
            previous.next = current.next;
        }
        this.size--;
    }

}


const firstList = new LinkedList();

firstList.addAtFirst(1);
firstList.addAtLast(2);
firstList.addAtLast(3);
firstList.addAtIndex(0.5, 0);
firstList.addAtIndex(3.5, 4);
firstList.removeAtIndex(5);


firstList.printList()