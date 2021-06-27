import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatedetailsComponent } from './candidatedetails.component';

describe('CandidatedetailsComponent', () => {
  let component: CandidatedetailsComponent;
  let fixture: ComponentFixture<CandidatedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatedetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
