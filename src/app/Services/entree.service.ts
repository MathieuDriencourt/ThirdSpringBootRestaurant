import { Injectable } from '@angular/core';
import { Entree } from '../model/Entree';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntreeService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Entree[]>('http://localhost:8080/entree/all').pipe()
  }

  createEntree(entree : Entree) {
    return this.http.post<Entree>('http://localhost:8080/entree', entree).pipe()
  }

  deleteEntree(idEntree : number) {
    return this.http.delete<number>('http://localhost:8080/entree/' + idEntree).pipe()
  }
}
