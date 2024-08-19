import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeIndustrialComponent } from './informe-industrial.component';

describe('InformeIndustrialComponent', () => {
  let component: InformeIndustrialComponent;
  let fixture: ComponentFixture<InformeIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformeIndustrialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformeIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
