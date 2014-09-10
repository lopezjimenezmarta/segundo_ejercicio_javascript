// Definimos variable Global
var variableGlobal = 10;

// Creamos una función
miFuncion = function(par){
	var variableLocal = 20;
	var suma = variableGlobal + variableLocal + par;

	document.write("La suma de las variables es igual a: " + "30")
	console.log("variableGlobal" + " + " + "variableLocal");
}; 

miFuncion(10);




