
import {operacionesCadenas} from './operacionesCadenas';
import {operacionesNumeros} from './operacionesNumeros';

var cadena : operacionesCadenas;
var numero : operacionesNumeros;

console.log("----------- Operaciones con cadenas -----------");
cadena = new operacionesCadenas("atenazamazaneta");
console.log(" Es palindromo atenazamazaneta?:", cadena.palindromo("atenazamazaneta"));
console.log(" Numero de vocales de atenazamazaneta: ",cadena.vocales("atenazamazaneta"));
console.log(" Numero de palabras de atenazamazaneta: ",cadena.palabras("atenazamazaneta"));
console.log(" Numero de letras de atenazamazaneta: ",cadena.letras("atenazamazaneta"));


console.log("----------- Operaciones con numeros -----------");
numero = new operacionesNumeros(4,3);
console.log("Suma 4 + 3:", numero.suma(4,3));
console.log("Resta 4 - 3:", numero.resta(4,3));
console.log("Factorial de 5: ",numero.factorial(5));
console.log("Es primo el 2?: ",numero.primo(2));