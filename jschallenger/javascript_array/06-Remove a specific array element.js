//Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.//

//Escribe una funcion que tome un arreglo (a) y un valor (b) como argumento
// La funcion debería remover todos los elementos equivalentes a (b) del arreglo
//retorna el arreglo filtrado

function myFunction(a,b){

    return a.filter(item=>item!==b)
}

console.log(myFunction([1,2,3,4,5],(2)))