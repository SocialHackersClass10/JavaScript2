"use strict"
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(arr) {
    let noDuplicates = arr.filter((item, index) => arr.indexOf(item) === index);
    return noDuplicates;
}
console.log(removeDuplicates(letters));