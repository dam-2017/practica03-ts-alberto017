"use strict";
exports.__esModule = true;
var operacionesNumeros = (function () {
    function operacionesNumeros(primero, segundo) {
        this.primero = primero;
        this.segundo = segundo;
    } //constructor
    operacionesNumeros.prototype.suma = function (primero, segundo) {
        return (this.primero + this.segundo);
    }; //suma
    operacionesNumeros.prototype.resta = function (primero, segundo) {
        return (this.primero - this.segundo);
    }; //suma
    operacionesNumeros.prototype.factorial = function (primero) {
        if (primero <= 1) {
            return 1;
        }
        else {
            return primero * this.factorial(primero - 1);
        } //else
    }; //factorial
    operacionesNumeros.prototype.primo = function (primero) {
        var i = 2;
        while (i * i <= primero) {
            if (primero % i == 0)
                return (false);
            i++;
        } //while
        return (true);
    }; //primo
    return operacionesNumeros;
}()); //class
exports.operacionesNumeros = operacionesNumeros;
