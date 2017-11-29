import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import { Profile } from '../../models/auth-models'

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
    userId: '',
    firstName: '',
    lastName: '',
    fullName: '',
    phoneNumber: '',
    roles: [],
  };

  constructor(public authService: AuthService,
              public router: Router,) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password).then((success) => {
      this.currentUser = firebase.auth().currentUser;
      this.currentUser.updateProfile({
        displayName: this.profile.firstName+' '+this.profile.lastName,
      })
      .then((success) => {
        this.profile.userId = this.currentUser.uid;
        this.profile.fullName = this.profile.firstName+' '+this.profile.lastName;
        this.authService.addProfile(this.profile).then((success) => {
          this.email = '';
          this.password = '';
          this.currentUser = '';
          this.profile.userId = '';
          this.profile.firstName = '';
          this.profile.lastName = '';
          this.profile.fullName = '';
          this.profile.phoneNumber = '';
          this.router.navigate(['']);
        }, (error) => {})

      })

    }, (error) => {
      console.log(error)
      this.email = this.password = '';
    });
  }

}
