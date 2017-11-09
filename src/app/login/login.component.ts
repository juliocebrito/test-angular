import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
} from '@angular/material';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  loginDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '430px',
    });
  }

}
