//Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result//

//Escribe una funcion que tome una arreglo (a) como argumento
//remueve las primeras 3 elementos de 'a'
//retorna el resultado

function myFunction(a){

    return a.slice(3)
}

console.log(myFunction([1,2,3,4,5]))