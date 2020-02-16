"use strict"
function hijackGoogleLogo() {
    let oldLogo = document.getElementById("hplogo");
    oldLogo.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
    oldLogo.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg";
}
hijackGoogleLogo();