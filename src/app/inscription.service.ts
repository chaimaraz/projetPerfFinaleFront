import { User } from './models/user';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  baseUrl = environment.apiBaseUrl + '/api/user';
isLoggedIn:boolean;
  constructor(private http: HttpClient) {}

  inscrire(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }
  ajouter(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`+ '/login', user);
  }

  login(email: string, password: string): Observable<User> {
    this.isLoggedIn=true;
    let params = new HttpParams()
      .append('email', email)
      .append('password', password);

    return this.http.get<User>(`${this.baseUrl}`+ '/login', { params: params });

  }

  modifier(user:User):Observable<User>{
    return this.http.put<User>(`${this.baseUrl}`+'/update', user);
  }

  logoutUser() {
    this.isLoggedIn=false;
    localStorage.removeItem('user');

  }

}
