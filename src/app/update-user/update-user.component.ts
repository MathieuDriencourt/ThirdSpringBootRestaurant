import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  newUser : User = new User;
  idUserURL : number;
  constructor(private userService : UserService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getById(this.idUserURL).subscribe(
      data => {
          this.newUser = data
        }
      )
  }



  updateUser(idU : number, newUser : User) {
    this.userService.updateUser(idU, newUser).subscribe(
      data =>{
        console.log(data)
        window.location.href = 'http://localhost:4200/user'
      }
    )
  }
}
