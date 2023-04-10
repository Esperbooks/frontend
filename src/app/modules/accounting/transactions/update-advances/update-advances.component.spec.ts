import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdvancesComponent } from './update-advances.component';

describe('UpdateAdvancesComponent', () => {
  let component: UpdateAdvancesComponent;
  let fixture: ComponentFixture<UpdateAdvancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdvancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
