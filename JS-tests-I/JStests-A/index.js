// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Gordon";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = false;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// ----------------------------------

function devolverString(str) {
  return str;
}
console.log(devolverString("Hello World"))

function suma(x, y) {
  return x + y;
}
console.log(suma(1, 5))

function resta(x, y) {
  return x - y;
}
console.log(resta(5, 1))

function multiplica(x, y) {
  return x * y;
}
console.log(multiplica(5, 5))

function divide(x, y) {
  return x / y;
}
console.log(divide(10, 5))

function sonIguales(x, y) {
  if (x == y) {
    return true;
  }
  else {
    return false;
  }
}
console.log(sonIguales(5, 5))
console.log(sonIguales(1, 5))

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length == str2.length){
    return true;
  }
  else {
    return false;
  }
}
console.log(tienenMismaLongitud("Hello", "World"))
console.log(tienenMismaLongitud("Hello", "Moon"))

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num < 90){
    return true;
  }
  else {
    return false;
  }
}
console.log(menosQueNoventa(80))
console.log(menosQueNoventa(180))

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num > 50){
    return true;
  }
  else {
    return false;
  }
}
console.log(mayorQueCincuenta(100))
console.log(mayorQueCincuenta(18))

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
console.log(obtenerResto(4, 2))
console.log(obtenerResto(8, 3))

function esPar(num) {
  return (num % 2) == 0;
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
}
console.log(esPar(4))
console.log(esPar(9))

function esImpar(num) {
  return (num % 2) == 1;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
}
console.log(esImpar(7))
console.log(esImpar(8))

function elevarAlCuadrado(num) {
  return num ** 2;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
}
console.log(elevarAlCuadrado(7))

function elevarAlCubo(num) {
  return num ** 3;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
}
console.log(elevarAlCubo(3))

function elevar(num, exponent) {
  return Math.pow(num, exponent);
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
}
console.log(elevar(2, 4))

function redondearNumero(num) {
  return Math.round(num);
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
}
console.log(redondearNumero(10.3))

function redondearHaciaArriba(num) {
  return Math.ceil(num);
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
}
console.log(redondearHaciaArriba(15.3))

function numeroRandom() {
  return Math.random();
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
}
console.log(numeroRandom())


function esPositivo(numero) {
  if (numero > 0){
    return "Es positivo";
  }
  else if (numero < 0) {
    return "Es negativo";
  }
  else {
    return false;
  }
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
}
console.log(esPositivo(15))
console.log(esPositivo(-15))
console.log(esPositivo(0))

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return `${str}!`; 
}
console.log(agregarSimboloExclamacion("Hello there"))

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Cristian" -> "Soy Cristian"
  // Tu código:
  return `${nombre} ${apellido}`;
}
console.log(combinarNombres("Bruce", "Wayne"))
console.log(combinarNombres("I'm", "Batman"))

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Nahuel" -> "Hola Nahuel!"
  // Tu código:
  return `Hola ${nombre}!`;
}
console.log(obtenerSaludo("Oswald"))

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20;
}
console.log(deEuroAdolar(2))
console.log(deEuroAdolar(100))

// ---------- Puntos extra ----------

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho; 
}
console.log(obtenerAreaRectangulo(5, 15))

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  return lado * 4;
}
console.log(retornarPerimetro(45))

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return base * altura / 2;
}
console.log(areaDelTriangulo(10, 12))


function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
    return "Es vocal";
  }
  else if (letra.length !== 1){
    return "Dato incorrecto";
  }
}
console.log(esVocal('u'))
console.log(esVocal('abcdefg'))
