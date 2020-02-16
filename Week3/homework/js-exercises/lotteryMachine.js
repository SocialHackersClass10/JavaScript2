"use strict"
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let n = startIndex; n < stopIndex; n++) {
    numbers.push(n);
  }

  numbers.forEach(n => {
    if (n % 3 === 0) {
      threeCallback();
    }
    else if (n % 5 === 0) {
      fiveCallback();
    }
  })
}
function sayThree() {
  console.log("three");
}
function sayFive() {
  console.log("five");
}

threeFive(10, 15, sayThree, sayFive);
