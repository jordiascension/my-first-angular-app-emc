
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { PensionPlan } from './calculadora-desgravacio/pension-plan.model';

@Injectable({
  providedIn: 'root'
})
export class PensionPlanService {

  constructor(private http: HttpClient) { }

  public calculateRelief(pensionPlan:PensionPlan): Observable<number> {
    const params = new HttpParams()
   .set('naturalPersonPensionPlan', pensionPlan.naturalPersonPensionPlan)
   .set('selfEmployedPensionPlan', pensionPlan.selfEmployedPensionPlan)
   .set('companyPensionPlan', pensionPlan.companyPensionPlan)
   .set('taxBase', pensionPlan.taxBase)

   console.log(JSON.stringify(params));

    var url = "https://pensionplan.azurewebsites.net/api/PensionPlan/CalculateTaxDeduction";
    
    return this.http.get<number>(url, { params });
  }
}
