'use strict';

const letter = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
function removeDuplicates(array){
    
   for( let element of array){
        let run=(array.indexOf(element)+1);
        for(run; run<array.length; run++){
            if(array[run]==element){
                array.splice(run, 1);
            }
        }  
    }
    return array;      
}
console.log(removeDuplicates(letter));

