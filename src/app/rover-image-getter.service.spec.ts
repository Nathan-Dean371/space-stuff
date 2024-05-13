import { TestBed } from '@angular/core/testing';

import { RoverImageGetterService } from './rover-image-getter.service';

describe('RoverImageGetterService', () => {
  let service: RoverImageGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverImageGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
