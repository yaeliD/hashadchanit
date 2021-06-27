import { TestBed } from '@angular/core/testing';

import { ServicMatchInProcessService } from './servic-match-in-process.service';

describe('ServicMatchInProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicMatchInProcessService = TestBed.get(ServicMatchInProcessService);
    expect(service).toBeTruthy();
  });
});
