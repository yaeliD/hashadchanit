import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchThatClosedSuccessfullydiComponent } from './match-that-closed-successfullydi.component';

describe('MatchThatClosedSuccessfullydiComponent', () => {
  let component: MatchThatClosedSuccessfullydiComponent;
  let fixture: ComponentFixture<MatchThatClosedSuccessfullydiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchThatClosedSuccessfullydiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchThatClosedSuccessfullydiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
