import { Component, OnInit } from '@angular/core';
import { ReservationMidiService } from '../Services/reservation-midi.service';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ReservationMidi } from '../model/ReservationMidi';
import { User } from '../model/User';

@Component({
  selector: 'app-update-reservation-midi',
  templateUrl: './update-reservation-midi.component.html',
  styleUrls: ['./update-reservation-midi.component.css']
})
export class UpdateReservationMidiComponent implements OnInit {
newReservationMidi : ReservationMidi = new ReservationMidi();
idReservationMidiURL : number
listUsers : User [] = [];
  
constructor(private reservationMidiService : ReservationMidiService, private userService : UserService, private route : ActivatedRoute) { 
  this.idReservationMidiURL = parseInt(this.route.snapshot.paramMap.get('idRM'));
}

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers = data;
      }
    )

    this.reservationMidiService.getById(this.idReservationMidiURL).subscribe(
      data => {
          this.newReservationMidi = data;
        }
      )
  }

  updateReservationMidi(idRM : number, newReservationMidi : ReservationMidi) {
    this.reservationMidiService.updateReservationMidi(idRM, newReservationMidi).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
