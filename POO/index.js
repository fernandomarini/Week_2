let myLib = require ("./person");

let fernando = new Person("Fernando Ariel","Marini Scrizzi", 13586852);

console.log(fernando); // Verifico fernando

// ******** RETO 2 ***********

fernando.peso = 75;
fernando.altura = 1.72;

console.log(fernando); // Verifico Peso y Altura

console.log(fernando.calcIMC());


// ******** RETO 3 ***********

fernando.aNac = 1979;

console.log(fernando.calcEdad(2023));


// ******** RETO 4 ***********

fernando.printAll();


// ******** RETO 5 ***********

fernando.hobbies = ["trekking", "montanismo"];

console.log(fernando); // Verifico hobbies

fernando.printHobbies();