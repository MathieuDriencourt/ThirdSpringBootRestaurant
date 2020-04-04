import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Services/commande.service';
import { Commande } from '../model/Commande';

@Component({
  selector: 'app-list-commandes',
  templateUrl: './list-commandes.component.html',
  styleUrls: ['./list-commandes.component.css']
})
export class ListCommandesComponent implements OnInit {
  listCommandes : Commande [] = [];

  constructor(private commandeService : CommandeService) { }

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

}
