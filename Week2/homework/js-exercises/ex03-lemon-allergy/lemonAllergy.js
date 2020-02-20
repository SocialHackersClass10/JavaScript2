
{
    'use strict';

    function filterFruits(fruitArray,allergicFruit) {
        console.log(`Your mother bought you a basket of fruit, that contains [${fruitArray}]`);
        let fResult=fruitArray.filter(lmnt=>lmnt.toLowerCase()!=allergicFruit.toLowerCase());
        if (fruitArray.length==fResult.length) {
			console.log(`How nice of her! She even remembered not to include any`+` ${allergicFruit}, which you are allergic to.`);
        } else {
			console.log(`Unfortunately she failed to remember that you are allergic to`+` ${allergicFruit}, which you asked her to remove.`);
            console.log('Now the basket '+(fResult.length<1?'is sadly empty!':`contains [${fResult}].`));
        }
        return fResult;
    }

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 2 - Exercise 03 - Lemon allergy");
    console.log("Practice with Array filtering");
    console.log("- - - - - - - - - - - - - - - - - - - -");

    filterFruits(['Apples','LeMons','Grapefruits','LemOns','Bananas','Watermelons','LemoNs'],'Lemons');
    console.log("- - - - - - - - - - - - - - - - - - - -");
    filterFruits(['Apples','aPpLeS','APPLES'],'apples');
    console.log("- - - - - - - - - - - - - - - - - - - -");
    filterFruits(['Apples','Lemons','Grapefruits','Bananas','Watermelons','Oranges'],'Grapes');

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};

;

