//Write a function that takes an array of numbers as argument. Return the number of negative values in the array.//

//EScribe una funcion que tome un arreglo de numeros como argumentos
//retorna los valores negativos de los numeros en el arreglo

function myFunction(a){

    return a.filter(el => el < 0).length;
}

console.log(myFunction ([2,-3,-5,-6]))