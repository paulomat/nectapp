import { TestBed } from '@angular/core/testing';

import { NectApiServiceService } from './nect-api-service.service';

describe('NectApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NectApiServiceService = TestBed.get(NectApiServiceService);
    expect(service).toBeTruthy();
  });
});
