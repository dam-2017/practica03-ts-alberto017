import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Variables
  public operador: string = " ";
  public n1: string = "0";
  public n2: string = "0";
  public resultado: number = 0;

  constructor(public navCtrl: NavController) { }

  suma() {
    this.operador = "+";
    this.resultado = (Number.parseInt(this.n1) + (Number.parseInt(this.n2)));
  }

  resta() {
    this.operador = "-";
    this.resultado = (Number.parseInt(this.n1) - (Number.parseInt(this.n2)));
  }

  multiplicacion() {
    this.operador = "*";
    this.resultado = (Number.parseInt(this.n1) * (Number.parseInt(this.n2)));
  }

  division() {
    this.operador = "/";
    this.resultado = (Number.parseInt(this.n1) / (Number.parseInt(this.n2)));
  }//division

  modulo() {
    this.operador = "%";
    this.resultado = (Number.parseInt(this.n1) % (Number.parseInt(this.n2)));
  }//modulo

}
