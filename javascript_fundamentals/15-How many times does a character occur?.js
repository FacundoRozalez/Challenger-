//Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.//

// Escribe una funcion
// que tome dos cadenas ( a y b ) como argumento
// retorna el numero de veces que a ocurre en b

function myFunction (a, b ){

    return (b.split(a).lenth-1);
}

console.log(myFunction ("facunda","a" ))