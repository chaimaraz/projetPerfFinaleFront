import { MesPropreFormationComponent } from './../mes-propre-formation/mes-propre-formation.component';
import { Formation } from './../../models/formation';
import { CycleService } from 'src/app/cycle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cycle } from 'src/app/cycle';
import { FormationService } from 'src/app/services/formation.service';


@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {
  cycle: Cycle=new Cycle();
  formation:Formation=new Formation();
  frs:Formation[]=[];
  exist: boolean = false;
  constructor( private activatedRoute:ActivatedRoute,
    private cycleService:CycleService ,
    private formationS:FormationService,
    private router:Router ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(paramas =>{
      let id:number =paramas['id'];
      if(id){
        this.cycleService.obtenirCycle(id)
          .subscribe(response =>this.cycle =response);
      }
    })
}


inscrire(){
  this.formation.cycle=this.cycle;
  this.formation.user=JSON.parse(localStorage.getItem("user"));
  this.formation.registeredDate=new Date();
  this.formationS.addFormation(this.formation).subscribe((Response) =>{
     console.log('ajouter ')},
     (err) => {
      if (err.error == 'formation exist'){
       alert("vous etes deja inscrit !");
       this.exist=true;
      }
      console.log(err.error);
    })
  this.router.navigate(['/proprosFormation']);
  console.log(this.formation);


}


}
