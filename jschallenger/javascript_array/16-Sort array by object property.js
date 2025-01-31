//Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array

//Escribe una funcion que tome un array de objetos como argumento.
//Ordenalos al array por propiedad b en orden ascendente
//retorna el orden resultante

function myFunction(arr) {
    const a = (x, y) => x.b - y.b;
    return arr.sort(a);
 }

 console.log(myFunction([{a:2,b:10},{a:5,b:4}]))