//hoisting, eleva la variable a la cima de la funcion y la declara

var nameofdog; 
console.log(nameofdog)
var nameofdog = 'dog'; //variable global, da undefined porque no se ha declarado al inicio de la aplicación 
console.log(nameofdog) //dog acá muestra pues ya se asigno el valor a la variable 

nameofdog()
function nameofdog(){
    console.log(`el mejor perrito es ${elmo}`) //me da undefined porque no se ha declarado la variable
}
var elmo = 'elmo';
