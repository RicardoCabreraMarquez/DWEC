import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpagesComponent } from './pages/loginpages/loginpages.component';
import { RegisterpagesComponent } from './pages/registerpages/registerpages.component';
import { IniciounoComponent } from './pages/iniciouno/iniciouno.component';

const routes: Routes = [
  {path: 'iniciouno',  component: IniciounoComponent},
  {path: 'loginpages',  component: LoginpagesComponent},
  {path: 'registerpages',  component: RegisterpagesComponent},
  { path: '', redirectTo: '/loginpages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],exports: [RouterModule]
})
export class AppRoutingModule { }
