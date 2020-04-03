import { Injectable } from '@angular/core';
import { Tables } from '../model/Tables';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablesService {

  constructor(private http:HttpClient) { }

  
  getAll() {
    return this.http.get<Tables[]>('http://localhost:8080/tables/all').pipe()
  }

  createTables(tables : Tables) {
    return this.http.post<Tables>('http://localhost:8080/tables', tables).pipe()
  }

  deleteTables(idTables : number) {
    return this.http.delete<number>('http.//localhost:8080/tables/' + idTables).pipe()
  }

  updateTables(idTables : number, tables : Tables) {
    return this.http.put<Tables>('http://localhost:8080/tables/' + idTables, tables).pipe()
  }

  getById(idTables : number) {
    return this.http.get<Tables>('http://localhost:8080/tables/' + idTables).pipe()
  }
}
