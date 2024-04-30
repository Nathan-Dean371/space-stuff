import { TestBed } from '@angular/core/testing';

import { PodImageGetterService } from './pod-image-getter.service';

describe('PodImageGetterService', () => {
  let service: PodImageGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PodImageGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
