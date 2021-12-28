class Operacion{
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    
    constructor(){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
        
    }
    
    set valorA(value:number){
        this.valorA=value;
    
    }
    
    set valorB(value:number){
        this.valorB=value;
        
    }
    get resultado():number{
        return this.resultado;
    
    }
}
    
    class Suma extends Operacion{
    
        Sumar(){
            this.resultado= this.valorA + this.valorB;
    
        }
    
    }
    
    class Resta extends Operacion{
        Resta(){
            this.resultado = this.valorA - this.valorB;
        }
    }
    
