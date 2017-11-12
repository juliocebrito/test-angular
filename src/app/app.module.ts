import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule,
} from '@angular/material/';
import { SignupComponent } from './signup/signup.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { LoginComponent } from './login/login.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupDialogComponent,
    LoginComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  entryComponents: [
    SignupDialogComponent,
    LoginDialogComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
