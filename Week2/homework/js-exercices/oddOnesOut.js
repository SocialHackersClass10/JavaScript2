function doubleEvenNumbersMap(numbers){
    return numbers.map(function(element){
        if(element%2===0){
            return element*2
        }
    })
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbersMap(myNumbers));

function doubleEvenNumbersFilter(numbers){
    return numbers.filter(function(element){
        if(element%2===0){
            return element*2
        }
    });
    
}

console.log(doubleEvenNumbersFilter(myNumbers));