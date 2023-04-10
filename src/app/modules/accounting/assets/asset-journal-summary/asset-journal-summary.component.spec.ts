import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetJournalSummaryComponent } from './asset-journal-summary.component';

describe('AssetJournalSummaryComponent', () => {
  let component: AssetJournalSummaryComponent;
  let fixture: ComponentFixture<AssetJournalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetJournalSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetJournalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
