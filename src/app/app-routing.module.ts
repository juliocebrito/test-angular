import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { NotAuthComponent } from './auth/not-auth/not-auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { AdminComponent } from './admin/admin.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: '',
    loadChildren: './auth/auth.module#AuthModule' },
  { path: 'not-auth', component: NotAuthComponent },
  { path: 'admin',
    loadChildren: './admin/admin.module#AdminModule' },
  { path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule' },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
