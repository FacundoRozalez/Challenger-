//Write a function that takes an array of numbers as argument. It should return the average of the numbers.//

//Escribe una funcion que tome un arreglo de numeros como argumento
//deberia retornar el promedio de los numeros

function myFunction (a){

    return a.reduce((acc,num)=> acc + num,0)/ a.length
}

console.log(myFunction([2,5,3,7]))