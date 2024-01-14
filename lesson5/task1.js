//реалізувати реверс стрінги (вивод в зворотньому порядку)

function reverse(str){
    let arr = str.split("");
    let newArr = arr.reverse();
    let word = newArr.join("");
    return word;
}

let result = reverse("igor");
console.log(result);