import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reminder } from 'src/app/Reminder';
import {ModalService} from './modal-window/modal-window.services';
import { Timestamp } from 'rxjs';
import {Time} from '@angular/common';
import {formatDate } from '@angular/common';
import { HomeService } from 'src/app/homescreen/home.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeScreenComponent implements OnInit {

  reminder: Reminder;
  reminders: Reminder[];
  reminderToEdit: Reminder;
  value:Time;

  constructor(private router: Router, private modalService: ModalService,private homeService: HomeService) { 
    this.reminder = new Reminder();
    this.reminderToEdit = new Reminder();
  }

  ngOnInit() {
    this.reminders = [];
    this.homeService.getReminders(this.reminders).subscribe(reminders => this.reminders = reminders);
  }

  time = {hour: 13, minute: 30};
  meridian = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  openAddModal(){
    this.modalService.customModalOpen("custom-modal-1");
  }

  saveReminder(){
    let reminderDate = new Date(this.reminderToEdit.date).getTime();
    let currentOffset = new Date(this.reminderToEdit.date).getTimezoneOffset();
    this.reminderToEdit.date = new Date(reminderDate + (330)*60000).toISOString();
    this.homeService.saveReminder(this.reminderToEdit);
    this.modalService.modalClose();
    this.router.navigate(['/homescreen']);
  }

  setReminder(){
    let reminderDate = new Date(this.reminder.date).getTime();
    let currentOffset = new Date(this.reminder.date).getTimezoneOffset();
    this.reminder.date = new Date(reminderDate + (330)*60000).toISOString();
    this.homeService.createReminder(this.reminder);
    this.modalService.modalClose();
    this.router.navigate(['/homescreen']);
  }

  editReminder(reminderId: String){
    this.reminderToEdit.id = reminderId;
    this.reminderToEdit = this.homeService.getReminderToEdit(this.reminderToEdit);
    
    this.modalService.customModalOpen("custom-modal-2");
  }

  deleteReminder(reminder: Reminder){
    this.homeService.deleteReminder(reminder);
    this.router.navigate(['/homescreen']);
  }

  enableReminder(){}

  disableReminder(){}

  closeModal(){
    this.modalService.modalClose();
  }
}