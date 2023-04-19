import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareAccessComponent } from './software-access.component';

describe('SoftwareAccessComponent', () => {
  let component: SoftwareAccessComponent;
  let fixture: ComponentFixture<SoftwareAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
