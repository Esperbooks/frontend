import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTransactionsComponent } from './review-transactions.component';

describe('ReviewTransactionsComponent', () => {
  let component: ReviewTransactionsComponent;
  let fixture: ComponentFixture<ReviewTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
