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
import { AppMaterialModule } from '../app-material.module';
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
    AppMaterialModule,
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
