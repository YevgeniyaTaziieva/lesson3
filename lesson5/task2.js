//реалізувати функцію поліндром (коли в обидва боки одинакова стрінга)

function isPolidrome(word){
    let a = word.toLowerCase().trim();
    let b = a.split("").reverse().join("");
    return a == b;
}


console.log(isPolidrome("abycedadecyba"));
console.log(isPolidrome("abc"));
