import { TestBed } from '@angular/core/testing';

import { ServicRegisterService } from './servic-register.service';

describe('ServicRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicRegisterService = TestBed.get(ServicRegisterService);
    expect(service).toBeTruthy();
  });
});
