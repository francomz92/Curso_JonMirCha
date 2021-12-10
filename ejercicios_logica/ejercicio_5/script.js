/*
   15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/
const binariaDecimal = (numero, base) => {
   if (typeof numero != 'number' || typeof base != 'number') return 'Ingrese un valor numérico';
   switch (base) {
      case 2:
         return parseInt(numero.toString(), 2);
      case 10:
         return parseInt(numero.toString(), 10);
      default:
         break;
   }
};
console.log(binariaDecimal(100, 2));

/*
   16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

const descuento = (numero, desc) => {
   if (typeof numero != 'number' || typeof desc != 'number') return 'Ingrese un valor numérico';
   return numero - numero * (desc / 100);
};
console.log(descuento(1000, 20));

/*
   17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const anios = (date = Date()) => {
   let diferencia = new Date() - date;
   let anios = diferencia / (60 * 60 * 24 * 365 * 1000);
   return `${Math.floor(anios)} años`;
};
console.log(anios(new Date(1984, 4, 23)));
