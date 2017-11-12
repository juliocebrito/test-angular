import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
} from '@angular/material';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  signupDialog() {
    let dialogRef = this.dialog.open(SignupDialogComponent, {
      width: '450px',
    });
  }

}
