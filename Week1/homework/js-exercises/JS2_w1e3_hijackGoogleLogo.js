'use strict';

function changeLogo(id) {
  let logo = document.getElementById(id);
  logo.srcset = 'https://www.hackyourfuture.dk/static/logo-dark.svg'; //3
}

changeLogo('hplogo'); //2

/*
No homepage is safe from the logo bandit! Everytime he sees a Google Logo he replaces
it with a logo from HackYourfuture instead: https://www.hackyourfuture.dk/static/logo-dark.svg.

In this exercise you're expected to write a JavaScript function that can be executed in the console of the [Google website](https://www.google.com).

1. Inside a JavaScript file, called `hijackGoogleLogo.js`, create a function called hijackGoogleLogo
2. Find out how to select the element that contains the Google logo, and store it in a variable
3. Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead
*/