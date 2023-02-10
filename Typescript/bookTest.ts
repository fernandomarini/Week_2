import { Book } from "./book";



let lib1 = new Book("Programacion Codenotch",170,"2546","Jose Herrera", "Menchu");

lib1.toString();


lib1.setTitle("Programación en Codenotch");
lib1.setAuthor("Jose Herrera y Cnia");
lib1.setEditorial("Menchu y Cnia.");

console.log(lib1.toString());

