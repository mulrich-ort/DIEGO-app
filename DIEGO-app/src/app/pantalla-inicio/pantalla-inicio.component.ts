import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pantalla-inicio',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './pantalla-inicio.component.html',
  styleUrl: './pantalla-inicio.component.css'
})
export class PantallaInicioComponent {

}
