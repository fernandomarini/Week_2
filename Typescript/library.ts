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

    public toStringL():string{
        let cadena: string = "";
            for( let i = 0 ; i < this.books.length ; i++){
                  cadena += (`BOOK ${i+1} \n${this.books[i].toString()}`);
            };    
            return cadena;    
    };
    
    public getNumberOfBooks(): number {
        return this.books.length;
    };

    public findByAuthor ( autor:string): Book[] {
        let librosAutor: Book[] = [];
        for ( let i = 0 ; i < this.books.length ; i++){
            if( this.books[i].getAuthor() == autor ){
                librosAutor.push( this.books[i] ); 
            };
        };
        return librosAutor;

    };

};



export { Library }