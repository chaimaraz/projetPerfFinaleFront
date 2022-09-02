import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCycleComponent } from './menu-cycle.component';

describe('MenuCycleComponent', () => {
  let component: MenuCycleComponent;
  let fixture: ComponentFixture<MenuCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
