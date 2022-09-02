import { Router } from '@angular/router';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  par: User = new User();
  exist: boolean = false;

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  enregistrer() {
    this.exist = false;

    this.inscriptionService.inscrire(this.par).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this.router.navigate(['/home']);
      },
      (err) => {
        if (err.error == 'NAME_TAKEN') this.exist = true;
        console.log(err.error);
      }
    );
  }
}
