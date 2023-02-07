import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpagesComponent } from './pages/loginpages/loginpages.component';
import { RegisterpagesComponent } from './pages/registerpages/registerpages.component';

const routes: Routes = [
  {path: 'loginpages',  component: LoginpagesComponent},
  {path: 'registerpages',  component: RegisterpagesComponent},
  { path: '', redirectTo: '/loginpages', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],exports: [RouterModule]
})
export class AppRoutingModule { }
