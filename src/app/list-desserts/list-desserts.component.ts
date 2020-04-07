import { Component, OnInit } from '@angular/core';
import { DessertService } from '../Services/dessert.service';
import { Dessert } from '../model/Dessert';

@Component({
  selector: 'app-list-desserts',
  templateUrl: './list-desserts.component.html',
  styleUrls: ['./list-desserts.component.css']
})
export class ListDessertsComponent implements OnInit {
  newDessert : Dessert = new Dessert();
  listDesserts : Dessert [] = [];


  constructor(private dessertService : DessertService) { }

  ngOnInit(): void {

    this.dessertService.getAll().subscribe(
      data => {
        this.listDesserts = data;
      }
    )
  }

  deleteDessert(idDessert : number) {
    this.dessertService.deleteDessert(idDessert).subscribe(
      data => {
        console.log(data);
      }
    )
  }

}
