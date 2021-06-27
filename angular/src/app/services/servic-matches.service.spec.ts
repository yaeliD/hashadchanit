import { TestBed } from '@angular/core/testing';

import { ServicMatchesService } from './servic-matches.service';

describe('ServicMatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicMatchesService = TestBed.get(ServicMatchesService);
    expect(service).toBeTruthy();
  });
});
