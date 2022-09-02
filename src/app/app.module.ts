import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MesPropreFormationComponent } from './components/mes-propre-formation/mes-propre-formation.component';
import { UpdateFormateurComponent } from './components/formateur/update-formateur/update-formateur.component';
import { AccueilPageComponent } from './components/accueil-page/accueil-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { MenuCycleComponent } from './components/cycle/menu-cycle/menu-cycle.component';
import { CreateCycleComponent } from './components/cycle/create-cycle/create-cycle.component';
import { ListerCyclesComponent } from './components/cycle/lister-cycles/lister-cycles.component';
import { MenuFormateurComponent } from './components/formateur/menu-formateur/menu-formateur.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { ListerFormateurComponent } from './components/formateur/lister-formateur/lister-formateur.component';
import { CreateFormateurComponent } from './components/formateur/create-formateur/create-formateur.component';
import { DetailsFormationComponent } from './components/details-formation/details-formation.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateFormateurComponent,
    UpdateFormateurComponent,
    ListerFormateurComponent,
    MenuAdminComponent,
    ErrorComponent,
    MenuFormateurComponent,
    ListerCyclesComponent,
    CreateCycleComponent,
    MenuCycleComponent,
    InscriptionComponent,
    LoginPageComponent,
    AccueilPageComponent,
    DetailsFormationComponent,
    MesPropreFormationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
