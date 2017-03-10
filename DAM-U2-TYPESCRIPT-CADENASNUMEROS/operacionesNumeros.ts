
export class operacionesNumeros {
    primero: number;
    segundo: number;


    constructor(primero: number, segundo: number) {
        this.primero = primero;
        this.segundo = segundo;
    }//constructor


    public suma(primero: number, segundo: number):number {
        return (this.primero + this.segundo);
    }//suma


    public resta(primero: number, segundo: number):number{
        return (this.primero - this.segundo);
    }//suma


    public factorial(primero: number):number {
        if (primero <= 1) {
            return 1;
        } else {
            return primero * this.factorial(primero - 1);
        }//else
    }//factorial


    public primo(primero: number):boolean {
        let i = 2;
        while (i * i <= primero) {
            if (primero % i == 0)
                return (false);
            i++;
        }//while
        return (true);
    }//primo
}//class