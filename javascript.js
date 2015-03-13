//uso de variable, condiciones y mostrar en pantalla resultado

var velocidad = 80;

if (velocidad > 80 ) {
	
	console.log("Bajar la velocidad");
} 
else {

console.log("Manejas seguro");
}

//llamar una funcion con un parametro

var dividirPorCinco = function (number) {
    var val = number / 5;
    console.log(val);
};


dividirPorCinco(100);


// codigo reusable

var costoZapatos = function(cantidad)
{
var precio=500;

console.log(cantidad*precio)

};

costoZapatos("2");


var costoPlayeras = function(cantidad)
{
var precio=250;

console.log(cantidad*precio)

};

costoPlayeras("2");

//uso de return(devolver un valor)

var porCinco = function(numero)
{
    return numero * 5;
};

//funciones con dos parametros
var perimetroCaja = function (longitud, ancho)
{
return longitud + longitud + ancho + ancho

};

perimetroCaja(5,5);


