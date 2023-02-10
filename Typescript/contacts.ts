import { Person } from "./person";

class Contacts{

    // Definicion Atributos
    public people: Person[];

    // Constructor
    constructor(){
        this.people = [];
    };
    
    //Definicion de Metodos
    public printCalendar(): void {
        console.log(this.people);
    };



}


export {Contacts}