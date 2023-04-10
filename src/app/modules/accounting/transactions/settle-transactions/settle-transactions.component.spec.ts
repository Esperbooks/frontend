import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleTransactionsComponent } from './settle-transactions.component';

describe('SettleTransactionsComponent', () => {
  let component: SettleTransactionsComponent;
  let fixture: ComponentFixture<SettleTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettleTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
