

class Book{

// Declaracion de Atributos en Constructor    

//Constructor
    constructor(
        private title: string,
        private nPages: number,
        private isbn: string,
        private author: string,
        private editorial: string
    ){};


//Metodos

    public setTitle( titulo: string){
        this.title = titulo;
    };
    public getTitle():string{
        return this.title;
    };

    public setNPages( numPaginas: number){
        this.nPages = numPaginas;
    };
    public getNPages():number{
        return this.nPages;
    };

    public setIsbn( numStandar: string){
        this.isbn = numStandar;
    };
    public getIsbn():string{
        return this.isbn;
    };

    public setAuthor( autor: string){
        this.author = autor;
    };
    public getAuthor():string{
        return this.author;
    };

    public setEditorial( editorial: string){
        this.editorial = editorial;
    };
    public getEditorial():string{
        return this.editorial;
    };

    public toString():string{
        let cadena: string = "";
        cadena =(`"  Title - ${this.title} \n
    Number of page - ${this.nPages} \n
    ISBN - ${this.isbn} \n
    Authos - ${this.author} \n
    Editorial - ${this.editorial} "\n`);     
       return cadena;

    };

};



export {Book}



