import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReservationSoirComponent } from './list-reservation-soir.component';

describe('ListReservationSoirComponent', () => {
  let component: ListReservationSoirComponent;
  let fixture: ComponentFixture<ListReservationSoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReservationSoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReservationSoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
