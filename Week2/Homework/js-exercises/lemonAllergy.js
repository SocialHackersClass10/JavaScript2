"use strict"
const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
let fruitsWithoutLemons = fruitBasket.filter(fruit => fruit !== 'Lemon');
console.log(`My mom bought me a fruit basket, containing ${fruitsWithoutLemons.join(", ")}`)