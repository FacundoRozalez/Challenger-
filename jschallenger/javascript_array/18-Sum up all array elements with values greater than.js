//Write a function that takes an array (a) and a number (b) as arguments. Sum up all array elements with a value greater than b. Return the sum

//Escribe una funcion que tome un array y un numero como argumento. 
// Suma todos los elementos del array con el valor mayor que b . 
// Retorna la suma

function myFunction(a,b){

    return a.filter(a=> a>b)
    
    .reduce((acc,num)=> acc + num,0);
     
}

console.log(myFunction([1,2,3,4,5,6],3))
