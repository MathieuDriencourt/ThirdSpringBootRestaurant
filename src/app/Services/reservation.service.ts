import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Reservation[]>('http://localhost:8080/reservation/all').pipe()
  }

  createReservation(reservation : Reservation) {
    return this.http.post<Reservation>('http://localhost:8080/reservation', reservation).pipe()
  }

  deleteReservation(idReservation : number) {
    return this.http.delete<number>('http.//localhost:8080/reservation/' + idReservation).pipe()
  }

  updateReservation(idReservation : number, reservation : Reservation) {
    return this.http.put<Reservation>('http://localhost:8080/reservation/' + idReservation, reservation).pipe()
  }

  getById(idReservation : number) {
    return this.http.get<Reservation>('http://localhost:8080/reservation/' + idReservation).pipe()
  }
}
