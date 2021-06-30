import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiducimComponent } from './shiducim.component';

describe('ShiducimComponent', () => {
  let component: ShiducimComponent;
  let fixture: ComponentFixture<ShiducimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiducimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiducimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
