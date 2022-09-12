import { CycleService } from 'src/app/cycle.service';
import { Formation } from './../../models/formation';
import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Cycle } from 'src/app/cycle';

@Component({
  selector: 'app-fiche-presence',
  templateUrl: './fiche-presence.component.html',
  styleUrls: ['./fiche-presence.component.css'],
})
export class FichePresenceComponent implements OnInit {
  formations: Formation[] = [];
  theme: any;
  formateur: any;
  dateD: any;
  HeureD: any;
  Cycles: Cycle[] = [];
  idR: String;
  isAvailable = false;
  jour: string;
  resultat = [];
  nbj:any;

  constructor(
    private formationS: FormationService,
    private cyclesS: CycleService
  ) {}
  OnSearch() {
    const results: Cycle[] = [];
    const resF: Formation[] = [];
    for (let f of this.Cycles) {
      if (
        f.theme.toLowerCase().indexOf(this.theme.toLowerCase()) !== -1 &&
        f.formateur.nom.toLowerCase().indexOf(this.formateur.toLowerCase()) !==
          -1 &&
        f.dateDebut.toString().indexOf(this.dateD) !== -1 &&
        f.heureDebut.indexOf(this.HeureD) !== -1
      ){
        results.push(f);
      this.isAvailable = true;}
    }
    this.Cycles = results;

    for (let r of results) {
      this.idR = r.idCycle.toString();
      console.log(this.idR);

      let from = new Date(r.dateDebut);
      let to = new Date(r.dateFin);
      let Diff_temps = to.getTime() - from.getTime();
      let Diff_jours = Diff_temps / (1000 * 3600 * 24);
      this.nbj = Math.round(Diff_jours);
      console.log(this.nbj);
      let res = new Date(from);
      this.resultat.push(res.toLocaleDateString('fr'));
      let i = 0;
      while (i < this.nbj) {
        res.setDate(res.getDate() + 1);
        i = i + 1;
        this.resultat.push(res.toLocaleDateString('fr'));
      }
      alert(this.resultat);
      for (let fr of this.formations) {
        if (
          fr.cycle.idCycle
            .toString()
            .toLowerCase()
            .indexOf(this.idR.toLowerCase()) !== -1
        )
          resF.push(fr);
      }
      this.formations = resF;
    }
  }

  getFormations() {
    this.formationS
      .getFormation()
      .subscribe((data) => (this.formations = data));
  }

  getCycles() {
    this.cyclesS.getCycles().subscribe((reponse) => (this.Cycles = reponse));
  }
  ngOnInit(): void {
    this.getCycles();
    this.getFormations();
  }
}
