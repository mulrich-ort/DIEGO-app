import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login-docente',
  standalone: true,
  imports: [RouterLink,MatFormFieldModule,MatInputModule],
  templateUrl: './login-docente.component.html',
  styleUrl: './login-docente.component.css'
})
export class LoginDocenteComponent {

}
