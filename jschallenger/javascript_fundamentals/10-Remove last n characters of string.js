//Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result//

//Escribe una funcion
// que tome una cadena (a) como argumento
// Remueve las ultimas 3 caracteres de a
// Retorna el resultado

function myFunction(a){

    return a.slice(0,-3)

}

console.log(myFunction("Facundo"))