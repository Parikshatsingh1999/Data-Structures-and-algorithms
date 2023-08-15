console.log("Tree DS");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {

    constructor() {
        this.root = null;
    }

    insertNode(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.createNode(this.root, newNode);
    }

    createNode(parentNode, newNode) {
        if (newNode.value < parentNode.value) {
            if (parentNode.left === null) {
                parentNode.left = newNode;
            } else {
                this.createNode(parentNode.left, newNode)
            }
        } else {
            if (parentNode.right === null) {
                parentNode.right = newNode;
            } else {
                this.createNode(parentNode.right, newNode);
            }
        }
    }

    // search tree
    treeHas(value, root = this.root) {
        if (root === null) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            }
            if (value < root.value) {
                return this.treeHas(value, root.left)
            } else {
                return this.treeHas(value, root.right)
            }
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }


    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right);
            console.log(root.value);
        }
    }


    // BFS
    levelOrder() {

        if (!this.root) {
            return this.root;
        }

        const queue = [this.root];
        while (queue.length) {
            let root = queue.shift();
            console.log(root.value);
            if (root.left !== null) {
                queue.push(root.left);
            }
            if (root.right !== null) {
                queue.push(root.right);
            }
        }

    }

    delete(value) {
        this.root = this.deleteNode(value)
    }

    deleteNode(value, node = this.root) {

        if (node === null) {
            return node;
        }
        if (node.value === value) {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.right === null || node.left === null) {
                return node.left || node.right;
            }

            let minValue = this.minNode(node.right);
            node = this.deleteNode(minValue, node);
            node.value = minValue;
            return node;

        }
        if (value < node.value) {
            node.left = this.deleteNode(value, node.left);
            return node
        } else {
            node.right = this.deleteNode(value, node.right);
            return node
        }

    }

    minNode(node = this.root) {
        if (node.left === null) {
            return node.value;
        } else {
            return this.minNode(node.left);
        }
    }

    maxNode(node = this.root) {
        if (node.right === null) {
            return node.value;
        } else {
            return this.maxNode(node.right);
        }
    }

    treeDepth() {
        if (!this.root) {
            return 0;
        }

        return this.getDepth(this.root, 0)
    }

    getDepth(node, depth) {
        if (node == null) {
            return 0;
        }
        console.log(node.value, "reached")
        let leftdepth = this.getDepth(node.left, depth) + 1;
        let rightDepth = this.getDepth(node.right, depth) + 1;
        return Math.max(leftdepth, rightDepth);
    }


    printTree(node = this.root) {
        if (node) {
            console.log(node.value);
            this.printTree(node.left);
            this.printTree(node.right);
        }
    }

}

const tree = new Tree();
tree.insertNode(50);
tree.insertNode(30);
tree.insertNode(20);
tree.insertNode(10);


// tree.deleteNode(70);
// tree.inOrder()
// tree.preOrder()
// tree.postOrder();
console.log("tree", tree);


// tree.levelOrder();
console.log(tree.treeDepth());


