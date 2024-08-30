import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ComentariosEconomicosComponent } from './comentarios-economicos/comentarios-economicos.component';
import { InformeIndustrialComponent } from './informe-industrial/informe-industrial.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pantalla-principal',
  standalone: true,
  imports: [HeaderComponent,ComentariosEconomicosComponent,InformeIndustrialComponent,MatTabsModule,CommonModule],
  templateUrl: './pantalla-principal.component.html',
  styleUrl: './pantalla-principal.component.css'
})
export class PantallaPrincipalComponent {

}
