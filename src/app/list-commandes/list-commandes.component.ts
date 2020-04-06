import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Services/commande.service';
import { Commande } from '../model/Commande';
import { FactureService } from '../Services/facture.service';
import { Facture } from '../model/Facture';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.css']
})
export class ListCommandesComponent implements OnInit {
  listCommandes : Commande [] = [];
  newFacture : Facture = new Facture()

  constructor(private commandeService : CommandeService, private factureService : FactureService) { }

  ngOnInit(): void {
    this.commandeService.getAll().subscribe(
      data => {
        this.listCommandes = data;
      }
    )
  }

  deleteCommande(idCommande : number) {
    this.commandeService.deleteCommande(idCommande).subscribe(
      data => {
        console.log(data)
        window.location.href = "http://localhost:4200/commande"
      }
    )
  }

  createBis(idCommande : number) {
    this.factureService.createBis(idCommande).subscribe(
      data =>{
        console.log(data);
        window.location.href = "http://localhost:4200/facture"
      }
    )
  }
  

}
