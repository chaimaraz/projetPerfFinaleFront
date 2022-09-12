import { Component, OnInit } from '@angular/core';
import { Cycle } from 'src/app/cycle';
import { CycleService } from 'src/app/cycle.service';

@Component({
  selector: 'app-lister-cycles',
  templateUrl: './lister-cycles.component.html',
  styleUrls: ['./lister-cycles.component.css']
})
export class ListerCyclesComponent implements OnInit {
  lescycles: Cycle[]=[];
  val:any;
  constructor(private cycleService:CycleService) { }

  ngOnInit(): void {
    this.cycleService.getCycles().subscribe(response => this.lescycles=response)
  }

  deleteCycle(id:number){
    this.cycleService.supprimerCycle(id)
      .subscribe(response =>console.log("supprimee"));
  }
}
