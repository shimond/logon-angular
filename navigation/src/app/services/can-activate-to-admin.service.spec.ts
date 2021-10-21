import { TestBed } from '@angular/core/testing';

import { CanActivateToAdminService } from './can-activate-to-admin.service';

describe('CanActivateToAdminService', () => {
  let service: CanActivateToAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateToAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
