import { TestBed } from '@angular/core/testing';

import { EphemerisGetterService } from './ephemeris-getter.service';

describe('EphemerisGetterService', () => {
  let service: EphemerisGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EphemerisGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
