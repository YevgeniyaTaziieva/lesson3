//1. створити 3 обʼєкти через {}
var obj1 = {
    name: "test",
    age: 30
}

var obj2 = {
    key1: "text",
    key2: "high",
    key3: true
}

var obj3 = {
    color: "blue",
    size: "medium"
}

//2. створити 3 обʼєкти через Object()

let obj4 = new Object();
obj1.name = "user";
obj1.age = 25;

let obj5 = new Object();
obj2.key1 = "blablabla";
obj2.key2 = "test";
obj3.key3 = false;

let obj6 = new Object();
obj3.color = "yellow";
obj3.size = "small";

//3. створити обʼєкт на базі прототипу іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі

let car = {
    year: 2020,
    class: "m"
}

let newCar = Object.create(car);

console.log(newCar.year);

//4. створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
//5. унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let persone = {
    name: "User",
    age: 30
}

let engineer = Object.create(persone);
    engineer.experience = 3,
    engineer.skills = ["HTML", "CSS", "SQL"]


let QA_engineer = Object.create(engineer);
QA_engineer.skillTools = ["Postman", "Cypress"];

console.log(persone.name)
console.log(persone.age)

console.log(engineer.name)
console.log(engineer.age)
console.log(engineer.experience)
console.log(engineer.skills)

console.log(QA_engineer.name)
console.log(QA_engineer.age)
console.log(QA_engineer.experience)
console.log(QA_engineer.skills)
console.log(QA_engineer.skillTools)