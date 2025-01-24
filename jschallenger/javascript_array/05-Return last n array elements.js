//Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.//

//Escribe una funcion que tome un arreglo (a) y un numero (n) como argumento
//deberia retornar los ultimos n elementos de a

function myFunction(a,n){

    return a.slice(-n)

}

console.log(myFunction(["a","b","c","d","e"],2))