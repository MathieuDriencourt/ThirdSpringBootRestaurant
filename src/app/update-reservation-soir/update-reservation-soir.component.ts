import { Component, OnInit } from '@angular/core';
import { ReservationSoirService } from '../Services/reservation-soir.service';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';
import { ReservationSoir } from '../model/ReservationSoir';

@Component({
  selector: 'app-update-reservation-soir',
  templateUrl: './update-reservation-soir.component.html',
  styleUrls: ['./update-reservation-soir.component.css']
})
export class UpdateReservationSoirComponent implements OnInit {
  newReservationSoir : ReservationSoir = new ReservationSoir();
  idReservationSoirURL : number
  listUsers : User [] = [];
  
  constructor(private reservationSoirService : ReservationSoirService, private userService : UserService, private route : ActivatedRoute) { 
    this.idReservationSoirURL = parseInt(this.route.snapshot.paramMap.get('idRS'));
  }
 

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers = data;
      }
      
    )

    this.reservationSoirService.getById(this.idReservationSoirURL).subscribe(
      data => {
        this.newReservationSoir = data;
        console.log(data);
      }
    )
  }

  updateReservationSoir(idRS : number, reservationSoir : ReservationSoir) {
    this.reservationSoirService.updateReservationSoir(idRS, reservationSoir).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/reservationSoir'
      }
    )
  }

}
