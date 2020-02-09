"use strict"
//DOM elements selection
const lengthUp = document.querySelector("#length-up");
const lengthDown = document.querySelector("#length-down");
const lengthDisplay = document.querySelector("#length-display");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const duration = document.querySelector("#duration");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");


//Increasing and decreasing the session length
lengthUp.addEventListener("click", () => {
    let plusOne = parseInt(lengthDisplay.innerHTML) + 1;
    lengthDisplay.innerHTML = plusOne;
    duration.innerHTML = `<span id="min">${lengthDisplay.innerHTML}</span>:<span id="sec">00</span>`
});
lengthDown.addEventListener("click", () => {
    let minusOne = parseInt(lengthDisplay.innerHTML) - 1;
    lengthDisplay.innerHTML = minusOne;
    duration.innerHTML = `<span id="min">${lengthDisplay.innerHTML}</span>:<span id="sec">00</span>`
})

//Start timer
let counter = {}

play.addEventListener("click", function () {
    counter.end = parseInt(minutes.innerHTML);

    counter.min = minutes;
    counter.sec = seconds;

    if (counter.end > 0) {
        counter.ticker = setInterval(function () {
            counter.end--;
            if (counter.end <= 0) {
                clearInterval(counter.ticker);
                counter.end = 0;
            }
            let secRemain = counter.end;
            let minRemain = Math.floor(secRemain / 60);
            secRemain -= minRemain * 60;

            counter.min.innerHTML = minRemain;
            counter.sec.innerHTML = secRemain;
        }, 1000);
    }
});



