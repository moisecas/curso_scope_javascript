// function moneybox(coins){
//     let savecoins=0;
//     savecoins += coins;
//     console.log(`moneybox: ${savecoins}`);//mostrar cuanto tengo

// }

// moneybox(10); //agregar 10 monedas
// moneybox(20); //agregar 20 monedas

//aplicando closures
// function moneybox2(){
//     let savecoins=0;
//     function addcoins(coins){
//         savecoins += coins; //agregando monedas a la caja   (savecoins=savecoins+coins)
//         console.log(`moneybox: ${savecoins}`); //mostrar cuanto tengo
//     }
//     return addcoins; //retornando la funcion 
    
// }
// const mymoneybox = moneybox2; //declarando la funcion
// mymoneybox(10); //agregar 10 monedas
// mymoneybox(20); //agregar 20 monedas

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
  }
  
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15); 

const moneyBoxAna = moneyBox();
moneyBoxAna(5);
moneyBoxAna(5);
moneyBoxAna(15); 



