'use strict';
// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();
/* This function will be semi execute automaticaly. that why we use parenrhese at 3 times. we declare and initialize two times "a" variable, the first is globale for all functions and second is local for the first function but  it's global for the second function who is inside also the first function. In the second function we alert "a" variable, the function go up and check the first "a" variable that going to find and it will alert "12", value of the locale variable.*/