/*
   1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

const cuentaCaracteres = (cadena) => {
   if (typeof cadena != 'string' || cadena.length == 0) {
      return 'Iingrese una cadena de texto por favor';
   }
   return cadena.length;
};
console.log(cuentaCaracteres('Hola Mundo'));

/*
   2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

const recortaTexto = (cadena, numero) => {
   if (typeof cadena != 'string' || cadena.length == 0) {
      return 'Iingrese una cadena de texto por favor';
   }
   return cadena.substr(0, numero);
};
console.log(recortaTexto('Hola Mundo', 4));

/*
   3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

const textoToArray = (cadena, chr) => {
   if (typeof cadena != 'string' || cadena.length == 0) {
      return 'Iingrese una cadena de texto por favor';
   }
   return cadena.split(chr);
};
console.log(textoToArray('hola que tal', ' '));

/*
   4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repiteTexto = (cadena, numero) => {
   if (typeof cadena != 'string' || cadena.length == 0) {
      return 'Iingrese una cadena de texto por favor';
   }
   let texto = '';
   for (let i = 0; i < numero; i++) {
      texto += `${cadena} `;
   }
   return texto.trimRight();
};
console.log(repiteTexto('Hola Mundo', 3));
