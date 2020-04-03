import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Services/commande.service';
import { Commande } from '../model/Commande';
import { PlatService } from '../Services/plat.service';
import { Plat } from '../model/Plat';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {
  newCommande : Commande = new Commande();
  listPlats : Plat[] = [];

  constructor(private commandeService : CommandeService, private platService : PlatService) { }

  ngOnInit(): void {
    
  }

  createCommande() {
    this.commandeService.createCommande(this.newCommande).subscribe(
      data => {

      }
    )
  }

}
