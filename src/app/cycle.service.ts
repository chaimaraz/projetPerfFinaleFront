import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cycle } from './cycle';
import { Formateur } from './formateur';

@Injectable({
  providedIn: 'root'
})
export class CycleService {
  lien: string='http://localhost:8084/cycles';
  constructor(private http:HttpClient) { 
  }


  getCycles():Observable<Cycle[]>{
    return this.http.get<Cycle[]>(this.lien+'/all');

  }
  getformateurs():Observable<Formateur[]>{
    return this.http.get<Formateur[]>(this.lien+'/formateurs');
  }

  addCycle(cycle:Cycle):Observable<Cycle>{
    return this.http.post<Cycle>(this.lien+'/add',cycle);
  }

  updateCycle(cycle:Cycle):Observable<Cycle>{
    return this.http.put(this.lien+'/update/'+cycle.idCycle,cycle)
  }

  obtenirCycle(id:number):Observable<Cycle>{
    return this.http.get<Cycle>(this.lien+'/'+id)
  }

  supprimerCycle(id:number):Observable<any>{
    return this.http.delete<any>(this.lien+'/delete/'+id)
  }
}
