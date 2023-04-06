import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionManagerComponent } from './requisition-manager.component';

describe('RequisitionManagerComponent', () => {
  let component: RequisitionManagerComponent;
  let fixture: ComponentFixture<RequisitionManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequisitionManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
