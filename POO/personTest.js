let myLib = require("./person")

let camila = new myLib.Person("Camila Alejandra","Marini Dominguez", 12541236);

console.log(camila);

camila.peso = 45;
camila.altura = 1.50;

console.log(camila); // Verifico Peso y Altura

console.log(camila.calcIMC());


// ******** RETO 3 ***********

camila.aNac = 2001;

console.log(camila.calcEdad(2023));


// ******** RETO 4 ***********

camila.printAll();


// ******** RETO 5 ***********

camila.hobbies = ["leer", "trekking"];

console.log(camila); // Verifico hobbies

camila.printHobbies();
