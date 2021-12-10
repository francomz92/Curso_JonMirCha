console.log('>>>> Ejercicio 3 <<<<');

/*
   9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

const getRandomNumber = () => {
   let randomNumber = Math.random() * (600 - 501) + 501;
   return Math.floor(randomNumber);
};
console.log(getRandomNumber());

/*
   10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

import { invertirPalabras } from '../Ejercicio 2/script.js';
const esCapicua = (numero) => {
   if (typeof numero !== 'number') {
      return 'Ingrese un valor numérico';
   }
   let numeroStr = numero.toString();
   return numeroStr === invertirPalabras(numeroStr);
};
console.log(esCapicua(2002));

/*
   11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
*/

const factorial = (numero) => {
   if (typeof numero !== 'number' || numero < 0) {
      return 'Ingrese un valor numérico positivo';
   }
   let resultado = 1;
   for (let i = 1; i <= numero; i++) {
      resultado *= i;
   }
   return resultado;
};
console.log(factorial(5));
