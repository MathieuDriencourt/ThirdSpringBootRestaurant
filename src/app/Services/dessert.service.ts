import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dessert } from '../model/Dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Dessert[]>('http://localhost:8080/dessert/all').pipe()
  }
}
