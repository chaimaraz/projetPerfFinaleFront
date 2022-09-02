import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesPropreFormationComponent } from './mes-propre-formation.component';

describe('MesPropreFormationComponent', () => {
  let component: MesPropreFormationComponent;
  let fixture: ComponentFixture<MesPropreFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesPropreFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesPropreFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
