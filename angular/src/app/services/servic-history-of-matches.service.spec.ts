import { TestBed } from '@angular/core/testing';

import { ServicHistoryOfMatchesService } from './servic-history-of-matches.service';

describe('ServicHistoryOfMatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicHistoryOfMatchesService = TestBed.get(ServicHistoryOfMatchesService);
    expect(service).toBeTruthy();
  });
});
