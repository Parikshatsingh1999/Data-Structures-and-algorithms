class HashTable {
    constructor(size) {
        this.size = size || 50;
        this.table = new Array(this.size);
    }

    hashKey(key) {

        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    setKey(key, value) {
        let index = this.hashKey(key);
        let bucket = this.table[index]
        if (bucket) {
            let keyExists = bucket.find(pair => pair[0] === key);
            if (keyExists) {
                keyExists[1] = value;
                return
            }
            bucket.push([key, value]);
        } else {
            this.table[index] = [[key, value]];
        }

    }

    getKey(key) {
        let index = this.hashKey(key);
        if (!this.table[index]) {
            return undefined
        }
        let bucket = this.table[index]
        return bucket.find(pair => pair[0] == key)?.[1];
    }

    removeKey(key) {
        let index = this.hashKey(key);
        if (!this.table[index]) {
            return undefined
        }
        let bucket = this.table[index]
        let pair = bucket.find(pair => pair[0] == key);
        if (!pair) {
            console.warn(`${key} doesnt exist`);
            return
        }
        bucket.splice(bucket.indexOf(pair), 1);
    }

    printTable() {
        for (let i in this.table) {
            let bucket = this.table[i]
            bucket.forEach(pair => {
                console.log(pair[0], pair[1]);
            })
        }
    }

}

const table = new HashTable(20);

table.setKey("estt", 40);
table.setKey("estt", 50);
table.setKey("name", "test");
table.removeKey("test");
table.printTable()