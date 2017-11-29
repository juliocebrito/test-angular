import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesUpdateComponent } from './profiles/profiles-update.component';
import { RolesComponent } from './roles/roles.component';
import { RolesCreateComponent } from './roles/roles-create.component';
import { RolesUpdateComponent } from './roles/roles-update.component';
import { RolesDeleteComponent } from './roles/roles-delete.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { PermissionsCreateComponent } from './permissions/permissions-create.component';
import { PermissionsUpdateComponent } from './permissions/permissions-update.component';
import { PermissionsDeleteComponent } from './permissions/permissions-delete.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children: [
      { path: 'profiles', component: ProfilesComponent },
      { path: 'profiles-update/:id', component: ProfilesUpdateComponent },
      // { path: 'roles', component: RolesComponent,
      //   children: [
      //     { path: 'roles-create', component: RolesCreateComponent },
      //     { path: 'roles-update', component: RolesUpdateComponent },
      //     { path: 'roles-delete', component: RolesDeleteComponent },
      //   ]
      // },
      { path: 'roles', component: RolesComponent },
      { path: 'roles-create', component: RolesCreateComponent },
      { path: 'roles-update/:id', component: RolesUpdateComponent },
      { path: 'roles-delete/:id', component: RolesDeleteComponent },
      // { path: 'permissions', component: PermissionsComponent,
      //   children: [
      //     { path: 'permissions-create', component: PermissionsCreateComponent },
      //     { path: 'permissions-update', component: PermissionsUpdateComponent },
      //     { path: 'permissions-delete', component: PermissionsDeleteComponent },
      //   ]
      // },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'permissions-create', component: PermissionsCreateComponent },
      { path: 'permissions-update/:id', component: PermissionsUpdateComponent },
      { path: 'permissions-delete/:id', component: PermissionsDeleteComponent },
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
export class AdminRoutingModule { }
