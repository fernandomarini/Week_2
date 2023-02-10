class Person{

    //Definicion de Atributos
    public name: string;
    public age: number;
    private address: string;

    // Constructor
    constructor(){
        this.name = "nombre";
        this.age = 0;
        this.address = "direccion";
    };
    
    // Metodos
    public printName():void{
        console.log(this.name);
    };

    public yearOfBirth( año: number): void{
        console.log(año - this.age);
    };
    
    public setAdress( direccion: string){
        this.address = direccion;
    };

    public getAddress():string{
        return this.address;
    };

}



export {Person}