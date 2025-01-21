//Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array//

//Escribe una funcion que tome una arreglo (a) como argumento
//extrae las ultimas 3 elementos de 'a'
//retorna el resultado del arreglo

function myFunction(a){

    return a.slice(-3)
}

console.log(myFunction(["a","b","c","d","e"]))