import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationSoirComponent } from './create-reservation-soir.component';

describe('CreateReservationSoirComponent', () => {
  let component: CreateReservationSoirComponent;
  let fixture: ComponentFixture<CreateReservationSoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservationSoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationSoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
