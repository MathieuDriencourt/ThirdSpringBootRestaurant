import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../model/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<Facture[]>('http://localhost:8080/facture/all').pipe()
  }

  createFacture(facture : Facture) {
    return this.http.post<Facture>('http://localhost:8080/facture', facture).pipe()
  }

  deleteFacture(idFacture : number) {
    return this.http.delete<number>('http://localhost:8080/facture/' + idFacture).pipe()
  }

  updateFacture(idFacture : number, facture : Facture) {
    return this.http.put<Facture>('http://localhost:8080/facture/' + idFacture, facture).pipe()
  }

  getById(idFacture : number) {
    return this.http.get<Facture>('http://localhost:8080/facture/' + idFacture).pipe()
  }
  createBis(idCommande : number) {
    return this.http.post<Facture>('http://localhost:8080/facture/' + idCommande, idCommande).pipe()
  }
}
