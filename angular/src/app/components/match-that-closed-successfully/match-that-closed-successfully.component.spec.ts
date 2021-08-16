import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchThatClosedSuccessfullyComponent } from './match-that-closed-successfully.component';

describe('MatchThatClosedSuccessfullyComponent', () => {
  let component: MatchThatClosedSuccessfullyComponent;
  let fixture: ComponentFixture<MatchThatClosedSuccessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchThatClosedSuccessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchThatClosedSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
