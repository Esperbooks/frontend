import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceManagerComponent } from './advance-manager.component';

describe('AdvanceManagerComponent', () => {
  let component: AdvanceManagerComponent;
  let fixture: ComponentFixture<AdvanceManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
