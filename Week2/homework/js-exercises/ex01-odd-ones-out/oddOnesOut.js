
{
    'use strict';

    function doubleEvenNumbers(numbers) {
        return numbers.filter(aValue=>aValue%2==0).map(aValue=>aValue*2)};


    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 2 - Exercise 01 - The odd ones out");
    console.log("Practice with Array methods map & filter: rewrite given function doubleEvenNumbers()");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    let testValues=[1,2,3,4];
    console.log(`Evoking doubleEvenNumbers([${testValues}]) yields this [${doubleEvenNumbers(testValues)}] result`);

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};


;

