import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationMidiComponent } from './list-reservation-midi.component';

describe('ListReservationMidiComponent', () => {
  let component: ListReservationMidiComponent;
  let fixture: ComponentFixture<ListReservationMidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReservationMidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservationMidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
