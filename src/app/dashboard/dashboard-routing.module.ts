import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes  } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { EstacionesComponent } from './estaciones/estaciones.component';
import { CategoriesComponent } from './categories/categories.component';
import { SubcategoriesComponent } from './subcategories/subcategories.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: 'estaciones', component: EstacionesComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'subcategories', component: SubcategoriesComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'services', component: ServicesComponent },
    ]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
