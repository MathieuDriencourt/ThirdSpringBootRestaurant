import { Component, OnInit } from '@angular/core';
import { PlatService } from '../Services/plat.service';
import { Plat } from '../model/Plat';

@Component({
  selector: 'app-create-plat',
  templateUrl: './create-plat.component.html',
  styleUrls: ['./create-plat.component.css']
})
export class CreatePlatComponent implements OnInit {
  newPlat : Plat = new Plat()

  constructor(private platService : PlatService) { }

  ngOnInit(): void {
  }

  createPlat() {
    this.platService.createPlat(this.newPlat).subscribe(
      data => {
        window.location.href = "http://localhost:4200/plat"
      }
    )
  }
}
