
{
    'use strict';

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 3 - Exercise 05 - The lottery machine");
    console.log("Practice with callbacks");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    runBingo( 10,15);
    runBingo(-15,15);

    function runBingo (lowRange,highRange) {
        console.log(`Checking for Bingo for 3 and 5 in the range ${lowRange} to ${highRange} `);
        bingoThreeFive(lowRange,highRange,pCallbackThree,pCallbackFive);
    }

    function bingoThreeFive (pNumFrom,pNumTo,pCallbackThree,pCallbackFive) {
        const startNumber=!pNumFrom?0:pNumFrom;
        const stopNumber=!pNumTo?startNumber:pNumTo<startNumber?startNumber:pNumTo;
        const numArray=[];
        for (let i=startNumber;i<=stopNumber;i++) {numArray.push(i)};
        numArray.forEach(lmnt=>{
            if ((lmnt%3==0)&&(pCallbackThree)) {pCallbackThree(lmnt)};
            if ((lmnt%5==0)&&(pCallbackFive)) {pCallbackFive(lmnt)};
        });
    };

    function pCallbackThree (theNumber) {
        console.log(`We have a Winner for 3 on the value ${theNumber} `);
    };

    function pCallbackFive (theNumber) {
        console.log(`We have a Winner for 5 on the value ${theNumber} `);
    };

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};


;

