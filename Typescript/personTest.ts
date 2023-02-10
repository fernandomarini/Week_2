import { Person } from "./person";


let fer = new Person(); // Creo objeto fer

fer.name =  "Fernando"
fer.age = 43;

fer.setAdress("Mi direccion Typescript") // Modif la direccion

fer.printName();
fer.yearOfBirth(2023);
console.log(fer.getAddress());