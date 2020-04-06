import { Component, OnInit } from '@angular/core';
import { ReservationSoirService } from '../Services/reservation-soir.service';
import { ReservationSoir } from '../model/ReservationSoir';

@Component({
  selector: 'app-list-reservation-soir',
  templateUrl: './list-reservation-soir.component.html',
  styleUrls: ['./list-reservation-soir.component.css']
})
export class ListReservationSoirComponent implements OnInit {
  listReservationsSoir : ReservationSoir [] = [];

  constructor(private reservationSoirService : ReservationSoirService) { }

  deleteReservationSoir(idReservationSoir : number) {
    this.reservationSoirService.deleteReservationSoir(idReservationSoir).subscribe(
      data => {
        console.log(data);
        window.location.href = "http://localhost:4200/reservationSoir"
      }
    )
  }

  ngOnInit(): void {
    this.reservationSoirService.getAll().subscribe(
      data => {
        this.listReservationsSoir = data;
        
      }
    )
  }

}
