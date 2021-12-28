var Persona = /** @class */ (function () {
    function Persona(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    Object.defineProperty(Persona.prototype, "Nombre", {
        get: function () {
            return this.nombre;
        },
        set: function (nombre) {
            this.nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Apellido", {
        get: function () {
            return this.apellido;
        },
        set: function (apellido) {
            this.apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
// Creamos instancia persona1.
var persona1 = new Persona("Mario", "Bros");
console.log("nombre persona 1=" + persona1.Nombre);
console.log("apellido persona 1=" + persona1.Apellido);
// Creamos instancia persona2.
var persona2 = new Persona("Luigi", "Bros");
console.log("nombre persona 2=" + persona2.Nombre);
console.log("apellido persona 2=" + persona2.Apellido);
// tsc persona.ts, para crear el archivo js.
// node persona.js, para ejecutar el archivo js.
// La salida del programa debería ser:
// nombre persona 1=Mario
// apellido persona 1=Bros
// nombre persona 2=Luigi
// apellido persona 2=Bros
