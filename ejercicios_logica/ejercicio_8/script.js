/*
   24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const ordena = (array) => {
   if (array instanceof Array === false) return 'Debe ingresar un array numérico';
   for (const element of array) {
      if (typeof element !== 'number') return 'Los elementos del array deven ser valores numéricos';
   }
   const ordenados = {};
   ordenados.asc = [...array].sort();
   ordenados.desc = [...ordenados.asc].reverse();
   return ordenados;
};
console.log(ordena([7, 5, 7, 8, 6]));

/*
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
*/

const eliminaDuplicados = (array) => {
   if (array instanceof Array === false) return 'Debe ingresar un array numérico';
   const unicos = new Set(array);
   return Array.from(unicos);
};
console.log(eliminaDuplicados(['x', 10, 'x', 2, '10', 10, true, true]));

/*
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (array) => {
   if (array instanceof Array === false) return 'Debe ingresar un array numérico';
   for (const element of array) {
      if (typeof element !== 'number') return 'Los elementos del array deven ser valores numéricos';
   }
   let suma = 0;
   array.forEach((element) => (suma += element));
   return suma / array.length;
};
console.log(promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
