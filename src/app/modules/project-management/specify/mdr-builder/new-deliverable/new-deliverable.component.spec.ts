import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeliverableComponent } from './new-deliverable.component';

describe('NewDeliverableComponent', () => {
  let component: NewDeliverableComponent;
  let fixture: ComponentFixture<NewDeliverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeliverableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDeliverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
