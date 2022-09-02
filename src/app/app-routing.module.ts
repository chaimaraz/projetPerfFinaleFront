import { ProfileComponent } from './components/profile/profile.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MesPropreFormationComponent } from './components/mes-propre-formation/mes-propre-formation.component';
import { AccueilPageComponent } from './components/accueil-page/accueil-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { CreateCycleComponent } from './components/cycle/create-cycle/create-cycle.component';
import { ListerCyclesComponent } from './components/cycle/lister-cycles/lister-cycles.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { ListerFormateurComponent } from './components/formateur/lister-formateur/lister-formateur.component';
import { CreateFormateurComponent } from './components/formateur/create-formateur/create-formateur.component';
import { DetailsFormationComponent } from './components/details-formation/details-formation.component';


const routes:Routes =[
  {path:'Admin', component:MenuAdminComponent},
  {path:'formateur', component:ListerFormateurComponent},
  {path:'addFormateur', component:CreateFormateurComponent},
  {path:'cycles', component:ListerCyclesComponent},
  {path:'addCycle', component:CreateCycleComponent},
  {path:'addCycle/:id', component:CreateCycleComponent},
  {path:'fichepresence', component:AppComponent},
  {path:'formation', component:AppComponent},
  {path:'inscription', component:InscriptionComponent},
  {path:'login', component:LoginPageComponent},
  {path:'home', component:AccueilPageComponent},
  {path:'details', component:DetailsFormationComponent},
  {path:'details/:id', component:DetailsFormationComponent},
  {path:'proprosFormation', component:MesPropreFormationComponent},
  {path:'profile', component:ProfileComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:ErrorComponent}

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
