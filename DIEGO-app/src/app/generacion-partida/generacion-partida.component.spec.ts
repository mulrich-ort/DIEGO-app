import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneracionPartidaComponent } from './generacion-partida.component';

describe('GeneracionPartidaComponent', () => {
  let component: GeneracionPartidaComponent;
  let fixture: ComponentFixture<GeneracionPartidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneracionPartidaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneracionPartidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
