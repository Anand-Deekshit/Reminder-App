import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-page-component';
import { LoginService } from 'src/app/login-page/login.services';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: []
})
export class LoginPageModule { }
