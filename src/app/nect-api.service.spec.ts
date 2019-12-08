import { TestBed } from '@angular/core/testing';

import { NectApiService } from './nect-api.service';

describe('NectApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NectApiService = TestBed.get(NectApiService);
    expect(service).toBeTruthy();
  });
});
