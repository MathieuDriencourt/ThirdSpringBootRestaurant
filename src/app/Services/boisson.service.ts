import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Boisson } from '../model/Boisson';

@Injectable({
  providedIn: 'root'
})
export class BoissonService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Boisson[]>('http://localhost:8080/boisson/all').pipe()
  }

  createBoisson(boisson : Boisson) {
    return this.http.post<Boisson>('http://localhost:8080/boisson', boisson).pipe()
  }

  deleteBoisson(idBoisson : number) {
    return this.http.delete<number>('http://localhost:8080/boisson/' + idBoisson).pipe()
  }
}
