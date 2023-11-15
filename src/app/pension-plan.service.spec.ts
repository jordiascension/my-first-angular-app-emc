import { TestBed } from '@angular/core/testing';

import { PensionPlanService } from './pension-plan.service';

describe('PensionPlanService', () => {
  let service: PensionPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
