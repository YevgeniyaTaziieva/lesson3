//вивести тільки парні числа з масиву, вивести в зворотньому порядку

function getPaired(arr) {
    let numbers = num.forEach(function(item) {
        let a = item % 2;
        if (a > 0){
            arr.splice(item);
        } 
    })   
    return numbers.reverse();
}

let result = getPaired([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result);


//або

function getPaired(arr) {
    let pairedNumbers = arr.filter(function(item) {
      return item % 2 === 0;
    });
    return pairedNumbers.reverse();
}
  
let result2 = getPaired([1, 17, 3, 4, 15, 6, 20]);
console.log(result2);
  