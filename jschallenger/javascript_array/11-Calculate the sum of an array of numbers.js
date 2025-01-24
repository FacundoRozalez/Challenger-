//Write a function that takes an array of numbers as argument. It should return the sum of the numbers.//

//Escribe una funcion que tome un arreglo de numeros como argumentos
//deberia devolver la suma de los numeros.

function myFunction(a){
    
    return a.reduce((acc,num)=> acc + num,0);
}

console.log(myFunction([2,5,3,7]))