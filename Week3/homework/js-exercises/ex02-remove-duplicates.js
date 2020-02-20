
{
    'use strict';

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log("JS-2 - week 3 - Exercise 02 - Take out the duplicates");
    console.log("Practice with array manipulation");
    console.log("- - - - - - - - - - - - - - - - - - - -");

	const myNumberList=[4,6,4,5,6,3,4,7,2,5,8,4,1,9];
	console.log(`my Number List                             [${joinQuoted(myNumberList)}]`);
	console.log(`filter cloned  (original array untouched)  [${
								joinQuoted(filterCloneUniqueArrayElements(myNumberList))}]`);
	removeDuplicateArrayElements(myNumberList);
	console.log(`uniquefied    (applied on original array)  [${joinQuoted(myNumberList)}]`);
	console.log(` `);

	const myCharList=['q','w','e','r','3','w','1','t','q','y',1];
	console.log(`my Character List                          [${joinQuoted(myCharList)}]`);
	console.log(`filter cloned  (original array untouched)  [${
								joinQuoted(filterCloneUniqueArrayElements(myCharList))}]`);
	removeDuplicateArrayElements(myCharList);
	console.log(`uniquefied    (applied on original array)  [${joinQuoted(myCharList)}]`);

    function joinQuoted (theArray,joinChar)
        {return theArray.map(lmnt=>typeof(lmnt)=='string'
                        ?'"'+lmnt.replace(/\"/g,"'")+'"':lmnt).join(joinChar)};

	function filterCloneUniqueArrayElements (theArray)
		{return theArray.filter((pLmnt,pIdx,pArray)=>pIdx==pArray.indexOf(pLmnt))};

	function objectifyCloneArrayElements (theArray) {
		let unq={};
		theArray.forEach(lmnt=>unq[lmnt]=1);
		return Object.keys(unq);
	};

	function removeDuplicateArrayElements (theArray) {
		let dupIndexList=[];
        theArray.forEach((pLmnt,pIdx)=>pIdx==theArray.indexOf(pLmnt)?null:dupIndexList.unshift(pIdx));
		//console.log(`               indice of duplicate values  [${dupIndexList}]`);
        dupIndexList.forEach(pLmnt=>{theArray.splice(pLmnt,1)});
        return theArray;
	};

    console.log("= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =");
    console.log(" ");
};


;

