import { InscriptionService } from 'src/app/inscription.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cycle } from '../../cycle';
import { CycleService } from '../../cycle.service';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.css']
})
export class AccueilPageComponent implements OnInit {
  loginStatus;
  lescycles: Cycle[]=[];
  constructor(private cycleService:CycleService ,private  router:Router,private ins:InscriptionService) { }

  ngOnInit(): void {
    this.cycleService.getCycles().subscribe(response => this.lescycles=response);
    this.ins.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });
  }

  /*isLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }*/

  logOut(){
    sessionStorage.removeItem('user');
    this.router.navigate(["/home"]);
    this.ins.logoutUser();
  }

}
