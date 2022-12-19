import { TestBed } from '@angular/core/testing';

import { IdentificationtypeService } from './identificationtype.service';

describe('IdentificationtypeService', () => {
  let service: IdentificationtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentificationtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
