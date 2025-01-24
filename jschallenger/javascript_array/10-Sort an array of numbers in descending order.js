//Write a function that takes an array of numbers as argument. It should return an array with-//

//Escribe una funcion que tome un arreglo de numeros como argumentos
//deberia regresar un arreglo con los numeros ordenados en orden descendiente

function myFunction(a){

    return a.sort().reverse()

    //otra solucion//
    //return a.sort((a,b)=>(b-a))//
}

console.log(myFunction([3,5,4,6,2]))