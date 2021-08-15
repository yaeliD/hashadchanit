import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsOfProposalComponent } from './steps-of-proposal.component';

describe('StepsOfProposalComponent', () => {
  let component: StepsOfProposalComponent;
  let fixture: ComponentFixture<StepsOfProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsOfProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsOfProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
