import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../model/User';
import { RoleService } from '../Services/role.service';
import { Role } from '../model/Role';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  newUser : User = new User();
  listRoles : Role[] = [];
  constructor(private userService : UserService, private roleService : RoleService) { }

  ngOnInit(): void {
    this.roleService.getAll().subscribe(
      data => {
        this.listRoles = data;
      }
    )
  }

  
  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/user'
      }
    )
  }


}
