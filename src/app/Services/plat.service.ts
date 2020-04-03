import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plat } from '../model/Plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Plat[]>('http://localhost:8080/plat/all').pipe()
  }

  createPlat(plat : Plat) {
    return this.http.post<Plat>('http://localhost:8080/plat', plat).pipe()
  }

  deletePlat(idPlat : number) {
    return this.http.delete<number>('http.//localhost:8080/plat/' + idPlat).pipe()
  }

  updatePlat(idPlat : number, plat : Plat) {
    return this.http.put<Plat>('http://localhost:8080/plat/' + idPlat, plat).pipe()
  }

  getById(idPlat : number) {
    return this.http.get<Plat>('http://localhost:8080/plat/' + idPlat).pipe()
  }
}
