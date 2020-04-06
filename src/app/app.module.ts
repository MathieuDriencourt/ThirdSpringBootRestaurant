import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ListCommandesComponent } from './list-commandes/list-commandes.component';

import { HttpClientModule } from '@angular/common/http';
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

import { CreateLigneCommandeComponent } from './create-ligne-commande/create-ligne-commande.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { CreateReservationMidiComponent } from './create-reservation-midi/create-reservation-midi.component';
import { ListReservationMidiComponent } from './list-reservation-midi/list-reservation-midi.component';
import { CreateReservationSoirComponent } from './create-reservation-soir/create-reservation-soir.component';
import { ListReservationSoirComponent } from './list-reservation-soir/list-reservation-soir.component';
import { UpdateReservationMidiComponent } from './update-reservation-midi/update-reservation-midi.component';
import { UpdateReservationSoirComponent } from './update-reservation-soir/update-reservation-soir.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    ListCommandesComponent,
    
    CreateUserComponent,
    UpdateUserComponent,
    CreateCommandeComponent,
    UpdateCommandeComponent,
    
    UpdateReservationComponent,
    ListFacturesComponent,
    CreateFactureComponent,
    ListPlatsComponent,
    CreatePlatComponent,
    UpdatePlatComponent,
    
    CreateLigneCommandeComponent,
    AccueilComponent,
    HeaderComponent,
    CreateReservationMidiComponent,
    ListReservationMidiComponent,
    CreateReservationSoirComponent,
    ListReservationSoirComponent,
    UpdateReservationMidiComponent,
    UpdateReservationSoirComponent
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
