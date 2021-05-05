import { TestBed } from '@angular/core/testing';

import { OpperationService } from './opperation.service';

describe('OpperationService', () => {
  let service: OpperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
