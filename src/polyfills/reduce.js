const customeReduce = function (callback, start = null) {

    if (!Array.isArray(this)) {
        console.warn("customeReduce works on array only");
        return
    }
    let result;
    for (let i = 0; i < this.length; i++) {
        result = start ? callback(start, this[i], i, this) : this[i];
    }
    return result;

}
let test = [{ a: 1 }, { a: 2 }];

let fun = customeReduce.bind(test)

console.log(fun((a, b, index, test) => a * b.a, 4));

// console.log(test.reduce((a, b) => a * b.a, 4))
