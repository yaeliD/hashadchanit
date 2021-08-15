import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchinprocesssortComponent } from './matchinprocesssort.component';

describe('MatchinprocesssortComponent', () => {
  let component: MatchinprocesssortComponent;
  let fixture: ComponentFixture<MatchinprocesssortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchinprocesssortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchinprocesssortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
