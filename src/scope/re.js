//redeclaración de variables 

var nombre; //declarando la variable, su valor es undefined no tiene nada asignado
nombre='juan'; //asignando el valor a la variable
console.log(nombre); //juan 
//declaramos, asignamos y mostramos

//reasignar 
var apellido = 'perez'; //declarar y asignar la variable 
apellido = 'castro'; //reasignar el valor
console.log(apellido); //mostrar, castro 

var segundonombre = 'simon'; //declarar
var segundonombre = 'juan'; //reasignar el valor
console.log(segundonombre); //mostrar, juan

//usando let
let nombre2="simon"; //declarando la variable
nombre2='juan'; //con let puedo reasignar 
console.log(nombre2); //juan
//let nombre2="moises"; //no se puede reasignar el valor de la variable, marca error

//const 
const nombre3="moises"; //declarando la variable
nombre3='juan'; //no es posible reasignar el valor de la variable, marca error tampoco asignar un valor nuevo
console.log(nombre3);  

//agregar un valor a una variable
const vehiculo=[]; //declarando la variable
vehiculo.push('moto'); //agregando un valor a la variable
console.log(vehiculo); //mostrar, ['moto']
vehiculo.pop(); //eliminando el ultimo valor de la variable
console.log(vehiculo); //mostrar, []  



