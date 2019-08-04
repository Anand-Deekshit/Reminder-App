import { Injectable } from '@angular/core';
import { User } from 'src/app/User';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http/src/response';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class LoginService{
    private userUrl = 'http://localhost:8080/reminder/users/';
    constructor(private http: HttpClient){}

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.userUrl).pipe(
            tap(data => console.log("ALL : " + JSON.stringify(data))),
            catchError(this.handleError));

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

    getUser(email: String): Observable<User>{
        return this.http.get<User>(this.userUrl);
    }

    createUser(newUser: User){
      var postUrl = 'http://localhost:8080/charity/signup/';
      let headers      = new Headers({ 'Content-Type': 'application/json' }); 
      let options       = new RequestOptions({ headers: headers }); 
      //var body = 'firstname=' + newUser.firstName + '&lastname=' + newUser.lastName + '&gender=' + newUser.gender + '&email=' + newUser.email + '&password=' + newUser.password;
      var body  = JSON.stringify(newUser);
      console.log(body);
      return this.http.post(postUrl,body,{headers: new HttpHeaders({'Content-Type': 'application/json'})}).pipe(map(data => {})).subscribe(result => {console.log(result)});
      
    }
}