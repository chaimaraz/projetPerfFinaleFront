import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  par: User = new User();
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.par= JSON.parse(localStorage.getItem("user"));;

      if(this.par && this.par.role=="ADMIN")
      {
        return true;
      }
      else{
        this.router.navigate(['/home']);
        return false;
      }
  }

}


