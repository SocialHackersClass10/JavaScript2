"use strict"
const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

let collectiveAge = hackYourFutureMembers.reduce(function (acc, cur) {
    return acc + cur.age;
}, 0);
console.log(`The collective age of the HYF team is: ${collectiveAge}`)