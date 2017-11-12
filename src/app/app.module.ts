import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule,
} from '@angular/material/';

import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { DashboardModule} from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,

    DashboardModule,
  ],
  entryComponents: [
    SignupComponent,
    LoginComponent,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
