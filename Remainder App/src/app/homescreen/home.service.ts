import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http/src/response';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';
import { Reminder } from 'src/app/Reminder';


@Injectable({
    providedIn: 'root'
})
export class HomeService{
    

    private curentReminder: Reminder;
    constructor(private http: HttpClient){}

    createReminder(newReminder: Reminder){
      var postUrl = 'http://localhost:8080/reminder/createreminder';
      let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 
      var body  = JSON.stringify(newReminder);
      console.log("YO" + body);
      return this.http.post(postUrl,body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(map(data => {})).subscribe(result => {});
      
    }

    getReminders(reminders: Reminder[]): Observable<Reminder[]>{
        var getUrl = 'http://localhost:8080/reminder/getreminders'
        return this.http.get<Reminder[]>(getUrl).pipe(
            tap(data => reminders = data),
            catchError(this.handleError));

    }

    saveReminder(reminder: Reminder){
    var editUrl = 'http://localhost:8080/reminder/editreminder';
      let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 
      var body  = JSON.stringify(reminder);
      console.log(body);
      return this.http.post(editUrl,body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(map(data => {})).subscribe(result => {console.log(result)});
    }

    getReminderToEdit(reminder: Reminder): Reminder{
        var getUrl = 'http://localhost:8080/reminder/getremindertoedit';
        
        let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 
      var body  = JSON.stringify(reminder);
       this.http.post(getUrl,body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(map(data => {
          reminder.id = data['id'];
          reminder.label = data['label'];
          reminder.frequencynumber = data['frequencynumber'];
          reminder.frequencytype = data['frequencytype'];
          reminder.date = data['date'];
          reminder.status = data['status'];
        })).subscribe(result => {});
        return reminder;
    
    }

    deleteReminder(reminder: Reminder){
        var editUrl = 'http://localhost:8080/reminder/deletereminder';
      let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 
      var body  = JSON.stringify(reminder);
      console.log(body);
      return this.http.post(editUrl,body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(map(data => {})).subscribe(result => {console.log(result)});
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = "";
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured ${err.error.message}`
        }else{
            errorMessage = `server returned code: ${err.status}, error message is ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);

    }

}