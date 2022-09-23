import { InscriptionService } from 'src/app/inscription.service';
import { User } from './../../models/user';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
u:User;
editUser:User;
@ViewChild('add', { static: false }) myModal1!: ElementRef;
elm1!: HTMLElement;
  constructor( private incrireS:InscriptionService) { }

  ngOnInit(): void {
    this.u=JSON.parse(localStorage.getItem('user'));
  }

  onUpdateUser():void{
    this.incrireS.modifier(this.u).subscribe(
      (response:User)=>{
        console.log(response);
        console.log(this.u)
        localStorage.setItem('user', JSON.stringify(response));
      },
      (error:HttpErrorResponse)=> {
        alert(error.message)
      }
    )
    console.log(this.u)

  }



 ngAfterViewInit(): void {
    this.elm1 = this.myModal1.nativeElement as HTMLElement;

  }

 close(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }
  open(): void {
    this.elm1.classList.add('show');
    this.elm1.style.width = '100vw';

  }


}
