import { Component, OnInit } from '@angular/core';
//import { LoginService } from 'src/app/login-page/login.services';
import { Router } from '@angular/router';
import { User } from '../User'

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router) { }


  newUser: User;
  ngOnInit() {
    this.newUser = new User();
  }

  signupUser() {
    this.newUser.userid = 1;
    //this.loginService.createUser(this.newUser);
  }

}
