import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';
import { ListReservationsComponent } from './list-reservations/list-reservations.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { UpdateReservationComponent } from './update-reservation/update-reservation.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListPlatsComponent } from './list-plats/list-plats.component';
import { CreatePlatComponent } from './create-plat/create-plat.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { ListTablesComponent } from './list-tables/list-tables.component';
import { CreateTablesComponent } from './create-tables/create-tables.component';
import { CreateLigneCommandeComponent } from './create-ligne-commande/create-ligne-commande.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListCommandesComponent,
    ListReservationsComponent,
    CreateUserComponent,
    UpdateUserComponent,
    CreateCommandeComponent,
    UpdateCommandeComponent,
    CreateReservationComponent,
    UpdateReservationComponent,
    ListFacturesComponent,
    CreateFactureComponent,
    ListPlatsComponent,
    CreatePlatComponent,
    UpdatePlatComponent,
    ListTablesComponent,
    CreateTablesComponent,
    CreateLigneCommandeComponent,
    AccueilComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
