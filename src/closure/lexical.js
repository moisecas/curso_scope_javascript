//ambito lexico de una funcion, accesibilidad de variables anidadas, accesibilidad de las variables esta determinada según el ambito en el que se encuentra anidado la funcion

const myglobal = 0
//funcion dentro de funciones

function myfuncion(){
    const myNumber=1;
    console.log(myglobal);
    //funcion dentro de funciones
    function myfuncion2(){ //funcion interna, clousure
        const inner=2;
        console.log(myNumber,myglobal);
        function child(){
            console.log(inner,myNumber,myglobal);
        }
        return child();
    }
    return myfuncion2();
}
myfuncion(); 
/*
output:
0
1 0
2 1 0 
*/
