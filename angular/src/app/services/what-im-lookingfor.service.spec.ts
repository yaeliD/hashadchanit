import { TestBed } from '@angular/core/testing';

import { WhatImLookingforService } from './what-im-lookingfor.service';

describe('WhatImLookingforService', () => {
  let service: WhatImLookingforService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatImLookingforService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
