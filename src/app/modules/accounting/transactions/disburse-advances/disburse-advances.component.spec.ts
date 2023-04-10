import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisburseAdvancesComponent } from './disburse-advances.component';

describe('DisburseAdvancesComponent', () => {
  let component: DisburseAdvancesComponent;
  let fixture: ComponentFixture<DisburseAdvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisburseAdvancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisburseAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
