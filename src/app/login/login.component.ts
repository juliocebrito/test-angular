import { Component, OnInit } from '@angular/core';
import {
  MatDialogRef,
} from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              public authService: AuthService,
              public router: Router,) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['dashboard']);
      this.email = this.password = '';
    }, error => {
      this.email = this.password = '';
    });
  }

}
