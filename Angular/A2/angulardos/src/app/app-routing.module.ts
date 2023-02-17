import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpagesComponent } from './pages/loginpages/loginpages.component';
import { RegisterpagesComponent } from './pages/registerpages/registerpages.component';
import { IniciounoComponent } from './pages/iniciouno/iniciouno.component';
import { IniciodosComponent } from './pages/iniciodos/iniciodos.component';
import { RestpasspageComponent } from './pages/restpasspage/restpasspage.component';

const routes: Routes = [
  {path: 'iniciouno',  component: IniciounoComponent},
  {path: 'loginpages',  component: LoginpagesComponent},
  {path: 'registerpages',  component: RegisterpagesComponent},
  {path: 'iniciodos',  component: IniciodosComponent},
  {path: 'restpasspages', component: RestpasspageComponent},
  { path: '', redirectTo: '/iniciouno', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],exports: [RouterModule]
})
export class AppRoutingModule { }
