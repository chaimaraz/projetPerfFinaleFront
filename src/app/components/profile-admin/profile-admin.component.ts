import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/inscription.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  user:User;
  actif=true;
  constructor(private incrireS:InscriptionService) { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user'));
  }

  activer(){
    this.actif=false;
  }
  update(){
    this.incrireS.modifier(this.user).subscribe(
      (response:User)=>{
        console.log(response);
        console.log(this.user)
        localStorage.setItem('user', JSON.stringify(response));
      },
      (error:HttpErrorResponse)=> {
        alert(error.message)
      }

    )
    this.actif=true;


  }
}
