import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationSoir } from '../model/ReservationSoir';

@Injectable({
  providedIn: 'root'
})
export class ReservationSoirService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<ReservationSoir[]>('http://localhost:8080/reservationSoir/all').pipe()
  }

  createReservationSoir(reservationSoir : ReservationSoir) {
    return this.http.post<ReservationSoir>('http://localhost:8080/reservationSoir', reservationSoir).pipe()
  }

  deleteReservationSoir(idReservationSoir : number) {
    return this.http.delete<number>('http://localhost:8080/reservationSoir/' + idReservationSoir).pipe()
  }

  updateReservationSoir(idReservationSoir : number, reservationSoir : ReservationSoir) {
    return this.http.put<ReservationSoir>('http://localhost:8080/reservationSoir/' + idReservationSoir, ReservationSoir).pipe()
  }

  getById(idReservationSoir : number) {
    return this.http.get<ReservationSoir>('http://localhost:8080/reservationSoir/' + idReservationSoir).pipe()
  }
}
