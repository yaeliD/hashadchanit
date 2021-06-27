import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatImlookingForComponent } from './what-imlooking-for.component';

describe('WhatImlookingForComponent', () => {
  let component: WhatImlookingForComponent;
  let fixture: ComponentFixture<WhatImlookingForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatImlookingForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatImlookingForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
