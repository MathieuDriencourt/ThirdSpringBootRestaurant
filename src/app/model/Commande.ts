import {User} from './User'
import { Entree } from './Entree';
import { Plat } from './Plat';
import { Dessert } from './Dessert';
import { Boisson } from './Boisson';
export class Commande {
    idCommande : number;
    montantCommande : number;
    qteEntree : number;
    qtePlat : number;
    qteDessert : number;
    qteBoisson : number;
    entree : Entree;
    plat : Plat;
    dessert : Dessert;
    boisson : Boisson;
    employee : User;
   
}