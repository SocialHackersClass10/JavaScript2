"use strict"
//Creating array with quotes
const quotes = [
    "Science is nothing but perception",
    "The greatest wealth is to live content with little",
    "When the mind is thinking it is talking to itself",
    "Life must be lived as play",
    "Learning never exhausts the mind",
    "Independence is happiness"
];
//Selecting button and quote text
let button = document.querySelector(".new-quote");
let quoteText = document.querySelector("#quote");

//Function that returns a random quote from the array above
function returnQuote() {
    quoteText.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}
//Returning a random quote when the button is clicked
button.addEventListener("click", returnQuote);