
{
    'use strict';

    function getCollectiveAge(objArray) {
            function logMsg(msgHeader,msgText,msgValue) {
                msgHeader?console.log(msgHeader):null;  msgText?console.log(msgText):null;
                msgValue?console.log(msgValue):null;    console.log('-'+' -'.repeat(20));   };
            function safeInt(inValue,defValue) {let fres=parseInt(inValue); return (isNaN(fres)?defValue:fres)};
            logMsg('Collective age - aggregation exercise'
                    ,'Diferent solutions to get same result, calculated on following dataset:',objArray);
            let sum1=objArray.map(lmnt=>safeInt(lmnt['age'],0)).reduce((aSum,lmnt)=>aSum+lmnt);
            logMsg('Using map (as per exercise request) & reduce (to aggregate result)'
                    ,`Code: let sum1=objArray.map(lmnt=>safeInt(lmnt['age'],0)).reduce((aSum,lmnt)=>aSum+lmnt);`
                    ,`The aggregated value (collective age) is [${sum1}]`);
            let sum2=0; objArray.map(lmnt=>(sum2+=safeInt(lmnt['age'],0)));
            logMsg('Using only map (as per exercise request) for sum aggregation'
                    ,`Code: let sum2=0; objArray.map(lmnt=>(sum2+=safeInt(lmnt['age'],0)));`
                    ,`The aggregated value (collective age) is [${sum2}]`);
            let sum3=objArray.reduce((aSum,lmnt)=>aSum+safeInt(lmnt['age'],0),0);
            logMsg('Using only reduce (to aggregate wanted result)'
                    ,`Code: let sum3=objArray.reduce((aSum,lmnt)=>aSum+safeInt(lmnt['age'],0),0);`
                    ,`The aggregated value (collective age) is [${sum3}]`);
            return sum3;
    }

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 2 - Exercise 04 - Collective Age");
    console.log("Practice with Array mapping and value aggregation ( .map  and .reduce )");
    console.log("- - - - - - - - - - - - - - - - - - - - -");
    console.log("Bonus: safeguarding against NaN for non-numeric values or missing property in dataset");
    console.log("- - - - - - - - - - - - - - - - - - - - -");
    const hackYourFutureMembers = [
        { name: 'Wouter',       age: 33 },
        { name: 'Federico',     age: 32 },
        { name: 'Someone old',  ages: 452 },
        { name: 'Too young',    age: 'Young' },
        { name: 'Noer',         age: 27 },
        { name: 'Tjebbe',       age: 22 },
    ];
    getCollectiveAge(hackYourFutureMembers);
    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

;

