const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const fruitWithoutLemon=fruitBasket.filter(fruit=> fruit!='Lemon');
console.log("My mom bought me a fruit basket, containing : " +fruitWithoutLemon+"!");