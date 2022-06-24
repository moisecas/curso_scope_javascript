function saludar() {
    let username='juan';
    function displayName() {
        return `Hola ${username}`; //accediendo a la variable global dentro de la funcion
    }   
    return displayName();
}

const g = saludar();
console.log(g); //Hola juan
