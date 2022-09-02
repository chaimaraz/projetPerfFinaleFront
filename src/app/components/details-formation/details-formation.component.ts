import { CycleService } from 'src/app/cycle.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cycle } from 'src/app/cycle';


@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.css']
})
export class DetailsFormationComponent implements OnInit {
  cycle: Cycle=new Cycle();
  constructor( private activatedRoute:ActivatedRoute,private cycleService:CycleService) { }

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


}
