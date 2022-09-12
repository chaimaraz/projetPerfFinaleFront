import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/formateur';
import { FormateurService } from 'src/app/formateur.service';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {
  lesFormateurs:Formateur[]=[]
  constructor(private router:Router,private fromateurService:FormateurService) { }

  getFormateur():void{
    this.fromateurService.getFormateurs().subscribe(
      (response:Formateur[] )=> {
         this.lesFormateurs = response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message)
      }
    );
  }

  onAddFormateur(addForm:NgForm){

    this.fromateurService.addFormateur(addForm.value).subscribe(
      (response:Formateur)=>{
        console.log(response);
        console.log(addForm.value);
        this.getFormateur();

      },
      (error:HttpErrorResponse)=> {
        alert(error.message)
      }
    )
    this.router.navigate(['Admin/formateur/lister']);

  }
  ngOnInit(): void {
    this.getFormateur();
  }

}
