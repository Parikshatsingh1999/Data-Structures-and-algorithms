function* test() {
    let x = 3;
    let count = 0;
    while (count < x) {
        yield count;
        count++;
    }
}

const generator = test();

console.log(generator.next())
console.log(generator.next())
