"use strict"
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let doubleEvenNumbers = myNumbers.filter(item => item % 2 === 0).map(item => item * 2);
console.log(doubleEvenNumbers);