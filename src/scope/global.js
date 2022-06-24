//variables
var a; //declarando la variable 
var b = 2; //declarando la variable con un valor inicial
b = 3; //reasignando el valor de la variable
var a = 4; //redeclaración 

//global scope, cualquier variable que se encuentre en el documento, pasan a ser variables globales 
var fruit = 'apple'; //global
function bestFuit(){
    
    console.log(fruit);
}
bestFuit(); //apple


function conuntries(){
    country = 'chile'; //global, accesible desde cualquier lugar del documento 
    console.log(country);
}
conuntries(); //chile
console.log(country); //chile
