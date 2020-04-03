import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from '../model/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<Role[]>('http://localhost:8080/role/all').pipe()
  }

  createRole(role : Role) {
    return this.http.post<Role>('http://localhost:8080/role', role).pipe()
  }

  deleteRole(idRole : number) {
    return this.http.delete<number>('http.//localhost:8080/role/' + idRole).pipe()
  }

  updateRole(idRole : number, role : Role) {
    return this.http.put<Role>('http://localhost:8080/role/' + idRole, role).pipe()
  }

  getById(idRole : number) {
    return this.http.get<Role>('http://localhost:8080/role/' + idRole).pipe()
  }
}
