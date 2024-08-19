import { Routes } from '@angular/router';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { LoginAlumnoComponent } from './login/login-alumno/login-alumno.component';
import { LoginDocenteComponent } from './login/login-docente/login-docente.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';

export const routes: Routes = [
    {path:'', component: PantallaInicioComponent},
    {path:'login-alumnos',component: LoginAlumnoComponent},
    {path:'login-docente',component: LoginDocenteComponent},
    {path:'inicio',component: PantallaPrincipalComponent}
    
];
