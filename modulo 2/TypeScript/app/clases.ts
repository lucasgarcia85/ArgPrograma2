class persona{

    nombre:string;
    apellido:string;
    anioNac:number;
  
  edad(anioActual:number):number{
    return anioActual - this.anioNac;
  }
  
  
    constructor(nombre:string,apellido:string,anioNac:number){
    this.nombre=nombre;
    this.apellido=apellido;
    this.anioNac=anioNac;
    }
  
  }