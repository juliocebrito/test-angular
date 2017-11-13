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

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo  } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


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

    HttpClientModule,
    ApolloModule,
    HttpLinkModule,

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
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'https://test-django-flex.appspot.com/graphql' }),
      cache: new InMemoryCache()
    });
  }
}
