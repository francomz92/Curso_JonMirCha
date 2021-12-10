/*
   18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contar = (cadena) => {
   if (typeof cadena !== 'string' || cadena.length === 0) return 'Ingrese una cadena de texto';
   const vocales = ['a', 'e', 'i', 'o', 'u'];
   const conteo = {
      vocales: 0,
      consonantes: 0,
   };
   for (const chr of cadena) {
      if (chr === ' ') continue;
      vocales.includes(chr.toLowerCase()) ? conteo['vocales']++ : conteo['consonantes']++;
   }
   return `Vocales: ${conteo.vocales}, Consonantes: ${conteo.consonantes}`;
};
console.log(contar('Hola Mundo'));

const vocales = ['a', 'e', 'i', 'o', 'u'];

/*
   19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

/*
   20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/

const validaEmail = (cadena) => {
   if (typeof cadena !== 'string' || cadena.length === 0) return 'Ingrese una cadena de texto';
   const emailRe = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
   return emailRe.test(cadena);
};
console.log(validaEmail('jonmircha@gmail.com'));
