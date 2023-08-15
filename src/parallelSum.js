//For example: if arr is [16, 22, 35, 8, 20, 1, 21, 11], 
//then your program should output 1,11,20,35,8,16,21,22

console.log("Parallel Sum")

let arr = [16, 22, 35, 8, 20, 1, 21, 11];
let alreadyChecked = [];
let baseSum = arr.reduce((a, b) => a + b, 0);


const getSum = (list, remaining) => {
    list = list.sort();
    if (alreadyChecked.includes(list.join(","))) {
        return false;
    } else {
        alreadyChecked.push(list.join(","));
    }
    let sum = list.reduce((a, b) => a + b, 0);

    if (sum == baseSum) {
        if (!(list.length % 2)) {
            return list;
        } else return false;
    };

    if (!remaining.length) {
        return false;
    }

    if (sum > baseSum) {
        return false
    }

    if (sum < baseSum) {
        for (let x = 0; x < remaining.length; x++) {
            let item = remaining[x];
            const result = getSum([...list, item], remaining.filter(num => item != num));
            if (result?.length) {
                return result
            }
        }
    }
    return false;

}


let result = [];
if (!(baseSum % 2)) {
    baseSum = baseSum / 2
    result = getSum([arr[0]], [...arr].splice(1));
}

let final = -1;

if (result?.length && Array.isArray(result)) {
    let leftItems = arr.filter(item => !result.includes(item))
    result.sort((a, b) => a - b);
    leftItems.sort((a, b) => a - b);
    final = result[0] < leftItems[0] ? [...result, ...leftItems].join(",") : [...leftItems, ...result].join(",")
}

console.log(final);