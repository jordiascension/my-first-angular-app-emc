import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDesgravacioComponent } from './calculadora-desgravacio.component';

describe('CalculadoraDesgravacioComponent', () => {
  let component: CalculadoraDesgravacioComponent;
  let fixture: ComponentFixture<CalculadoraDesgravacioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraDesgravacioComponent]
    });
    fixture = TestBed.createComponent(CalculadoraDesgravacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
