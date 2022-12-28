import { TestBed } from '@angular/core/testing';

import { DellserviceService } from './dellservice.service';

describe('DellserviceService', () => {
  let service: DellserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DellserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
