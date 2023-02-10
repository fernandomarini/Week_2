import { Book } from "./book";

class Library {

    // Declaracion de Atributos 
    private books: Book[];
    private address: string;
    private manager: string;

    // Constructor
    constructor(){
            this.books = [];
            this.address = "direccion";
            this.manager = "director";
        };

    // Metodos
    public setBooks( libros: Book[]){
        this.books = libros;
    };
    public getBooks():Book[]{
        return this.books;
    };

    public setAddress( direccion: string){
        this.address = direccion;
    };
    public getAddress():string{
        return this.address;
    };

    public setManager( director: string){
        this.manager = director;
    };
    public getManager():string{
        return this.manager;
    };

    public toString():void{
            for( let i = 0 ; i < this.books.length ; i++){
                  console.log(`" BooK "  \n
            Title - ${this.books[i].getTitle()} \n
            Number of page - ${this.books[i].getNPages()} \n
            ISBN - ${this.books[i].getIsbn()} \n
            Authos - ${this.books[i].getAuthor()} \n
            Editorial - ${this.books[i].getEditorial()} "`);
            };        
    };
    
    public getNumberOfBooks(): number {
        return this.books.length;
    };

    public findByAuthor ( autor:string): Book[] {
        let LibrosAutor: Book[] = [];
        for ( let i = 0 ; i < this.books.length ; i++){
            if( this.books[i].getAuthor() == autor ){
                LibrosAutor.push( this.books[i] ); 
            };
        };
        return LibrosAutor;

    };

};




export { Library }