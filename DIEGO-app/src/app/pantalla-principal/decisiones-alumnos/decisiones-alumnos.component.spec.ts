import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionesAlumnosComponent } from './decisiones-alumnos.component';

describe('DecisionesAlumnosComponent', () => {
  let component: DecisionesAlumnosComponent;
  let fixture: ComponentFixture<DecisionesAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionesAlumnosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
