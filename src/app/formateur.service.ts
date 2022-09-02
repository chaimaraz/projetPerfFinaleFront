import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formateur } from './formateur';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class FormateurService {
private URL = environment.apiBaseUrl;
constructor(private http:HttpClient) { } 

getFormateurs():Observable<Formateur[]>{
  return this.http.get<Formateur[]>(`${this.URL}/formateur/all`);
  }
 
 addFormateur(f:Formateur):Observable<Formateur>{
    return this.http.post<Formateur>(`${this.URL}/formateur/add`, f);
    }

    updateFormateur(f:Formateur):Observable<Formateur>{
      return this.http.put<Formateur>(`${this.URL}/formateur/update/`, f);
      }

    deleteFormateur(idf:number):Observable<void>{
      return this.http.delete<void>(`${this.URL}/formateur/delete/${idf}`);
      }  
}
