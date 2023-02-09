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
import { NavbardosComponent } from './components/navbardos/navbardos.component';
import { IniciodosComponent } from './pages/iniciodos/iniciodos.component';
import { RestpassComponent } from './components/restpass/restpass.component';
import { RestpasspageComponent } from './pages/restpasspage/restpasspage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginpagesComponent,
    RegisterpagesComponent,
    NavbarunoComponent,
    IniciounoComponent,
    NavbardosComponent,
    IniciodosComponent,
    RestpassComponent,
    RestpasspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
