//Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

//Escribe una funcion que tome dos arrays como argumento.
//Fusiona ambas arrays y remover los valores repetidos
//Ordena el resultado de la fusion en oden ascendente.
//retorna el array resultante

function myFunction(a, b){

    return [...new Set([...a,...b])].sort((x,y) => x-y)
}

console.log(myFunction([1,3,2],[3,5,4]))