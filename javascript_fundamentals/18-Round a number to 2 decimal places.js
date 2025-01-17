//Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number//

//Escribe una funcion
//que tome un numero (a) como argumento
//redondea a al segundo digito despues del punto decimal
// retorna el numero redondeado

function myFunction(a){

        return Number(a.toFixed(2));
    
}

console.log(myFunction(2.44324325))