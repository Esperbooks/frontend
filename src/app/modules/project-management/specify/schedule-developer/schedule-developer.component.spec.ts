import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDeveloperComponent } from './schedule-developer.component';

describe('ScheduleDeveloperComponent', () => {
  let component: ScheduleDeveloperComponent;
  let fixture: ComponentFixture<ScheduleDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
