import { Formation } from './../../models/formation';
import { FormationService } from './../../services/formation.service';

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-mes-propre-formation',
  templateUrl: './mes-propre-formation.component.html',
  styleUrls: ['./mes-propre-formation.component.css'],
})
export class MesPropreFormationComponent implements OnInit {
  formations: Formation[] = [];
  u: User;
  results: Formation[] = [];
  constructor(private FormationS: FormationService) {}

  ngOnInit(): void {
    this.u = JSON.parse(localStorage.getItem('user'));

    this.FormationS.getFormation().subscribe(data =>this.formations=data)
    this.FormationS.getFormation().subscribe(
      () =>
        (this.formations = this.formations.filter(
          (l) => l.user.id == this.u.id
        ))
    );
  }
  deleteFormation(id: number) {
    this.FormationS.supprimerFormation(id).subscribe((response) =>
      alert('supprimee')
    );
  }
}
