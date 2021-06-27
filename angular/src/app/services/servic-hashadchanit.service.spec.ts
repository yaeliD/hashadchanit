import { TestBed } from '@angular/core/testing';

import { ServicHashadchanitService } from './servic-hashadchanit.service';

describe('ServicHashadchanitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicHashadchanitService = TestBed.get(ServicHashadchanitService);
    expect(service).toBeTruthy();
  });
});
