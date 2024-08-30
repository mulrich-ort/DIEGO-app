import { Routes } from '@angular/router';
import { PantallaInicioComponent } from './pantalla-inicio/pantalla-inicio.component';
import { LoginAlumnoComponent } from './login/login-alumno/login-alumno.component';
import { LoginDocenteComponent } from './login/login-docente/login-docente.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { GeneracionPartidaComponent } from './generacion-partida/generacion-partida.component';

export const routes: Routes = [
    {path:'', component: PantallaInicioComponent},
    {path:'login-alumnos',component: LoginAlumnoComponent},
    {path:'login-docente',component: LoginDocenteComponent},
    {path:'pantalla-principal',component: PantallaPrincipalComponent},
    {path:'nueva-partida',component: GeneracionPartidaComponent}
    
];
