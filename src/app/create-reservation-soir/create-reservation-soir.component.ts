import { Component, OnInit } from '@angular/core';
import { ReservationSoir } from '../model/ReservationSoir';
import { ReservationSoirService } from '../Services/reservation-soir.service';
import { UserService } from '../Services/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-create-reservation-soir',
  templateUrl: './create-reservation-soir.component.html',
  styleUrls: ['./create-reservation-soir.component.css']
})
export class CreateReservationSoirComponent implements OnInit {
  newReservationSoir : ReservationSoir = new ReservationSoir;
  listUsers : User [] = [];
  
  constructor(private reservationSoirService : ReservationSoirService, private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers = data;
      }
    )

  }

  createReservationSoir() {
    this.reservationSoirService.createReservationSoir(this.newReservationSoir).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/reservationSoir'
      }
    )
  }

}
