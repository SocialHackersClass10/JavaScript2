
{
    'use strict';

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 3 - Exercise 01 - Add six");
    console.log("Practice with closures");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    //  define the closure generator
    function createBase(paramBaseValue) {
        const baseValue=paramBaseValue;
        return (paramValue)=>{return paramValue+=baseValue};
    }

    //  define all required tests
    const testingList={             //  this works  ( even tho addSix is undeclared yet )
        test_1:()=>addSix(9),       //  because: the function only executes when evoked,
        test_2:()=>addSix(18),      //  which happens much later in the code,
        test_3:()=>addSix(30),      //  and by that point addSix has already been defined
    };

    //  create a closure containing a base value of 6
    const addSix=createBase(6);

    //  evoke all required tests - console.log() each with the result
    Object.keys(testingList).forEach((pLmnt,pIdx)=>{console.log(`${
        pLmnt.replace(/_+/g,' ')} : ${
        String(Object.values(testingList)[pIdx]).substr(4)} result is ${
        testingList[pLmnt]()}`)});

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};


;

