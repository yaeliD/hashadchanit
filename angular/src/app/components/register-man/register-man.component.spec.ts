import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterManComponent } from './register-man.component';

describe('RegisterManComponent', () => {
  let component: RegisterManComponent;
  let fixture: ComponentFixture<RegisterManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
