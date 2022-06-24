'use strict'; //asigna un modo estricto a la aplicación 
pi = 3.14 //arrojaría error por el modo strict
console.log(pi); //3.14

function funcion(){
    'use strict';
    return pi=3.14; //arrojaría error por el modo strict 
}
console.log(funcion()); //undefined 