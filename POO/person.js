class Person{

    constructor(nom,ape,dni){
        this.nombres = nom
        this.apellidos = ape
        this.edad
        this.aNac
        this.nomPadre 
        this.nomMadre
        this.hermanos
        this.hijos
        this.dni = dni
        this.altura
        this.peso
        this.pelo
        this.ojos
        this.ocupacion
        this.nivelEd
        this.hobbies = []
    };

    //Metodos

    calcIMC(){
        let imc = 0;
        imc = (this.peso / (this.altura * this.altura)).toFixed(2);
        return "El IMC es : " + imc
    };
   
    calcEdad(year){
        let edad = year - this.aNac
        return "La edad es : " + edad
    };

    printAll(){ 
        console.log("El atriburo es: nombres y el valor es : "+ this.nombres);    
        console.log("El atriburo es: apellidos y el valor es : "+ this.apellidos);  
        console.log("El atriburo es: edad y el valor es : "+ this.edad);  
        console.log("El atriburo es: año de nacimiento y el valor es : "+ this.aNac);             
        console.log("El atriburo es: nombre del Padre y el valor es : "+ this.nomPadre);  
        console.log("El atriburo es: nombre de la Madre y el valor es : "+ this.nomMadre);  
        console.log("El atriburo es: hermanos y el valor es : "+ this.hermanos);  
        console.log("El atriburo es: hijos y el valor es : "+ this.hijos);  
        console.log("El atriburo es: dni y el valor es : "+ this.dni);  
        console.log("El atriburo es: altuna y el valor es : "+ this.altura);  
        console.log("El atriburo es: peso y el valor es : "+ this.peso);  
        console.log("El atriburo es: pelo y el valor es : "+ this.pelo);  
        console.log("El atriburo es: ojos y el valor es : "+ this.ojos);  
        console.log("El atriburo es: ocupacion y el valor es : "+ this.ocupacion);  
        console.log("El atriburo es: nivel de educacion y el valor es : "+ this.nivelEd);  
        console.log("El atriburo es: hobbies y el valor es : "+ this.hobbies);          
    };                       //  No me gusta, pero no encontre un for que funcione correctamente.


    printHobbies(){
        for ( let i = 0 ; i < this.hobbies.length ; i++ ) {
            console.log(this.hobbies[i])
        };
    };


}; // Fin Clase Person


module.exports = {Person}