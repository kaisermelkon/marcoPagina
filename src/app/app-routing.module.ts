import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminArticulosComponent } from './admin-articulos/admin-articulos.component';

const routes: Routes = [
{ 
  path: 'home', 
  component: HomeComponent 
},
{ 
  path: 'articulos', 
  component: AdminArticulosComponent,
  canActivate: [AuthGuard] 
},
{ 
  path: 'articulos', 
  component: ArticulosComponent 
},
{
  path: 'portafolio',
  component: PortafolioComponent
},
{
  path: 'servicios',
  component: ServicesComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
