import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcePlannerComponent } from './resource-planner.component';

describe('ResourcePlannerComponent', () => {
  let component: ResourcePlannerComponent;
  let fixture: ComponentFixture<ResourcePlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcePlannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcePlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
