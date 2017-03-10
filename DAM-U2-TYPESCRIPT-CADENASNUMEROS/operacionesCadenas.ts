
export class operacionesCadenas {

    oracion: string;

    public constructor(oracion: string) {
        this.oracion = oracion;
    }//constructor

    public palindromo(oracion:string): boolean {
        return this.oracion.split('').reverse().join('') === oracion;
    }//cadenaPalindromo

    public vocales(oracion:string): number {
        var letras: Array<string> = this.oracion.split("");
        var cantidad: number = 0;
        for (var letra of letras) {
            switch (letra.toLowerCase()) {
                case "a": cantidad++;
                    break;
                case "e": cantidad++;
                    break;
                case "i": cantidad++;
                    break;
                case "o": cantidad++;
                    break;
                case "u": cantidad++;
                    break;
            }//switc
        }//for
        return cantidad;
    }//vocales

    public letras(oracion:string): number {
        var cantidad: number = 0;
        let letras: Array<string> = this.oracion.split("");
        for (var letra of letras) {
            if (/[a-z]/.test(letra.toLocaleLowerCase()))
                cantidad++;
        }//for
        return cantidad;
    }//letras

    public palabras(oracion:string): number {
        var cantidad: number = 0;
        var palabras: Array<string> = this.oracion.split(" ");
        for (var palabra of palabras) {
            if (palabra.length != 0)
                cantidad++
        }//for
        return cantidad;
    }//palabras
}//operacionesCadenas