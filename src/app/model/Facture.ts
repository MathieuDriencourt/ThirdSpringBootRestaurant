import { Commande } from "./Commande";
export class Facture {
    idFacture : number;
    montantFacture : number;
    dateFacture : Date;
    statusFacture : boolean;
    commande : Commande;   
}

