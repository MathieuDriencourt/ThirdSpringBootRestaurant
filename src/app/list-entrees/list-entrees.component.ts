import { Component, OnInit } from '@angular/core';
import { EntreeService } from '../Services/entree.service';
import { Entree } from '../model/Entree';

@Component({
  selector: 'app-list-entrees',
  templateUrl: './list-entrees.component.html',
  styleUrls: ['./list-entrees.component.css']
})
export class ListEntreesComponent implements OnInit {
  newEntree : Entree = new Entree();
  listEntrees : Entree [] = [];

  constructor(private entreeService : EntreeService) { }

  ngOnInit(): void {
    this.entreeService.getAll().subscribe(
      data => {
        this.listEntrees = data;
      }
    )
  }

  deleteEntree(idEntree : number) {
    this.entreeService.deleteEntree(idEntree).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
