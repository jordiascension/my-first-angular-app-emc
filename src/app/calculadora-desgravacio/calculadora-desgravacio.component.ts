import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PensionPlanService } from '../pension-plan.service';
import { PensionPlan } from './pension-plan.model';

import { environment } from '../../environments/environment';



@Component({
  selector: 'app-calculadora-desgravacio',
  templateUrl: './calculadora-desgravacio.component.html',
  styleUrls: ['./calculadora-desgravacio.component.scss']
})
export class CalculadoraDesgravacioComponent implements OnInit {

  private newPensionPlan: PensionPlan = new PensionPlan();

  ngOnInit() {
    console.log("component has been initialized!")
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
    console.log(environment.apiKey);
  }
  
  constructor(public pensionPlanService: PensionPlanService) { }

  resultado!: number;

  calculadoraDesgravacio = new FormGroup({
    naturalPersonPensionPlan: new FormControl(1500, []),
    companyPensionPlan: new FormControl(8500, []),
    selfEmployedPensionPlan: new FormControl(0, []),
    taxBase: new FormControl(60000, [])
  });

  submit() {
    this.newPensionPlan = <PensionPlan> this.calculadoraDesgravacio.value;
    console.log(JSON.stringify(this.newPensionPlan));
    let resultFromService = this.pensionPlanService.
                            calculateRelief(this.newPensionPlan).subscribe({
                              next: (v) => {
                                console.log("The result is " + v)
                                this.resultado = v;
                              },
                              error: (e) => console.error(e),
                              complete: () => console.info('http request complete') 
                          }) 
  }
}
