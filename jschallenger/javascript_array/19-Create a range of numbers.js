//Write a function that takes two numbers (min and max) as arguments. Return an array of numbers in the range min to max

//Escribe una funcion que tome dos numeros(menor y mayor) como argumento
//Retorna un array de numeros en el rango minimo al maximo

function myFunction (a,b){

     return [...Array(b-a+1)].map((_,i)=>a+i)
}

console.log(myFunction(1,6))