import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaqueFormationComponent } from './chaque-formation.component';

describe('ChaqueFormationComponent', () => {
  let component: ChaqueFormationComponent;
  let fixture: ComponentFixture<ChaqueFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaqueFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaqueFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
