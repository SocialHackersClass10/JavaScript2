'use strict';
function createBase(numb) {
    var compt=9;
    return function () {compt += numb; numb=numb+3; return compt; }
}
  
const addSix = createBase(6);
  
// Put here your function calls...

console.log(addSix());
console.log(addSix());
console.log(addSix());

