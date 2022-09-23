import { MenuFormateurComponent } from './components/formateur/menu-formateur/menu-formateur.component';
import { MenuCycleComponent } from './components/cycle/menu-cycle/menu-cycle.component';
import { ChaqueFormationComponent } from './components/chaque-formation/chaque-formation.component';
import { FormationComponent } from './components/formation/formation.component';
import { FichePresenceComponent } from './components/fiche-presence/fiche-presence.component';
import { ProfileComponent } from './components/profile/profile.component';

import { NgModule, Component } from '@angular/core';
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
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { ParticipantGuardGuard } from './guards/participant-guard.guard';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';


const routes:Routes =[
  {path:'Admin', component:MenuAdminComponent ,
  children:[

    {path:'cycles', component:MenuCycleComponent,
    children:[
    {path:'lister', component:ListerCyclesComponent},
    {path:'addCycle', component:CreateCycleComponent},
    {path:'lister/:id', component:CreateCycleComponent},

  ]},
  {path:'MonProfile',component:ProfileAdminComponent},
  {path:'formateur', component:MenuFormateurComponent,
  children:[
    {path:'lister', component:ListerFormateurComponent},
    {path:'addFormateur', component:CreateFormateurComponent},
  ]},
    {path:'fiche', component:FichePresenceComponent},
    {path:'formation', component:FormationComponent},
    {path:'formation/:id', component:ChaqueFormationComponent},
  ],canActivate:[AdminGuardGuard]},
    {path:'proprosFormation', component:MesPropreFormationComponent,canActivate:[ParticipantGuardGuard]},
    {path:'profile', component:ProfileComponent,canActivate:[ParticipantGuardGuard]},
  {path:'inscription', component:InscriptionComponent},
  {path:'login', component:LoginPageComponent},
  {path:'home', component:AccueilPageComponent},
  {path:'details', component:DetailsFormationComponent},
  {path:'details/:id', component:DetailsFormationComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'**', component:ErrorComponent},

  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
