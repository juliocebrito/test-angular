import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
} from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
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
