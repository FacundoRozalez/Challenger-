//Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strings. For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}

//Escribe una funcion que tome un arreglo de cadena como argumento. 
//Agrupa esas cadenas por su primera letra
//Retorna un objeto que contiene propiedades con claves que representa las primeras letras
// Los valores deben ser arreglos de cadenas que contengan solo las correspondientes cadenas
// Por ejemplo el arreglo ['Alf','Alice','Ben'] deben ser transformados a {a:['Alf', 'Alice'], b: ['Ben']}


function myFunction(a){

  return a.sort().reduce((acc,cadena) => (acc[cadena[0]]=(acc[cadena[0]]||[]).concat(cadena),acc),{})

     }


    console.log(myFunction(['Alf','Alice','Bruno']))
