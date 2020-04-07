import { Component, OnInit } from '@angular/core';
import { BoissonService } from '../Services/boisson.service';
import { Boisson } from '../model/Boisson';

@Component({
  selector: 'app-create-boisson',
  templateUrl: './create-boisson.component.html',
  styleUrls: ['./create-boisson.component.css']
})
export class CreateBoissonComponent implements OnInit {
    newBoisson : Boisson = new Boisson();
  constructor(private boissonService : BoissonService) { }

  ngOnInit(): void {
  }

  createBoisson() {
    this.boissonService.createBoisson(this.newBoisson).subscribe(
      data => {
        console.log(data);
        window.location.href = "http://localhost:4200/boisson"
      }
    )
  }
}
