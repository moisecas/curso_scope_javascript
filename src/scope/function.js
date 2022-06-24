function greeting() {
  let username = 'John';
    
    if(username==='John'){
        let username = 'John';
        console.log(`Hello ${username}`);
    }else{
        console.log("no es John");
    }
}

greeting();  
console.log(username); //undefined, no podemos acceder a username porque esta dentro de una función, function scope
