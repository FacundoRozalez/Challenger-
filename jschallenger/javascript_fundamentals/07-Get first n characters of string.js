//Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result//

// Escribe una funcion
// que tome una cadena (a) como argumento
// consigue los primeros 3 caracteres de (a)
// Retrona el resultado

function myFunction(a) {
    return a.slice(0, 3);
}
console.log(myFunction("Facundo"))