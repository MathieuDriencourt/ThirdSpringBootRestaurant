import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationMidi } from '../model/ReservationMidi';

@Injectable({
  providedIn: 'root'
})
export class ReservationMidiService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<ReservationMidi[]>('http://localhost:8080/reservationMidi/all').pipe()
  }

  createReservationMidi(reservationMidi : ReservationMidi) {
    return this.http.post<ReservationMidi>('http://localhost:8080/reservationMidi', reservationMidi).pipe()
  }

  deleteReservationMidi(idReservationMidi : number) {
    return this.http.delete<number>('http://localhost:8080/reservationMidi/' + idReservationMidi).pipe()
  }

  updateReservationMidi(idReservationMidi : number, reservationMidi : ReservationMidi) {
    return this.http.put<ReservationMidi>('http://localhost:8080/reservationMidi/' + idReservationMidi, reservationMidi).pipe()
  }

  getById(idReservationMidi : number) {
    return this.http.get<ReservationMidi>('http://localhost:8080/reservationMidi/' + idReservationMidi).pipe()
  }
}
