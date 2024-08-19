import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosEconomicosComponent } from './comentarios-economicos.component';

describe('ComentariosEconomicosComponent', () => {
  let component: ComentariosEconomicosComponent;
  let fixture: ComponentFixture<ComentariosEconomicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentariosEconomicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosEconomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
