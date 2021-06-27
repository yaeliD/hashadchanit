import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatImlookingForwomenComponent } from './what-imlooking-forwomen.component';

describe('WhatImlookingForwomenComponent', () => {
  let component: WhatImlookingForwomenComponent;
  let fixture: ComponentFixture<WhatImlookingForwomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatImlookingForwomenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatImlookingForwomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
