import { InscriptionService } from './../../inscription.service';
import { User } from './../../models/user';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cycle } from 'src/app/cycle';
import { CycleService } from 'src/app/cycle.service';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-chaque-formation',
  templateUrl: './chaque-formation.component.html',
  styleUrls: ['./chaque-formation.component.css']
})
export class ChaqueFormationComponent implements OnInit {
  cycle: Cycle=new Cycle();
  formations: Formation[] = [];
  id:number;
 participant:User=new User();

 @ViewChild('add', { static: false }) myModal1!: ElementRef;
 elm1!: HTMLElement;
  constructor(private activatedRoute:ActivatedRoute,
    private cycleService:CycleService ,
    private formationS:FormationService,
    private inscriptionService:InscriptionService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe(paramas =>{
      this.id =paramas['id'];
      if(this.id){
        this.cycleService.obtenirCycle(this.id)
          .subscribe(response =>this.cycle =response);

      }
    })
    this.formationS.getFormation().subscribe(data =>this.formations=data)
    this.formationS.getFormation().subscribe(() => (this.formations = this.formations.filter(l => l.cycle.idCycle==this.id)));

  }


  deleteFormation(id: number) {
    this.formationS.supprimerFormation(id).subscribe((response) =>
      alert('supprimee')
    );
  }



  ngAfterViewInit(): void {
    this.elm1 = this.myModal1.nativeElement as HTMLElement;

  }

 close(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }
  open(): void {
    this.elm1.classList.add('show');
    this.elm1.style.width = '100vw';
  }







}
