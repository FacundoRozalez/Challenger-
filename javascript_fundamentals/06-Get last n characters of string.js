//Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result//

//Escribe una funcion
// que tome una cadena como argumento
// Extrae los 3 ultimos caracteres de la cadena
// Retorna el resultado

function myFunction(str) {
  
    return str.slice(-3);
 }

 console.log(myFunction("Facundo"))