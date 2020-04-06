import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../model/Commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Commande[]>('http://localhost:8080/commande/all').pipe()
  }

  createCommande(commande : Commande) {
    return this.http.post<Commande>('http://localhost:8080/commande', commande).pipe()
  }

  deleteCommande(idCommande : number) {
    return this.http.delete<number>('http://localhost:8080/commande/' + idCommande).pipe()
  }

  updateCommande(idCommande : number, commande : Commande) {
    return this.http.put<Commande>('http://localhost:8080/commande/' + idCommande, commande).pipe()
  }

  getById(idCommande : number) {
    return this.http.get<Commande>('http://localhost:8080/commande/' + idCommande).pipe()
  }
}
