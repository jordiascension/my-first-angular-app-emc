import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora-desgravacio',
  templateUrl: './calculadora-desgravacio.component.html',
  styleUrls: ['./calculadora-desgravacio.component.scss']
})
export class CalculadoraDesgravacioComponent {

  ngOnInit(): void {
    throw new Error ('Method not implemented.');
  }

  missatge!: string;
  resultado!: number;

  calculadoraDesgravacio = new FormGroup({
    importPersona: new FormControl(0, []),
    importEmpresa: new FormControl(0, []),
    importAutonom: new FormControl(0, []),
    baseImponible: new FormControl(0, [])
  });

  submit() {
    console.log(this.calculadoraDesgravacio.value.importAutonom);
    
    let valorPersona: number = this.calculadoraDesgravacio.value.importPersona == null? 0: this.calculadoraDesgravacio.value.importPersona;
    let valorEmpresa: number = this.calculadoraDesgravacio.value.importEmpresa == null? 0: this.calculadoraDesgravacio.value.importEmpresa;
    let valorAutonom: number = this.calculadoraDesgravacio.value.importAutonom == null? 0: this.calculadoraDesgravacio.value.importAutonom;
    let valorBaseImponible: number = this.calculadoraDesgravacio.value.baseImponible == null? 0: this.calculadoraDesgravacio.value.baseImponible;
    
    console.log(valorPersona + valorEmpresa + valorAutonom)
    if(this.checkValues(valorPersona, valorEmpresa, valorAutonom))
      this.calculate(valorBaseImponible, valorPersona + valorEmpresa + valorAutonom);
  }

  checkValues(iPersona: number, iEmpresa: number, iAutonom: number){

    if (iPersona > 1500){
      this.missatge = 'El Import de la Persona no pot ser superior a 1500';
      return false;
    }

    if (iEmpresa > 8500){
      this.missatge = 'El Import de la Empresa no pot ser superior a 8500';
      this.resultado = 0;
      return false;
    }

    if (iAutonom > 5750) {
      this.missatge = 'El Import autònom no pot ser superior a 5750';
      this.resultado = 0;
      return false;
    }

    if (iAutonom > 0 && iEmpresa > 0){
      this.missatge = 'No pots aportar com a empresa i com a autònom';
      this.resultado = 0;
      return false;
    }
    this.missatge = 'El resultat és: ';
    return true;
  }

  calculate(base: number, sumaInversio: number){
    if(base == 0){
      this.resultado = 0;
    } else {
      if(base < 12450){
        this.resultado = sumaInversio*0.19;
      }else{
        if (base < 20200){
          this.resultado = sumaInversio*0.24;
        } else {
          if(base < 35200) {
            this.resultado = sumaInversio*0.30;
          } else {
            if(base < 60000) {
              this.resultado = sumaInversio*0.37;
            } else {
              if (base < 300000){
                this.resultado = sumaInversio*0.45;
              } else {
                this.resultado = sumaInversio*0.47;
              }
            }
          }
        }
      }
    }
  }
}
