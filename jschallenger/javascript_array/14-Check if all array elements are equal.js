//Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

// Escribe una funcion que tome un array como argumento
// deberia retorna verdadero si los elementos en el array son inguales
// deberia retornar falso de lo contrario

function myFunction (arr) {

    return arr.every(item => item ===arr[0]);
}

console.log(myFunction([1,1,2,1]))


function myFunction(arr) {
    return new Set(arr).size === 1
  }

  console.log(myFunction([1,1,1,1]))