import { TestBed } from '@angular/core/testing';

import { ReservationMidiService } from './reservation-midi.service';

describe('ReservationMidiService', () => {
  let service: ReservationMidiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservationMidiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
