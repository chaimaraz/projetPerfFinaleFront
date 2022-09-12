import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ParticipantGuardGuard implements CanActivate {
  par: User = new User();
  constructor(private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.par= JSON.parse(localStorage.getItem("user"));

      if(this.par && this.par.role=="PARTICIPANT")
      {
        return true;
      }
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }

}

