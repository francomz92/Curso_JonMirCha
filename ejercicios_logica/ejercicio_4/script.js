/*
   12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const esPrimo = (numero) => {
   if (typeof numero !== 'number') {
      return 'Ingrese un valor numérico';
   }
   for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
         return false;
      }
   }
   return true;
};
console.log(esPrimo(7));

/*
   13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
*/

const parImpar = (numero) => {
   if (typeof numero != 'number') {
      return 'Ingrese un valor numérico';
   }
   return numero % 2 === 0 ? 'Par' : 'Impar';
};
console.log(parImpar(29));

/*
   14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const convertirTemperatura = (numero, unidad) => {
   if (typeof numero != 'number') {
      return 'Ingrese un valor numérico';
   }
   if (typeof unidad != 'string') {
      return 'Ingrese una cadena de texto';
   }
   switch (unidad.toLowerCase()) {
      case 'c':
         return `${numero * 1.8 + 32}°F`;
      case 'f':
         return `${(numero - 32) / 1.8}°C`;
      default:
         break;
   }
};
console.log(convertirTemperatura(0, 'C'));
