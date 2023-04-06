import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashAdvanceComponent } from './cash-advance.component';

describe('CashAdvanceComponent', () => {
  let component: CashAdvanceComponent;
  let fixture: ComponentFixture<CashAdvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashAdvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
