import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
// apollo
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo  } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatListModule,
} from '@angular/material/';
// dashboard
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    // apollo
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    // angular material
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
})
export class DashboardModule {
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
