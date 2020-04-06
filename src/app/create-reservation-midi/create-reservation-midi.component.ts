import { Component, OnInit } from '@angular/core';
import { ReservationMidiService } from '../Services/reservation-midi.service';
import { ReservationMidi } from '../model/ReservationMidi';
import { User } from '../model/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-create-reservation-midi',
  templateUrl: './create-reservation-midi.component.html',
  styleUrls: ['./create-reservation-midi.component.css']
})
export class CreateReservationMidiComponent implements OnInit {
  newReservationMidi : ReservationMidi = new ReservationMidi();
  listUsers : User[] = [];
  constructor(private reservationMidiService : ReservationMidiService, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers = data;
      }
    )
  }

  createReservationMidi() {
    this.reservationMidiService.createReservationMidi(this.newReservationMidi).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/reservationMidi'
      }
    )
  }
}
