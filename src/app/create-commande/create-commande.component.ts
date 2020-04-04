import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Services/commande.service';
import { Commande } from '../model/Commande';
import { PlatService } from '../Services/plat.service';
import { Plat } from '../model/Plat';
import { EntreeService } from '../Services/entree.service';
import { DessertService } from '../Services/dessert.service';
import { BoissonService } from '../Services/boisson.service';
import { Entree } from '../model/Entree';
import { Dessert } from '../model/Dessert';
import { Boisson } from '../model/Boisson';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {
  newCommande : Commande = new Commande();
  listEntrees : Entree[] = [];
  listPlats : Plat[] = [];
  listDesserts : Dessert[] = [];
  listBoissons : Boisson[] = [];

  constructor(private commandeService : CommandeService, private entreeService : EntreeService, private platService : PlatService, private dessertService : DessertService, private boissonService : BoissonService) { }

  ngOnInit(): void {
    
    this.entreeService.getAll().subscribe(
      data => {
        this.listEntrees = data;
      }
    )

      this.platService.getAll().subscribe(
      data => {
        this.listPlats = data;
      }
    )

    this.dessertService.getAll().subscribe(
      data => {
        this.listDesserts = data;
      }
    )

    this.boissonService.getAll().subscribe(
      data => {
        this.listBoissons = data;
      }
    )
  }

  createCommande() {
    this.commandeService.createCommande(this.newCommande).subscribe(
      data => {
        window.location.href = "http://localhost:4200/commande"
      }
    )
  }

}
