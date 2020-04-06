import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationMidiComponent } from './create-reservation-midi.component';

describe('CreateReservationMidiComponent', () => {
  let component: CreateReservationMidiComponent;
  let fixture: ComponentFixture<CreateReservationMidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservationMidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationMidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
