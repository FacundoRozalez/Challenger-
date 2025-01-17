//Write a function that takes two strings (a and b) as arguments. If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation//

// Escribe una funcion
// que tome dos cadenas (a y b) como argumentos
// Si a contiene b
//añadir b adelante de a
// si no añadir al final
// retornar la concatenacion

function myFuntion(a,b){


return a.includes(b) ? b+a : a+b
}

console.log(myFuntion("facun","do"))