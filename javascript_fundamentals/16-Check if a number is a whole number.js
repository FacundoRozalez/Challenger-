//Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.//

//Escribe una funcion
//que tome un numero (a) como argumento
//si a es un numero entero no tiene decimales
//retorna verdadero
// de lo contrario retorna false

function myFunction(a){

  return Number.isInteger(a)
}


console.log(myFunction(10))