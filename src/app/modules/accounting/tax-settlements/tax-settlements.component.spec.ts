import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxSettlementsComponent } from './tax-settlements.component';

describe('TaxSettlementsComponent', () => {
  let component: TaxSettlementsComponent;
  let fixture: ComponentFixture<TaxSettlementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxSettlementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxSettlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
