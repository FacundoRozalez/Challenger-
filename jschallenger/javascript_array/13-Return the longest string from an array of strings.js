//Write a function that takes an array of strings as argument. Return the longest string.

// Escribe una funcion que tome un array de strings como argumento
// retorna el string mas largo

function myFunction( arr ) {

        return arr.reduce((a, b) => a.length <= b.length ? b : a)

    }

    console.log(myFunction(["hola","mañana"]))