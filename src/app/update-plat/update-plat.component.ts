import { Component, OnInit } from '@angular/core';
import { PlatService } from '../Services/plat.service';
import { ActivatedRoute } from '@angular/router';
import { Plat } from '../model/Plat';

@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
  newPlat : Plat = new Plat();
  idPlatURL : number;
  constructor(private platService : PlatService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.platService.getById(this.idPlatURL).subscribe(
      data => {
          this.newPlat = data
        }
      )
  }

  updatePlat(idP : number, newPlat : Plat) {
    this.platService.updatePlat(idP, newPlat).subscribe(
      // updatePlat(idP, newPlat) si pas les paramètres dans les parenthèses de la méthode alors on écrit updatePlat(this.idP, this.newPlat)
      data =>{
        console.log(data)
        window.location.href = 'http://localhost:4200/plat'
      }
    )
  }

}
