import { Book } from "./book";
import { Library } from "./library";


let yeni = new Library();

let lib1 = new Book("Programacion Codenotch",170,"2546","Jose Herrera", "Menchu");
let lib2 = new Book("Programacion Javascript",70,"2556","Juan Perez", "Menchu");
let lib3 = new Book("Programacion typescript",10,"2547","Jose Herrera", "Menchu");
let lib4 = new Book("Programacion HTML y CSS",120,"2247","Ricardo Lopez", "Menchu");

yeni.setBooks([lib1, lib2, lib3, lib4]);

console.log(yeni.getBooks());

console.log(yeni.toStringL());

console.log(` La cantidad de libros en stock es : ${yeni.getNumberOfBooks()}.`);

console.log(yeni.findByAuthor("Jose Herrera"));

