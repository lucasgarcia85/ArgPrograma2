"use strict";
let message = "hola mundo";
console.log(message);
let nombre = "Mateo";
let msg = `Mi nombre es ${nombre}`;
console.log(msg);
class persona {
    constructor(nombre, apellido, anioNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anioNac = anioNac;
    }
    edad(anioActual) {
        return anioActual - this.anioNac;
    }
}
let a;
let b;
let c = 101;
// c ="one"; error porque es string originalmente
let recursos;
recursos = ["memoria", "disco", 100];
let recursos2 = ["memoria", "disco", "procesador"];
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    get Nombre() {
        return this.nombre;
    }
    set Nombre(nombre) {
        this.nombre = nombre;
    }
    get Apellido() {
        return this.apellido;
    }
    set Apellido(apellido) {
        this.apellido = apellido;
    }
}
// Creamos instancia persona1.
let persona1 = new Persona("Mario", "Bros");
console.log("nombre persona 1=" + persona1.Nombre);
console.log("apellido persona 1=" + persona1.Apellido);
// Creamos instancia persona2.
let persona2 = new Persona("Luigi", "Bros");
console.log("nombre persona 2=" + persona2.Nombre);
console.log("apellido persona 2=" + persona2.Apellido);
// tsc persona.ts, para crear el archivo js.
// node persona.js, para ejecutar el archivo js.
// La salida del programa debería ser:
// nombre persona 1=Mario
// apellido persona 1=Bros
// nombre persona 2=Luigi
// apellido persona 2=Bros
class Operacion {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set valorA(value) {
        this.valorA = value;
    }
    set valorB(value) {
        this.valorB = value;
    }
    get resultado() {
        return this.resultado;
    }
}
class Suma extends Operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operacion {
    Resta() {
        this.resultado = this.valorA - this.valorB;
    }
}
