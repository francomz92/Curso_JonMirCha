/*
   21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const alCuadrado = (array) => {
   if (array instanceof Array === false) {
      return 'Debe ingresar un array numérico';
   }
   for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (typeof element !== 'number') return 'Los elementos del array deben ser numéricos';
      array[i] = element ** 2;
   }
   return array;
};
console.log(alCuadrado([1, 4, 5]));

/*
   22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const extremos = (array) => {
   if (array instanceof Array === false) return 'Debe ingresar un array numérico';
   for (const element of array) {
      if (typeof element !== 'number') return 'Los elementos del array deben ser numéricos';
   }
   let menor = Math.min(...array);
   let mayor = Math.max(...array);
   return [menor, mayor];
};
console.log(extremos([1, 4, 5, 99, -60]));

/*
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const paresImpares = (array) => {
   if (array instanceof Array === false) return 'Debe ingresar un array numérico';
   for (const element of array) {
      if (typeof element !== 'number') return 'Los elementos del array deben ser numéricos';
   }
   const numeros = {
      pares: [],
      impares: [],
   };
   for (const element of array) {
      element % 2 === 0 ? numeros.pares.push(element) : numeros.impares.push(element);
   }
   return numeros;
};
console.log(paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
