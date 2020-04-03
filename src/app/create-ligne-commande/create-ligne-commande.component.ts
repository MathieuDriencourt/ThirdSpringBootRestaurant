import { Component, OnInit } from '@angular/core';
import { LigneCommandeService } from '../Services/ligne-commande.service';
import { PlatService } from '../Services/plat.service';
import { CommandeService } from '../Services/commande.service';
import { Plat } from '../model/Plat';
import { Commande } from '../model/Commande';
import { LigneCommande } from '../model/LigneCommande';

@Component({
  selector: 'app-create-ligne-commande',
  templateUrl: './create-ligne-commande.component.html',
  styleUrls: ['./create-ligne-commande.component.css']
})
export class CreateLigneCommandeComponent implements OnInit {
  newLigneCommande : LigneCommande = new LigneCommande()
  listPlats : Plat[] = [];
  listCommandes : Commande[] = [];
  
  constructor(private lignecommandeService : LigneCommandeService, private platService : PlatService, private commandeService : CommandeService) { }

  ngOnInit(): void {
    this.platService.getAll().subscribe(
      data => {
        this.listPlats = data;
      }
    )

    this.commandeService.getAll().subscribe(
      data => {
        this.listCommandes = data;
      }

      )
    
  }

  createLigneCommande() {
    this.lignecommandeService.createLigneCommande(this.newLigneCommande).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
