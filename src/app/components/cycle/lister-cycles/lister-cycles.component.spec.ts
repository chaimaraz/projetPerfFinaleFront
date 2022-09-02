import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCyclesComponent } from './lister-cycles.component';

describe('ListerCyclesComponent', () => {
  let component: ListerCyclesComponent;
  let fixture: ComponentFixture<ListerCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerCyclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
