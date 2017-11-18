import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
// angular material
import { AppMaterialModule } from '../app-material.module';
// auth
import { AuthComponent } from './auth.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotAuthComponent } from './not-auth/not-auth.component';

import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent,
    LoginComponent,
    NotAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    // angular material
    AppMaterialModule,
    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  entryComponents: [
    SignupComponent,
    LoginComponent,
  ],
  providers: [AuthService],
})
export class AuthModule { }
