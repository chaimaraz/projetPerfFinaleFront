import { InscriptionService } from 'src/app/inscription.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cycle } from '../../cycle';
import { CycleService } from '../../cycle.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.css']
})
export class AccueilPageComponent implements OnInit {
  loginStatus:boolean;
  lescycles: Cycle[]=[];
  user:User;

  constructor(private cycleService:CycleService ,private  router:Router,private ins:InscriptionService) { }
photos=["assets/formations/f1.jfif","assets/formations/f2.jfif","assets/formations/f3.jfif","assets/formations/f4.png",
"assets/formations/f5.jfif","assets/formations/f6.jfif","assets/formations/f7.jfif","assets/formations/f8.jfif",
"assets/formations/f9.jfif","assets/formations/f10.jfif","assets/formations/f11.png","assets/formations/f12.jfif","assets/formations/f13.jfif"]
  ngOnInit(): void {
    this.cycleService.getCycles().subscribe(response => this.lescycles=response);
    this.loginStatus=this.ins.isLoggedIn;
  }

  /*isLoggedIn() {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }*/

  logOut(){
    this.router.navigate(["/home"]);
    this.ins.logoutUser();
    this.loginStatus=false;
  }


}
