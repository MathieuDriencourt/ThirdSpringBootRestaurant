import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';

import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';

import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListPlatsComponent } from './list-plats/list-plats.component';
import { CreatePlatComponent } from './create-plat/create-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';


import { AccueilComponent } from './accueil/accueil.component';
import { ListReservationMidiComponent } from './list-reservation-midi/list-reservation-midi.component';
import { CreateReservationMidiComponent } from './create-reservation-midi/create-reservation-midi.component';
import { ListReservationSoirComponent } from './list-reservation-soir/list-reservation-soir.component';
import { CreateReservationSoirComponent } from './create-reservation-soir/create-reservation-soir.component';
import { ListEntreesComponent } from './list-entrees/list-entrees.component';
import { ListDessertsComponent } from './list-desserts/list-desserts.component';
import { ListBoissonsComponent } from './list-boissons/list-boissons.component';
import { CreateEntreesComponent } from './create-entrees/create-entrees.component';
import { CreateDessertComponent } from './create-dessert/create-dessert.component';
import { CreateBoissonComponent } from './create-boisson/create-boisson.component';
import { UpdateReservationMidiComponent } from './update-reservation-midi/update-reservation-midi.component';
import { UpdateReservationSoirComponent } from './update-reservation-soir/update-reservation-soir.component';



const routes: Routes = [

  {
  path : '', redirectTo:'/accueil', pathMatch:'full',
  },
  {
    path : 'accueil',
    component : AccueilComponent

  },
  {
    path : 'user',
    component : ListUsersComponent

  },
  {
    path : 'commande',
    component : ListCommandesComponent
  },
  {
    path : 'reservationMidi',
    component : ListReservationMidiComponent

  },
  {
    path : 'reservationSoir',
    component : ListReservationSoirComponent

  },
  {
    path : 'facture',
    component : ListFacturesComponent
  },
  {
    path : 'entree',
    component : ListEntreesComponent
  },
  {
    path : 'plat',
    component : ListPlatsComponent
  },
  {
    path : 'dessert',
    component : ListDessertsComponent
  },
  {
    path : 'boisson',
    component : ListBoissonsComponent
  },
  {
    path : 'createUser',
    component : CreateUserComponent
  },
  {
    path : 'createCommande',
    component : CreateCommandeComponent
  },
  {
    path : 'createReservationMidi',
    component : CreateReservationMidiComponent

  },
  {
    path : 'createReservationSoir',
    component : CreateReservationSoirComponent

  },
  {
    path : 'createFacture',
    component : CreateFactureComponent
  },
  {
    path : 'createEntree',
    component : CreateEntreesComponent
  },
  {
    path : 'createPlat',
    component : CreatePlatComponent
  },
  {
    path : 'createDessert',
    component : CreateDessertComponent
  },
  {
    path : 'createBoisson',
    component : CreateBoissonComponent
  },
  {
    path : "updateUser/:idU",
    component : UpdateUserComponent
  },
  {
    path : "updateCommande/:idC",
    component : UpdateCommandeComponent
  },
  {
    path : "updateReservation/:idR",
    component : UpdateReservationComponent
  },
  {
    path : "updateReservationMidi/:idRM",
    component : UpdateReservationMidiComponent
  },
  {
    path : "updateReservationSoir/:idRS",
    component : UpdateReservationSoirComponent
  },
  {
    path : "updatePlat/:idP",
    component : UpdatePlatComponent
  }
  















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
