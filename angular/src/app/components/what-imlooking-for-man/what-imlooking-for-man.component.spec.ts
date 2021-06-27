import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatImlookingForManComponent } from './what-imlooking-for-man.component';

describe('WhatImlookingForManComponent', () => {
  let component: WhatImlookingForManComponent;
  let fixture: ComponentFixture<WhatImlookingForManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatImlookingForManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatImlookingForManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
