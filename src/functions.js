// get count of item used maximum times in an array;
const arr = [1, 2, 3, 4, 4, 5, 456, 5, 65, 6, 56, 5];

function getMode(list) {

    let result = 0, number;
    const copy = [...list].sort();
    const entries = [...new Set(copy)];
    entries.forEach(entry => {
        const length = copy.lastIndexOf(entry) - copy.indexOf(entry) + 1
        if (length > result) {
            result = length;
            number = entry
        }
    })
    return {
        maxSize: result,
        maxUsed: number
    }
}


// to check garbage values in array

const arr2 = [];

arr2[0] = 1;
arr2[1] = 4;
arr2[5] = 7

// Shows all values with undefined as values too for not filled indexes;
// for (let i of arr2) {
//     console.log(i);
// }

// // shows only the indexes being filled
// for (let i in arr2) {
//     console.log(i);
// }



// Given two arrays, sort the values of one array using the second array.

// Examples:

// Input : array1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"] array2 = [ 0, 1, 1, 0, 1, 2, 2, 0, 1] Output :['a', 'd', 'h', 'b', 'c', 'e', 'i', 'f', 'g']

// Input : array1 = ["g", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"] array2 = [ 0, 1, 1, 0, 1, 2, 2, 0, 1] Output : ['g', 'k', 'r', 'e', 'e', 'g', 's', 'f', 'o']

let array1 = ["g", "e", "e", "k", "s", "f", "o", "r", "g", "e", "e", "k", "s"];
let array2 = [0, 1, 1, 0, 1, 2, 2, 0, 1];
let copy = [...array2];
let sortedNumbers = [...array2].sort();
let result = [];
let count = 0;
array2.forEach(item => {
    let index = copy.indexOf(item);
    copy.splice(index, 1);
    count++
    result.push(array1[count + index]);

})

console.log(result);


