import { Component, OnInit } from '@angular/core';
import { BoissonService } from '../Services/boisson.service';
import { Boisson } from '../model/Boisson';

@Component({
  selector: 'app-list-boissons',
  templateUrl: './list-boissons.component.html',
  styleUrls: ['./list-boissons.component.css']
})
export class ListBoissonsComponent implements OnInit {
  newBoisson : Boisson = new Boisson();
  listBoissons : Boisson [] = [];

  constructor(private boissonService : BoissonService) { }

  ngOnInit(): void {
    this.boissonService.getAll().subscribe(
      data => {
        this.listBoissons = data;
      }
    )
  }

  deleteBoisson(idBoisson : number) {
      this.boissonService.deleteBoisson(idBoisson).subscribe(
        data => {
          console.log(data);
        }
      )
  }

}
