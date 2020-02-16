'use strict'
//Variables
let catImage = document.querySelector("img");
let positionNum = 10
let positionStyle = catImage.style.left = positionNum + "px";
let screenWidth = window.innerWidth;
//Function that moves the cat 10px to the right every 50 milliseconds
setInterval(function () {
    positionNum += 10;
    catImage.style.left = positionNum + "px";
    let halfScreen = screenWidth / 2;
    //Changing image source in the middle of the screen
    if (positionNum == halfScreen) {
        catImage.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
    }
    //Restarting the animation when it reaches the end of the screen
    else if (positionNum === screenWidth) {
        positionNum = 10;
        catImage.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
    }
}, 50)

