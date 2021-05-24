import { TestBed } from '@angular/core/testing';

import { InternserviceService } from './internservice.service';

describe('InternserviceService', () => {
  let service: InternserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
