import { Component, OnInit } from '@angular/core';
import { DessertService } from '../Services/dessert.service';
import { Dessert } from '../model/Dessert';

@Component({
  selector: 'app-create-dessert',
  templateUrl: './create-dessert.component.html',
  styleUrls: ['./create-dessert.component.css']
})
export class CreateDessertComponent implements OnInit {
    newDessert : Dessert = new Dessert();

  constructor(private dessertService : DessertService) { }

  ngOnInit(): void {
  }

  createDessert() {
    this.dessertService.createDessert(this.newDessert).subscribe(
      data => {
        console.log(data);
        window.location.href = "http://localhost:4200/dessert"
      }
    )
  }
}
