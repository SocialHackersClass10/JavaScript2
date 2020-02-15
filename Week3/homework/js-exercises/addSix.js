"use strict"
function createBase(base, num) {
    return num => base + num;
}
const addSix = createBase(6);
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));