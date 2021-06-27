import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HistoryOfMatchesComponent } from './history-of-matches.component';

describe('HistoryOfMatchesComponent', () => {
  let component: HistoryOfMatchesComponent;
  let fixture: ComponentFixture<HistoryOfMatchesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
