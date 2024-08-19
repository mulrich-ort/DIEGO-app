import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionesDocenteComponent } from './decisiones-docente.component';

describe('DecisionesDocenteComponent', () => {
  let component: DecisionesDocenteComponent;
  let fixture: ComponentFixture<DecisionesDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionesDocenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionesDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
