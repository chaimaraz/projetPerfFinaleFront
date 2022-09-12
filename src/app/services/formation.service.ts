import { Formation } from './../models/formation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  lien: string='http://localhost:8084/formation';
  constructor(private http:HttpClient) { }


  getFormation():Observable<Formation[]>{
    return this.http.get<Formation[]>(this.lien+'/all');

  }

  addFormation(formation:Formation):Observable<Formation>{
    return this.http.post<Formation>(this.lien+'/add',formation);
  }

  obtenirFormation(id:number):Observable<Formation>{
    return this.http.get<Formation>(this.lien+'/find/'+id)
  }

  supprimerFormation(id:number):Observable<any>{
    return this.http.delete<any>(this.lien+'/delete/'+id)
  }


}
