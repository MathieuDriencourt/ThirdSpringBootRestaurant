import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReservationSoirComponent } from './update-reservation-soir.component';

describe('UpdateReservationSoirComponent', () => {
  let component: UpdateReservationSoirComponent;
  let fixture: ComponentFixture<UpdateReservationSoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateReservationSoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReservationSoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
