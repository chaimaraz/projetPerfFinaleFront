import { Participant } from './../../participant';
import { Router } from '@angular/router';
import { InscriptionService } from './../../inscription.service';
import { Component, OnInit } from '@angular/core';
import { ERole } from 'src/app/models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  email: string;
  password: string;
  wrongCred: boolean = false;
  role:String;
typeUser=Object.values(ERole);
  constructor(private inscService: InscriptionService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.inscService.login(this.email, this.password).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        sessionStorage.setItem("isconnecte","true");
        console.log(data);
          this.role=data.role;
          if(this.role=="PARTICIPANT")
          {
            this.router.navigate(["/home"]);
          }else{
          this.router.navigate(["/Admin"]);}
      },
      (err) => {
        if (err.error == 'WRONG_CRED') this.wrongCred = true;
        console.log(err.error);
      }
    )

  }
}
