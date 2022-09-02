import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
u:User;
  constructor() { }

  ngOnInit(): void {
    this.u=JSON.parse(localStorage.getItem('user'));

    console.log(this.u);

  }

}
