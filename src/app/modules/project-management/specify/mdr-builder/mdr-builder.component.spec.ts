import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdrBuilderComponent } from './mdr-builder.component';

describe('MdrBuilderComponent', () => {
  let component: MdrBuilderComponent;
  let fixture: ComponentFixture<MdrBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdrBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdrBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
