import { TestBed } from '@angular/core/testing';

import { ReservationSoirService } from './reservation-soir.service';

describe('ReservationSoirService', () => {
  let service: ReservationSoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationSoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
