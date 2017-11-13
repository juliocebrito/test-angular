import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  title = 'Welcome to Test Angular Flex';
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  loginDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '430px',
    });
  }

  signupDialog() {
    let dialogRef = this.dialog.open(SignupComponent, {
      width: '450px',
    });
  }

}
