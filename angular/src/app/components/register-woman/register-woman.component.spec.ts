import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWomanComponent } from './register-woman.component';

describe('RegisterWomanComponent', () => {
  let component: RegisterWomanComponent;
  let fixture: ComponentFixture<RegisterWomanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWomanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
