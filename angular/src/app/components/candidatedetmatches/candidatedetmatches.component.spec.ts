import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatedetmatchesComponent } from './candidatedetmatches.component';

describe('CandidatedetmatchesComponent', () => {
  let component: CandidatedetmatchesComponent;
  let fixture: ComponentFixture<CandidatedetmatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatedetmatchesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatedetmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
