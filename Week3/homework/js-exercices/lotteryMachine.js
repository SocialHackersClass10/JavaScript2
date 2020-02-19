
function lotteryThreeFive (valStart, valFinale, divBy3, divBy5){
    let myArray=[valStart];
    for(let i=1; i<=valFinale-valStart; i++){
        myArray.push(valStart+i);
    }
    console.log(myArray);
    for(let elements of myArray){
        if((elements%3)===0){
            divBy3(elements);
            console.log("------------------");
        }
        if((elements%5)===0){
            divBy5(elements);
            console.log("------------------");
        }
    }
//    return myArray;
}
function divByTree(element){
    console.log(element+" is divible by 3")
}
function divByFive(element){
    console.log(element+" is divible by 5")
}
lotteryThreeFive(0,15,divByTree, divByFive);

;
