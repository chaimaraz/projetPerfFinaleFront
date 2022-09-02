
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/formateur';
import { FormateurService } from 'src/app/formateur.service';

@Component({
  selector: 'app-lister-formateur',
  templateUrl: './lister-formateur.component.html',
  styleUrls: ['./lister-formateur.component.css']
})
export class ListerFormateurComponent implements OnInit {
lesFormateurs:Formateur[]=[]
 editFormateur:Formateur;
deleteFormateur:Formateur;

  constructor(private formateurService:FormateurService) { }

  getFormateur():void{
  this.formateurService.getFormateurs().subscribe(
    (response:Formateur[] )=> {
       this.lesFormateurs = response;
    },
    (error:HttpErrorResponse)=>{
      alert(error.message)
    }
  );
  }

  public onOpenModal(formateur: Formateur, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'edit') {
      this.editFormateur=formateur;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteFormateur=formateur;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }


  onUpdateFormateur(formateur:Formateur):void{
    
    this.formateurService.addFormateur(formateur).subscribe(
      (response:Formateur)=>{
        console.log(response);
        this.getFormateur()
  
      },
      (error:HttpErrorResponse)=> {
        alert(error.message)
      }
    )

  }

  onDeleteFormateur(idf:number):void{
    
    this.formateurService.deleteFormateur(idf).subscribe(
      (response:void)=>{
        console.log(response);
        this.getFormateur()
  
      },
      (error:HttpErrorResponse)=> {
        alert(error.message)
      }
    )

  }

  searchFormateur(key:String):void{
    const results:Formateur[]=[];
    for(let f of this.lesFormateurs){
      if(f.nom.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||f.prenom.toLowerCase().indexOf(key.toLowerCase()) !== -1 )
        results.push(f);
    }
    this.lesFormateurs=results;
    if(results.length===0 || !key)
    this.getFormateur();
  }

  ngOnInit(): void {
    this.getFormateur();
  }

}
