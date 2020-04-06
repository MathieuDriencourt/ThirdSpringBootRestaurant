import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationMidiComponent } from './update-reservation-midi.component';

describe('UpdateReservationMidiComponent', () => {
  let component: UpdateReservationMidiComponent;
  let fixture: ComponentFixture<UpdateReservationMidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReservationMidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationMidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
