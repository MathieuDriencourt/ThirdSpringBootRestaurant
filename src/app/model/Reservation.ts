import {User} from './User'

export class Reservation {
    idReservation : number;
    dateReservation : Date;
    heureReservation : number;
    nbPersonnnesReservation : number;
    client : User;
}