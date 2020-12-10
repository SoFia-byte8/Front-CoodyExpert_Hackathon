import { TestBed } from '@angular/core/testing';

import { StorageCompanyService } from './storage-company.service';

describe('StorageCompanyService', () => {
  let service: StorageCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
