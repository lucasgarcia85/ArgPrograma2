class Persona {
    private nombre: string;
    private apellido: string;

    constructor(nombre:string, apellido:string) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get Nombre():string {
        return this.nombre;
    }

    set Nombre(nombre: string) {
        this.nombre = nombre;
    }

    get Apellido():string {
        return this.apellido;
    }

    set Apellido(apellido: string) {
        this.apellido = apellido;
    }
}

// Creamos instancia persona1.
let persona1 = new Persona("Mario","Bros");
console.log("nombre persona 1=" + persona1.Nombre);
console.log("apellido persona 1=" + persona1.Apellido);

// Creamos instancia persona2.
let persona2 = new Persona("Luigi","Bros");
console.log("nombre persona 2=" + persona2.Nombre);
console.log("apellido persona 2=" + persona2.Apellido);

// tsc persona.ts, para crear el archivo js.
// node persona.js, para ejecutar el archivo js.

// La salida del programa debería ser:
// nombre persona 1=Mario
// apellido persona 1=Bros
// nombre persona 2=Luigi
// apellido persona 2=Bros