//block scope , solo se puede acceder a la variable dentro del bloque

function fruits() {
    if(true){
        var fruit = 'apple'; //function scope, accesible en toda la función
        let fruit2 = 'banana'; //block scope, accesible solo en el bloque condicional if
        const fruit3 = 'orange'; //block scope, accesible solo en el bloque condicional if
    }
    console.log(fruit); //apple
    console.log(fruit2); //banana, por ser let, no se puede acceder a la variable fuera del bloque, debo moverla al bloque if para poder acceder a ella
    console.log(fruit3); //orange, por ser const, no se puede acceder a la variable fuera del bloque 
}
fruits();