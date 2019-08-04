import { Component } from '@angular/core';
//import { USERS } from '../mock-data/users';
import { User } from '../User'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import {LoginService} from './login.services';



@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private loginService: LoginService) {
  }

  loggedInUser: User;
  userDetails: User;
  users: User[] = [];
  errorMessage: String;
  ngOnInit() {
    this.loggedInUser = new User();
    
  }
  loginUser() {
    this.loginService.getUsers().subscribe(
      users => {
        this.users = users;
        this.userDetails = this.users.find(user => user.email == this.loggedInUser.email);
        if (this.userDetails == null) {
          alert("User id doesnt exist");
        }
        else if(this.loggedInUser.password == this.userDetails.password ){
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('user', JSON.stringify(this.userDetails));
          this.router.navigate(['/homescreen']);
        }
        
        else{
          this.router.navigate(['']);
          this.loggedInUser.email = "";
          this.loggedInUser.password = "";
          alert("Incorrect Credentials");
        }
        },error => this.errorMessage = <any>error);

      }

  }
