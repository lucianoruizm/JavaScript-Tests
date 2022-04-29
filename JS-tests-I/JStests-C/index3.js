const array = ['ALien', 'Alien 2', 'Alien 3']

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
  }

console.log(devolverPrimerElemento(array))

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return array[array.length-1];
  }

console.log(devolverUltimoElemento(array))



function obtenerLargoDelArray(array) {
    // Devuelve el largo de un array
    // Tu código:
    return array.length;
  }

console.log(obtenerLargoDelArray(array))
  


const arrayInt = [10, 2, 3, 5, 7]

function incrementarPorUno(arrayInt) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    for(i = 0; i < arrayInt.length; i++){
      arrayInt[i] = arrayInt [i] + 1;
    }
    return arrayInt;
  }

console.log(incrementarPorUno(arrayInt))


function agregarItemAlFinalDelArray(array, elemento) {
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array.push(elemento);
    return array;
  }

console.log(agregarItemAlFinalDelArray(array, 'Alien 4'))


function agregarItemAlComienzoDelArray(array, elemento) {
    // Añade el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    array.unshift(elemento);
    return array;
  }

console.log(agregarItemAlComienzoDelArray(array, 'Alien 0'))



const palabras = ['Hello', 'World','JavaScript']

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    return palabras.join(" ");
}

console.log(dePalabrasAFrase(palabras))


let myArr = [1, 2, 3];
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (let i = 0; i < array.length; i++){
    if (elemento === array[i]){
      return true;
    }
  }
  return false;
}

console.log(arrayContiene(myArr, 3))
console.log(arrayContiene(myArr, 7))


let numeros = [60, 30, 10]
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const reducer = (accumulator, curr) => accumulator + curr;
  return numeros.reduce(reducer);
}
console.log(agregarNumeros(numeros))

// ----- **** OTRAS FORMAS DE HACERLO **** -----
// *** 
// let numeros = [60, 30, 10]
// let sumaTotal = 0
// function agregarNumeros(numeros) {
//   // "array" debe ser una matriz de enteros (int/integers)
//   // Suma todos los enteros y devuelve el valor
//   // Tu código:
//   for (let i = 0; i < numeros.length; i++){
//     sumaTotal = sumaTotal + numeros[i]
//   }
//   return sumaTotal;
// }
// console.log(agregarNumeros(numeros))
// ****

// ***
// let sumaNumeros = [1, 2, 3, 4, 5], suma = 0;
//     sumaNumeros.forEach (function(sumaNumeros){
//         suma += sumaNumeros;
//     });
//     console.log(suma);

// const arr = [1, 2, 3, 4];
// const reducer = (accumulator, curr) => accumulator + curr;
// console.log(arr.reduce(reducer));
// ****
// ----- ************** -----

let anotherArray = [5, 5, 3, 3]
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const reducer = (accumulator, curr) => accumulator + curr;
  return resultadosTest.reduce(reducer) / resultadosTest.length;
}

console.log(promedioResultadosTest(anotherArray))

// ----- **** OTRA FORMA DE HACERLO **** -----
// *** 
// let anotherArray = [5, 5, 3, 3]
// let promTotal = 0
// function promedioResultadosTest(resultadosTest) {
//   for (let i = 0; i < resultadosTest.length; i++){
//       promTotal = promTotal + resultadosTest[i]
//   }
//   return promTotal / resultadosTest.length;
// }

// console.log(promedioResultadosTest(anotherArray))
// ****
// ----- ************** -----


let numeroMayor = [100, 450, 700, 500]
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  for (let i = 0; i < numeros.length; i++){
    return Math.max(... numeros)
  }
}

console.log(numeroMasGrande(numeroMayor))



let arg = [3, 5]
function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // // Escribe tu código aquí:
  if (arguments.length < 1){
    return 0;
  }
  else{
  const reducer = (accumulator, curr) => accumulator * curr;
  return arg.reduce(reducer);
  }
}

console.log(multiplicarArgumentos(arg))
console.log(multiplicarArgumentos())

// ----- **** OTRA FORMA DE HACERLO **** -----
// function multiplicarArgumentos() {
//   if (arguments.length < 1){
//     return 0;
//   }
//   else{
//     let multiplicar = arguments[0];
//     for(let i = 1; i < arguments.length; i++){
//     multiplicar *= arguments[i];
//     } return multiplicar
//   }
// }

// console.log(multiplicarArgumentos(3, 5))

// ****
// ----- ************** -----


let arrCantidad = [100, 2, 60, 4, 15, 6, 7, 8, 9, 89, 11, 12, 13, 14, 67, 16, 17, 56, 19, 20, 21]
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let arr2 = []
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 19){
      arr2.push(arreglo[i])  
    }
  }
  return arr2.length;
}

console.log(cuentoElementos(arrCantidad))



function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia == 7 || numeroDeDia == 1){
    return "Es fin de semana"
  }   
  else {
    return "Es dia Laboral"
  }
} 

console.log(diaDeLaSemana(7))
console.log(diaDeLaSemana(2))



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let startsWithNine = n.toString()
  if (startsWithNine.startsWith("9")){
    return true
  }
  else{
    return false
  }
}

console.log(empiezaConNueve(9))
console.log(empiezaConNueve(99))
console.log(empiezaConNueve(100))

console.log("--------------")

// function todosIguales(arreglo) {
//   Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
//   retornar true, caso contrario retornar false.
//   Escribe tu código aquí
//   for (let i = 0; i < arreglo.length; i++) {
//     if (arreglo[i] == arreglo[i + 1]){
//       return true
//     }
//     else{
//       return false
//     }
//   }
// } 

// console.log(todosIguales(equalElements))
// console.log(todosIguales(notEqualElements))

let equalElements = [5, 5, 5, 5]
let notEqualElements = [5, 3, 7, 5]
function todosIguales(arreglo) {
  return arreglo.every(e => arreglo[0] == e);
}

console.log(todosIguales(equalElements))
console.log(todosIguales(notEqualElements))


let months = ["Noviembre", "Diciembre", "Octubre", "Marzo", "Abril", "Enero", "Mayo", "Julio", "Septiembre", "Junio", "Agosto", "Febrero"]
let months2 = ["Diciembre", "Octubre", "Marzo", "Abril", "Mayo", "Julio", "Septiembre", "Junio", "Agosto", "Febrero"]
function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let months3 = ["Enero", "Marzo", "Noviembre"]
  let findEnero
  let findMarzo
  let findNoviembre
  
  array.includes("Enero")? findEnero = true : findEnero = false
  array.includes("Marzo")? findMarzo = true : findMarzo = false
  array.includes("Noviembre")? findNoviembre = true : findNoviembre = false

  return findEnero === true && findMarzo === true && findNoviembre === true ?  months3
  : "No se encontraron los meses pedidos"
}

console.log(mesesDelAño(months))
console.log(mesesDelAño(months2))


let arrayOfNumbers = [5, 22, 100, 160, 44, 115, 106, 107, 88, 99, 89, 200]
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let newArrayOfNumbers = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100){
      newArrayOfNumbers.push(array[i])  
    }
  }
  return newArrayOfNumbers;
}

console.log(mayorACien(arrayOfNumbers))