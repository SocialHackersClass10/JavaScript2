'use strict'
let catImage = document.querySelector("img");
let positionNum = 10
let positionStyle = catImage.style.left = positionNum + "px";
let screenWidth = window.innerWidth;

setInterval(function () {
    positionNum += 10;
    catImage.style.left = positionNum + "px";
    if (positionNum === screenWidth / 2) {
        catImage.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif?itemid=10561424";
    }
    else if (positionNum === screenWidth) {
        positionNum = 10;
        catImage.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"
    }

}, 60)

