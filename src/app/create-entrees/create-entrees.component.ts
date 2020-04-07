import { Component, OnInit } from '@angular/core';
import { EntreeService } from '../Services/entree.service';
import { Entree } from '../model/Entree';

@Component({
  selector: 'app-create-entrees',
  templateUrl: './create-entrees.component.html',
  styleUrls: ['./create-entrees.component.css']
})
export class CreateEntreesComponent implements OnInit {
      newEntree : Entree = new Entree();

  constructor(private entreeService : EntreeService) { }

  ngOnInit(): void {
  }

  createEntree() {
    this.entreeService.createEntree(this.newEntree).subscribe(
      data => {
        console.log(data);
        window.location.href = "http://localhost:4200/entree"
      }
    )
  }
}
