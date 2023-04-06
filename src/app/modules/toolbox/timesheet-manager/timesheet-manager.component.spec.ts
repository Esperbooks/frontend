import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetManagerComponent } from './timesheet-manager.component';

describe('TimesheetManagerComponent', () => {
  let component: TimesheetManagerComponent;
  let fixture: ComponentFixture<TimesheetManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesheetManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
