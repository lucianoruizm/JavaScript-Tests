function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
    if (x > y){
      return x;
    }
    else if (x < y){
      return y;
    }
    else {
      return x;

    }
  }

  const numeroMayor = obtenerMayor(6, 5);

  console.log(numeroMayor);

  const numeroMayor2 = obtenerMayor(6, 7);

  console.log(numeroMayor2);


  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    if (edad >= 18){
      return "Allowed";
    }
    else {
      return "Not allowed";
    }
  }

  const ingresoAlEvento = mayoriaDeEdad(16)

  console.log(ingresoAlEvento);

  const ingresoAlEvento2 = mayoriaDeEdad(21)

  console.log(ingresoAlEvento2);
  


  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    if (status === 1){
      return "Online";
    }
    else if (status === 2){
      return "Away";
    }
    else {
      return "Offline";
    }
  }

  const userStatus = conection(1)

  console.log(userStatus);

  const userStatus2 = conection(2)

  console.log(userStatus2);

  const userStatus3 = conection(3)

  console.log(userStatus3);



  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
    switch (idioma)
     {
      case 1:
          return ('Guten Tag');
          break;
      case 2:
          return ('Ni Hao');
          break;
      case 3:
          return ('Hello');
          break;
      default:
          return ('Hola');
          break;
     }
  }

  const greetings = saludo(1)

  console.log(greetings);

  const greetings2 = saludo(2)
  
  console.log(greetings2);

  const greetings3 = saludo(3)
  
  console.log(greetings3);

  const greetings4 = saludo(4)
  
  console.log(greetings4);



  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Pista: Puedes usar el statement Switch.
    switch (color)
     {
      case 1:
          return ('This is blue');
          break;
      case 2:
          return ('This is red');
          break;
      case 3:
          return ('This is green');
          break;
      case 4:
          return ('This is orange');
          break;
      default:
          return ('Color not found');
          break;
     }
  }

  const colorSelection = colors(1)

  const colorSelection2 = colors(2)

  const colorSelection3 = colors(3)

  const colorSelection4 = colors(4)

  const colorSelection5 = colors(5)

  console.log(colorSelection, " ", colorSelection2, " ", colorSelection3, " ", colorSelection4, " ", colorSelection5);
  

  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero === 10 || numero === 5){
      return true;
    }
    else {
      return false;
    }
  }

  const fiveOrTen = esDiezOCinco(5)

  console.log(fiveOrTen)

  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    if (numero < 50 & numero > 20){
      return true;
    }
    else {
      return false;
    }
  }

  const isInRange = estaEnRango(25)

  console.log(isInRange)


  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
    if (numero - Math.floor(numero) === 0){
      return true;
    }
    else {
      return false;
    }
  }

  const isInteger = esEntero(6.5)

  console.log(isInteger)


  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if (numero % 3 === 0 & numero % 5 === 0){
      return "fizzbuzz";
    }
    else if (numero % 3 === 0){
      return "fizz";
    }
    else if (numero % 5 === 0){
      return "buzz";
    }
    else {
      return numero;
    }
  }

  console.log(fizzBuzz(5))
  console.log(fizzBuzz(3))
  console.log(fizzBuzz(15))



  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
    if (num1 > 0 & num1 > num2 & num1 > num3){
      return "Número 1 es mayor y positivo";
    }
    else if (num1 < 0 || num2 < 0 || num3 < 0 ){
      return "Hay negativos";
    }
    else if (num1 === 0 || num2 === 0 || num3 === 0){
      return "Error";
    }
    else if (num3 > num1 & num3 > num2){
      return newNumber = num3 + 1;
    }
    else {
      return false;
    }
  }

  console.log(operadoresLogicos(100, 50, 5)) // Debería retornar "Número 1 es mayor y positivo"
  console.log(operadoresLogicos(-5, 50, 5))  // Debería retornar "Hay negativos"
  console.log(operadoresLogicos(10, 50, 100)) // Debería retornar un nuevo valor de num3
  console.log(operadoresLogicos(0, 50, 100)) // Debería retornar "Error"
  console.log(operadoresLogicos(10, 5000, 100)) // Debería retornar false


  function esVerdadero(valor) {
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
    if (valor == true){
      return "Soy verdadero";
    }
    else {
      return "Soy falso";
    }
  }

  const booleanTrue = esVerdadero(true);
  const booleanFalse = esVerdadero(false);

  console.log(booleanTrue)
  console.log(booleanFalse)


  function tieneTresDigitos(numero) {
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    if (numero.toString().length === 3){
      return true;
    }
    else {
      return false;
    }
  }

  console.log(tieneTresDigitos(779)) // Debería retornar true
  console.log(tieneTresDigitos(77)) // Debería retornar false



  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    if (numero === 0 || numero === 1 || numero === 4){
      return false;
    }
    for (let i = 2; i < numero / 2; i++){
      if (numero % i === 0){
        return false;
      } 
    }
    return true;
  }

  console.log(esPrimo(15))
  console.log(esPrimo(4))
  console.log(esPrimo(3))
  console.log(esPrimo(7))

  
function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí
  const tabla = [];
  for (i = 0; i < 11; i++){
  const total = i * 6;
  tabla.push(total);
  }
  return tabla;
}

console.log(tablaDelSeis());



function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i = 0;
  do {
    numero = numero + 5;
    i++;
  } while(i < 7);
  return numero;
}

console.log(doWhile(5))