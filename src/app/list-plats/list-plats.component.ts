import { Component, OnInit } from '@angular/core';
import { PlatService } from '../Services/plat.service';
import { Plat } from '../model/Plat';

@Component({
  selector: 'app-list-plats',
  templateUrl: './list-plats.component.html',
  styleUrls: ['./list-plats.component.css']
})
export class ListPlatsComponent implements OnInit {
  listPlats : Plat[] = [];
  constructor(private platService : PlatService) { }

  ngOnInit(): void {
    this.platService.getAll().subscribe(
      data => {
        this.listPlats=data;
      }
    )
  }



  deletePlat(idPlat : number) {
    this.platService.deletePlat(idPlat).subscribe(
      data => {
        console.log(data)
        window.location.href = 'http://localhost:4200/plat'
      }
    )
  }
}
