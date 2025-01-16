//Write a function that takes a string (a) as argument. Extract the first half a. Return the result//

// Escribe una funcion
// que tome una cadena (a) como argumento
// Extrae la primera mitad de a
// Retorna el resultado

function myFunction(a) {
  
    return a.slice(0, a.length / 2);
 }

 console.log(myFunction("Facundo"))