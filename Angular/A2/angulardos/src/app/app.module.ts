import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginpagesComponent } from './pages/loginpages/loginpages.component';
import { RegisterpagesComponent } from './pages/registerpages/registerpages.component';
import { NavbarunoComponent } from './components/navbaruno/navbaruno.component';
import { IniciounoComponent } from './pages/iniciouno/iniciouno.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginpagesComponent,
    RegisterpagesComponent,
    NavbarunoComponent,
    IniciounoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
