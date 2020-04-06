import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  
  getAll() {
    return this.http.get<User[]>('http://localhost:8080/user/all').pipe()
  }

  createUser(user : User) {
    return this.http.post<User>('http://localhost:8080/user', user).pipe()
  }

  deleteUser(idUser : number) {
    return this.http.delete<number>('http://localhost:8080/user/' + idUser).pipe()
  }

  updateUser(idUser : number, user : User) {
    return this.http.put<User>('http://localhost:8080/user/' + idUser, user).pipe()
  }

  getById(idUser : number) {
    return this.http.get<User>('http://localhost:8080/user/' + idUser).pipe()
  }
}
