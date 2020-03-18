'use strict';

document.body.style.fontFamily = 'Arial, sans-serif'; //2
document.getElementById('nickname').textContent = 'HackerMan'; //3*
document.getElementById('fav-food').textContent = 'Pizza';
document.getElementById('hometown').textContent = 'Area 51'; //*3
let listItem = document.getElementsByTagName('li');
for (let i = 0; i < listItem.length; i++) { //4*
  listItem[i].className = 'item';
} //*4

let image = document.createElement('img'); //6*
image.src = 'https://farm9.static.flickr.com/8522/8642935003_8c846ed365.jpg';
document.body.appendChild(image); //*6

/*
1. Add a script tag to the bottom of the HTML body.
2.(In the JavaScript) Change the body tag's style so it has a font-family of "Arial, sans-serif".
3.(In the JavaScript) Replace each of the spans(nickname, fav - food, hometown) with your own information.
4. Iterate through each li and change the class to "list-item".
5.(In the HTML head) Add a style tag that sets a rule for .list - item to make the color red.
6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
*/