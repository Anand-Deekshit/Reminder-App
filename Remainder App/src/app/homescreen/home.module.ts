import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home.component';
import {ModalComponent} from '../homescreen/modal-window/modal-window.component';
import { ModalService } from 'src/app/homescreen/modal-window/modal-window.services';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import { HomeService } from 'src/app/homescreen/home.service';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [HomeScreenComponent, ModalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule
  //  NgbModule
  ],
  providers: [ModalService, HomeService]
})
export class HomeScreenModule { }