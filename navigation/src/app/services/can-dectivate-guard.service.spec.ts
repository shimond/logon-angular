import { TestBed } from '@angular/core/testing';

import { CanDectivateGuardService } from './can-dectivate-guard.service';

describe('CanDectivateGuardService', () => {
  let service: CanDectivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanDectivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
