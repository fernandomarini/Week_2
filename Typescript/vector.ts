

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

    public subs( v1: Vector ): Vector{
        let arrRestado: Vector = new Vector(0,0);
        for( let i = 0 ; i < this.elements.length ; i++ ){
        arrRestado.elements.push(this.elements[i] - v1.elements[i]); 
        };
        return arrRestado;
    };

    public mult( v1: Vector ): Vector{
        let arrMult: Vector = new Vector(0,0);
        for( let i = 0 ; i < this.elements.length ; i++ ){
        arrMult.elements.push(this.elements[i] * v1.elements[i]); 
        };
        return arrMult;
    };

    public multNumber( n: number ): Vector{
        let arrMultNumero: Vector = new Vector(0,0);
        for( let i = 0 ; i < this.elements.length ; i++ ){
        arrMultNumero.elements.push(this.elements[i] * n); 
        };
        return arrMultNumero;
    };

};

export {Vector}