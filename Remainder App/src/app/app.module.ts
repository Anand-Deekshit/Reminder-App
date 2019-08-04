import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {LoginPageModule} from './login-page/login-page.module';
import {SignupPageComponent} from './signup-page/signup-page.component';
import { LoginComponent } from 'src/app/login-page/login-page-component';
import { LoginService } from 'src/app/login-page/login.services';
import {HttpClientModule} from '@angular/common/http';
import {HomeScreenModule} from '../app/homescreen/home.module';


@NgModule({
    declarations: [
        AppComponent,
        SignupPageComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        HomeScreenModule
      ],
      providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }