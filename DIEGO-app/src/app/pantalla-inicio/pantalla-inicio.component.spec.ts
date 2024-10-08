import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaInicioComponent } from './pantalla-inicio.component';

describe('PantallaInicioComponent', () => {
  let component: PantallaInicioComponent;
  let fixture: ComponentFixture<PantallaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
