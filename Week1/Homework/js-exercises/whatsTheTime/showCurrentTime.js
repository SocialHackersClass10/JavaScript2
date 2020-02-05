"use strict"
//Create an h1 that contains the time
let h1 = document.createElement("h1");
h1.style.fontSize = ("5rem");
h1.style.textAlign = ("center");
document.body.appendChild(h1);

//Function to show the current time
function currentTime() {
    setInterval(function () {
        let today = new Date();
        let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        h1.innerHTML = time;
    }, 1000);
}
//Function onload
h1.onload = currentTime();


