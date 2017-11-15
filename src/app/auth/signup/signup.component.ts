import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
} from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  currentUser:any;

  constructor(public dialogRef: MatDialogRef<SignupComponent>,
              public authService: AuthService,
              public router: Router,) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password).then((success) => {
      console.log(success)
      this.currentUser = firebase.auth().currentUser;
      this.currentUser.updateProfile({
        displayName: 'Julio Brito'
      })
      this.router.navigate(['']);
      this.email = this.password = '';
    }, (error) => {
      console.log(error)
      this.email = this.password = '';
    });
  }

}
