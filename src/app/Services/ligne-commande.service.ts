import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LigneCommande } from '../model/LigneCommande';

@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {

  constructor(private http : HttpClient) { }

  getAll() {
    return this.http.get<LigneCommande[]>('http://localhost:8080/ligneCommande/all').pipe()
  }

  createLigneCommande(ligneCommande : LigneCommande) {
    return this.http.post<LigneCommande>('http://localhost:8080/ligneCommande', ligneCommande).pipe()
  }


  deleteLigneCommande(idLigneCommande : number) {
    return this.http.delete<number>('http.//localhost:8080/ligneCommande/' + idLigneCommande).pipe()
  }

  updateLigneCommande(idLigneCommande : number, ligneCommande : LigneCommande) {
    return this.http.put<LigneCommande>('http://localhost:8080/ligneCommande/' + idLigneCommande, ligneCommande).pipe()
  }

  getById(idLigneCommande : number) {
    return this.http.get<LigneCommande>('http://localhost:8080/ligneCommande/' + idLigneCommande).pipe()
  }


}
