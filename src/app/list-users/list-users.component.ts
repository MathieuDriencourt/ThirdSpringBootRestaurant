import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers : User[] = [];
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(
      data => {
        this.listUsers=data;
      }
    )  
  }


  deleteUser(idUser : number) {
    this.userService.deleteUser(idUser).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/user'
      }
    )
  }

}
