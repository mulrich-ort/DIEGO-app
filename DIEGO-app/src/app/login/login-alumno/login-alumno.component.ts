import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login-alumno',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,MatFormFieldModule,MatInputModule],
  templateUrl: './login-alumno.component.html',
  styleUrl: './login-alumno.component.css'
})
export class LoginAlumnoComponent {

}
