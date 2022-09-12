import { Component, OnInit } from '@angular/core';
import { Cycle } from 'src/app/cycle';
import { CycleService } from 'src/app/cycle.service';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  Cycles: Cycle[] = [];
  formations: Formation[] = [];
  constructor(private formationS: FormationService, private cyclesS: CycleService) { }

  ngOnInit(): void {
    this.getCycles();
  }


  getCycles() {
    this.cyclesS.getCycles().subscribe((reponse) => (this.Cycles = reponse));
  }

}
