import { TestBed } from '@angular/core/testing';

import { EpicImageGetterService } from './epic-image-getter.service';

describe('EpicImageGetterService', () => {
  let service: EpicImageGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicImageGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
