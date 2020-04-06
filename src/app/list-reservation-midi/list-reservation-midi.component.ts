import { Component, OnInit } from '@angular/core';
import { ReservationMidiService } from '../Services/reservation-midi.service';
import { ReservationMidi } from '../model/ReservationMidi';

@Component({
  selector: 'app-list-reservation-midi',
  templateUrl: './list-reservation-midi.component.html',
  styleUrls: ['./list-reservation-midi.component.css']
})

export class ListReservationMidiComponent implements OnInit {
 listReservationsMidi : ReservationMidi[] = [];

  constructor(private reservationMidiService : ReservationMidiService) { }

  deleteReservationMidi(idReservationMidi : number) {
    this.reservationMidiService.deleteReservationMidi(idReservationMidi).subscribe(
      data => {
        console.log(data);
        window.location.href = "http://localhost:4200/reservationMidi"
      }
    )
  }
  

  ngOnInit(): void {
    this.reservationMidiService.getAll().subscribe(
      data => {
        this.listReservationsMidi = data;
        
      }
    )
  }

}
