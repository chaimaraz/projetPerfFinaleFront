import { User } from './../../models/participant-information';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
user:User;
  constructor() { }

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem('user'));

  }


}
