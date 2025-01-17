//Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value//

//Escribe una funcion
// que tome dos numeros a y b como argumento
// si a es menor que b
// divide a por b
// de lo contrario multiplica ambos numeros
// retorna el resultado

function myFunction(a,b){

    return a<b ? a/b : a*b
}

console.log(myFunction(5,8))