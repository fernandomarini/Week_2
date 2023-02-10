

class Vector{

    // Declaracion de Atributos
        private elements: number[];

    // Constructor
    constructor( n: number, k: number ){
        this.elements = [];
        for( let i = 0 ; i < n ; i++){
            this.elements.push(Math.round(Math.random()*k));
        };        
    };

    //Metodos
    public print(){
        console.log(this.elements);
    };

    public add( v1: Vector ): Vector{
        let arrSumado: Vector = new Vector(0,0);
        for( let i = 0 ; i < this.elements.length ; i++ ){
        arrSumado.elements.push(this.elements[i] + v1.elements[i]); 
        };
        return arrSumado;
    };


};

let arr1 = new Vector(10,50);
let arr2 = new Vector(10,100);


arr1.print();
arr2.print();

console.log(arr1.add(arr2));
