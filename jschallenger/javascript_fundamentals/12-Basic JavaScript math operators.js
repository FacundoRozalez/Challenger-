//Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Hint: mind the order.//

// Escribe una funcion
// que tome 6 valores (a,b,c,d,e,f) como argumentos
// suma a y b
// entonces resta c
// entonces multiplica d
// y divide e
// finalmente eleva a la potencia de f
// Retorna el resultado
// COnsejo: cuidado con el orden

function myFunction(a,b,c,d,e,f){

    return (((((a+b)-c)*d)/e)**f)
}

console.log(myFunction(6,5,4,3,2,1))