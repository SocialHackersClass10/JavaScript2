'use strict';
let cat = document.getElementsByTagName('img')[0]; //2
cat.style.left = '0px'; //3
let moveFwd = true;
let leftValue = 0;

function catWalk() { //4-
  leftValue = parseInt(cat.style.left);
  if (moveFwd && (leftValue > (window.innerWidth - cat.width))) moveFwd = false; //6-
  if (!moveFwd && (leftValue <= 0)) moveFwd = true; //-6-
  if (moveFwd) cat.style.left = (leftValue += 10) + 'px'; //-4
  else cat.style.left = (leftValue -= 10) + 'px'; //-6

  if ((leftValue >= (window.innerWidth / 2)) && (leftValue <= window.innerWidth)) cat.src = 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424';//7*
  else cat.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif'; //*7
}
window.setInterval(catWalk, 50); //5

/*
The cat walk **

  Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

1. Add a script tag at the bottom of the page, where you'll put all your code.
2. Create a variable to store a reference to the img.
3. Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
4. Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
5. Call that function every 50 milliseconds.Your cat should now be moving across the screen from left to right.Hurrah!
6. When the cat reaches the right - hand of the screen, restart them at the left hand side("0px").So they should keep walking from left to right across the screen,
 forever and ever.
7. When the cat reaches the middle of the screen, replace the img with an image of a cat dancing(use this URL: https://tenor.com/StFI.gif), keep it dancing for 5 seconds,
 and then replace the img with the original image and have it continue the walk.
*/