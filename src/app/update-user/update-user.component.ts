import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../Services/user.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../Services/role.service';
import { Role } from '../model/Role';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  newUser : User = new User;
  idUserURL : number;
  listRoles : Role [] = [];

  constructor(private userService : UserService, private roleService : RoleService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getById(this.idUserURL).subscribe(
      data => {
          this.newUser = data;
        }
      )

      this.roleService.getAll().subscribe(
        data => {
          this.listRoles = data;
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
