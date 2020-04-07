import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../Services/commande.service';
import { ActivatedRoute } from '@angular/router';
import { Commande } from '../model/Commande';
import { Entree } from '../model/Entree';
import { Plat } from '../model/Plat';
import { Dessert } from '../model/Dessert';
import { Boisson } from '../model/Boisson';
import { User } from '../model/User';
import { BoissonService } from '../Services/boisson.service';
import { DessertService } from '../Services/dessert.service';
import { PlatService } from '../Services/plat.service';
import { EntreeService } from '../Services/entree.service';
import { UserService } from '../Services/user.service';

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
  
  constructor(private commandeService : CommandeService, private entreeService : EntreeService, private platService : PlatService, private dessertService : DessertService, private boissonService : BoissonService, private userService : UserService, private route : ActivatedRoute) { 
    this.idCommandeURL = parseInt(this.route.snapshot.paramMap.get('idC'));
  }

  ngOnInit(): void {
    this.commandeService.getById(this.idCommandeURL).subscribe(
      data => {
          this.newCommande = data;
        }
      )
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
  
      this.userService.getAll().subscribe(
        data => {
          this.listUsers = data;
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

