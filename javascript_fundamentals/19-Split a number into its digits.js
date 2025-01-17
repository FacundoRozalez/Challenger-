//Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting//

//Escribe una funcion
// que tome un numero (a) como argumento
// divide a en sus digitos individuales
// retornarlo en un arreglo
//sugerencia: ES posible que desee cambiar el tipo de numero para la division

function myFunction(a){

    return Array.from(String(a),Number)
}

console.log(myFunction("1500"))