import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../model/Commande';
import { Entree } from '../model/Entree';
import { Plat } from '../model/Plat';
import { Dessert } from '../model/Dessert';
import { Boisson } from '../model/Boisson';
import { User } from '../model/User';

@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styleUrls: ['./update-commande.component.css']
})
export class UpdateCommandeComponent implements OnInit {
  newCommande : Commande = new Commande();
  idCommandeURL : number;
  listEntrees : Entree[] = [];
  listPlats : Plat[] = [];
  listDesserts : Dessert[] = [];
  listBoissons : Boisson[] = [];
  listUsers : User[] = [];
  
  constructor(private commandeService : CommandeService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.commandeService.getById(this.idCommandeURL).subscribe(
      data => {
          this.newCommande = data;
        }
      )
  }


  updateCommande(idC : number, newCommande : Commande) {
    this.commandeService.updateCommande(idC, newCommande).subscribe(
      data =>{
        console.log(data)
        window.location.href = 'http://localhost:4200/commande'
      }
    )
  }
}

