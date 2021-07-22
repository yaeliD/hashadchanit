import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviatedfilteringComponent } from './abbreviatedfiltering.component';

describe('AbbreviatedfilteringComponent', () => {
  let component: AbbreviatedfilteringComponent;
  let fixture: ComponentFixture<AbbreviatedfilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbreviatedfilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbreviatedfilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
