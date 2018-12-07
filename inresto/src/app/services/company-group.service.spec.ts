import { TestBed } from '@angular/core/testing';

import { CompanyGroupService } from './company-group.service';

describe('CompanyGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyGroupService = TestBed.get(CompanyGroupService);
    expect(service).toBeTruthy();
  });
});
