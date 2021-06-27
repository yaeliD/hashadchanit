import { TestBed } from '@angular/core/testing';

import { ServicLoginService } from './servic-login.service';

describe('ServicLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicLoginService = TestBed.get(ServicLoginService);
    expect(service).toBeTruthy();
  });
});
