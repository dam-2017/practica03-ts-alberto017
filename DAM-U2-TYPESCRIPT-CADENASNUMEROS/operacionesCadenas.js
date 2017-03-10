"use strict";
exports.__esModule = true;
var operacionesCadenas = (function () {
    function operacionesCadenas(oracion) {
        this.oracion = oracion;
    } //constructor
    operacionesCadenas.prototype.palindromo = function (oracion) {
        return this.oracion.split('').reverse().join('') === oracion;
    }; //cadenaPalindromo
    operacionesCadenas.prototype.vocales = function (oracion) {
        var letras = this.oracion.split("");
        var cantidad = 0;
        for (var _i = 0, letras_1 = letras; _i < letras_1.length; _i++) {
            var letra = letras_1[_i];
            switch (letra.toLowerCase()) {
                case "a":
                    cantidad++;
                    break;
                case "e":
                    cantidad++;
                    break;
                case "i":
                    cantidad++;
                    break;
                case "o":
                    cantidad++;
                    break;
                case "u":
                    cantidad++;
                    break;
            } //switc
        } //for
        return cantidad;
    }; //vocales
    operacionesCadenas.prototype.letras = function (oracion) {
        var cantidad = 0;
        var letras = this.oracion.split("");
        for (var _i = 0, letras_2 = letras; _i < letras_2.length; _i++) {
            var letra = letras_2[_i];
            if (/[a-z]/.test(letra.toLocaleLowerCase()))
                cantidad++;
        } //for
        return cantidad;
    }; //letras
    operacionesCadenas.prototype.palabras = function (oracion) {
        var cantidad = 0;
        var palabras = this.oracion.split(" ");
        for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
            var palabra = palabras_1[_i];
            if (palabra.length != 0)
                cantidad++;
        } //for
        return cantidad;
    }; //palabras
    return operacionesCadenas;
}()); //operacionesCadenas
exports.operacionesCadenas = operacionesCadenas;
