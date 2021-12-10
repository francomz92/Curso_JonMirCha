/*
   5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

export const invertirPalabras = (cadena) => {
   if (typeof cadena != 'string' || cadena.length == 0) {
      return 'Ingrese una cadena de texto por favor';
   }
   let cadenaInvertida = '';
   for (let i = cadena.length - 1; i >= 0; i--) {
      cadenaInvertida += cadena[i];
   }
   return cadenaInvertida;
};
console.log(invertirPalabras('Hola Mundo'));

/*
   6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const contarPalabra = (cadena, palabra) => {
   if (typeof cadena != 'string' || cadena.length == 0 || typeof palabra != 'string' || palabra.length == 0) {
      return 'Ingrese una cadena de texto por favor';
   }
   let contador = 0;
   for (const chr of cadena.split(' ')) {
      if (chr == palabra) {
         contador++;
      }
   }
   return contador;
};
console.log(contarPalabra('hola mundo adios mundo', 'mundo'));

/*
   7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const esPalindromo = (cadena) => {
   if (typeof cadena != 'string' || cadena.length == 0) {
      return 'Ingrese una cadena de texto por favor';
   }
   return invertirPalabras(cadena.toLowerCase()) == cadena.toLowerCase();
};
console.log(esPalindromo('Salas'));

/*
   8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarPatron = (cadena, patron) => {
   if (typeof cadena != 'string' || cadena.length == 0 || typeof patron != 'string' || patron.length == 0) {
      return 'Ingrese una cadena de texto por favor';
   }
   let cadenaSinPatron = '';
   for (const chr of cadena.split(patron)) {
      cadenaSinPatron += chr;
   }
   return cadenaSinPatron;
};
console.log(eliminarPatron('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'));
