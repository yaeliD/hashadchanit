import { TestBed } from '@angular/core/testing';

import { ServicShadchanitService } from './servic-shadchanit.service';

describe('ServicShadchanitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicShadchanitService = TestBed.get(ServicShadchanitService);
    expect(service).toBeTruthy();
  });
});
