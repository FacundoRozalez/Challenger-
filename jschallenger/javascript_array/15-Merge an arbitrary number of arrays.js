//Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

//Escribe una funcion que tome argumentos en un numero arbitario de arrays
// deberia retornar un array  que contenga los valores de todos los arrays

function myFunction(...arrays){

    return arrays.flat()
}

console.log(myFunction([1, 2, 3], [4, 5, 6]))