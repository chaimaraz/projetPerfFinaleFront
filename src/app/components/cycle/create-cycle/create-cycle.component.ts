import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Cycle } from 'src/app/cycle';
import { CycleService } from 'src/app/cycle.service';
import { Formateur } from 'src/app/formateur';

@Component({
  selector: 'app-create-cycle',
  templateUrl: './create-cycle.component.html',
  styleUrls: ['./create-cycle.component.css'],
})
export class CreateCycleComponent implements OnInit {
  cycle: Cycle = new Cycle();
  formateurs: Formateur[] = [];
  constructor(
    private cycleService: CycleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  createCycle() {
    this.cycleService
      .addCycle(this.cycle)
      .subscribe((Response) => console.log('ajouter '));
    this.router.navigate(['Admin/cycles/lister']);
  }
  modifierCycle() {
    this.cycleService
      .updateCycle(this.cycle)
      .subscribe((response) => console.log('modifiee !'));
    this.router.navigate(['Admin/cycles/lister']);
  }

  comparerFormateur(o1: Formateur, o2: Formateur): boolean {
    if (o1 == undefined && o2 == undefined) return true;
    return o1 === null || o2 === null || o1 === undefined || o2 === undefined
      ? false
      : o1.idFormateur == o2.idFormateur;
  }

  ngOnInit(): void {
    this.cycleService
      .getformateurs()
      .subscribe((response) => (this.formateurs = response));

    this.activatedRoute.params.subscribe((paramas) => {
      let id: number = paramas['id'];
      if (id) {
        this.cycleService
          .obtenirCycle(id)
          .subscribe((response) => (this.cycle = response));
      }
    });
  }
}
