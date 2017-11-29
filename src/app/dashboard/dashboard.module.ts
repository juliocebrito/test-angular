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
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

import { DashboardService } from './dashboard.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { EstacionesService } from './estaciones/estaciones.service';

@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CategoriesComponent,
    SubcategoriesComponent,
    ProductsComponent,
    ServicesComponent,
    SidenavComponent,
    EstacionesComponent,
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
  providers: [DashboardService, EstacionesService],
})
export class DashboardModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      // link: httpLink.create({ uri: 'https://test-django-flex.appspot.com/graphql' }),
      link: httpLink.create({ uri: 'https://smu-ofertas-api.appspot.com/graphql' }),
      cache: new InMemoryCache()
    });
  }
}
