import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListPlatsComponent } from './list-plats/list-plats.component';
import { CreatePlatComponent } from './create-plat/create-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { ListTablesComponent } from './list-tables/list-tables.component';
import { CreateTablesComponent } from './create-tables/create-tables.component';
import { AccueilComponent } from './accueil/accueil.component';



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
    path : 'reservation',
    component : ListReservationsComponent
  },
  {
    path : 'facture',
    component : ListFacturesComponent
  },
  {
    path : 'plat',
    component : ListPlatsComponent
  },
  {
    path : 'tables',
    component : ListTablesComponent
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
    path : 'createReservation',
    component : CreateReservationComponent
  },
  {
    path : 'createFacture',
    component : CreateFactureComponent
  },
  {
    path : 'createPlat',
    component : CreatePlatComponent
  },
  {
    path : 'createTables',
    component : CreateTablesComponent
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
    path : "updatePlat/:idP",
    component : UpdatePlatComponent
  }
  















];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
