import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
} from '@angular/material';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import { Profile } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  currentUser:any;
  profile: Profile = {
    user: '',
    firstName: '',
    lastName: '',
    fullName: '',
    phoneNumber: '',
    role: '',
  };



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
        displayName: this.profile.firstName+' '+this.profile.lastName,
      })
      .then((success) => {
        console.log(success)
        this.profile.user = this.currentUser.uid;
        this.profile.fullName = this.profile.firstName+' '+this.profile.lastName;
        this.authService.addProfile(this.profile);
        this.email = '';
        this.password = '';
        this.currentUser = '';
        this.profile.user = '';
        this.profile.firstName = '';
        this.profile.lastName = '';
        this.profile.fullName = '';
        this.profile.phoneNumber = '';
        this.profile.role = '';
        this.router.navigate(['']);
      })

    }, (error) => {
      console.log(error)
      this.email = this.password = '';
    });
  }

}
