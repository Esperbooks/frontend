import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollPlannerComponent } from './payroll-planner.component';

describe('PayrollPlannerComponent', () => {
  let component: PayrollPlannerComponent;
  let fixture: ComponentFixture<PayrollPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollPlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
