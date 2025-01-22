//Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array//

//Escribe una funcion que tome un arreglo (a) como argumento
//extrae los primeros 3 elementos de a
//retorna el arreglo resultante

function myFunction (a){

    return a.slice(0,3)
}

console.log(myFunction(["a","b","c","d","e"]))