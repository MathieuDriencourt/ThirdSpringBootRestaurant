import { Component, OnInit } from '@angular/core';
import { FactureService } from '../Services/facture.service';
import { Facture } from '../model/Facture';
import { CommandeService } from '../Services/commande.service';

@Component({
  selector: 'app-list-factures',
  templateUrl: './list-factures.component.html',
  styleUrls: ['./list-factures.component.css']
})
export class ListFacturesComponent implements OnInit {
  listFactures : Facture [] = [];

  constructor(private factureService : FactureService) { }

  ngOnInit(): void {
    this.factureService.getAll().subscribe(
      data => {
        this.listFactures = data;
        console.log(data)
      }
    )
  }

}
