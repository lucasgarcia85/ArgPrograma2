var message = "hola mundo";
console.log(message);
var nombre = "Mateo";
var msg = "Mi nombre es ".concat(nombre);
console.log(msg);
// Enumeraciones
var Color;
(function (Color) {
    Color[Color["blanco"] = 0] = "blanco";
    Color[Color["verde"] = 1] = "verde";
    Color[Color["azul"] = 2] = "azul";
})(Color || (Color = {}));
var colorAuto = Color.blanco;
console.log(colorAuto);
