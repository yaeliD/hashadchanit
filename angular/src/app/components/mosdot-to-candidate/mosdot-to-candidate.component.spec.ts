import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MosdotToCandidateComponent } from './mosdot-to-candidate.component';

describe('MosdotToCandidateComponent', () => {
  let component: MosdotToCandidateComponent;
  let fixture: ComponentFixture<MosdotToCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MosdotToCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MosdotToCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
