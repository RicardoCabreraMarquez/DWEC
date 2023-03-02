import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/inicioPage', pathMatch: 'full' },
  { path: 'inicioPage', component: InicioPageComponent}

    ];


@NgModule({

  imports: [RouterModule.forRoot(routes), CommonModule] ,
  exports: [RouterModule]

})
export class AppRoutingModule {

}

