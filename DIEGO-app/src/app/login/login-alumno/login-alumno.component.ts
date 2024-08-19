import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-alumno',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './login-alumno.component.html',
  styleUrl: './login-alumno.component.css'
})
export class LoginAlumnoComponent {

}
