import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// angular material
import { AppMaterialModule } from '../app-material.module';

import { AdminRoutingModule } from './/admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolesCreateComponent } from './roles/roles-create.component';
import { RolesUpdateComponent } from './roles/roles-update.component';
import { RolesDeleteComponent } from './roles/roles-delete.component';
import { PermissionsDeleteComponent } from './permissions/permissions-delete.component';
import { PermissionsUpdateComponent } from './permissions/permissions-update.component';
import { PermissionsCreateComponent } from './permissions/permissions-create.component';
import { ProfilesCreateComponent } from './profiles/profiles-create.component';
import { ProfilesUpdateComponent } from './profiles/profiles-update.component';
import { ProfilesDeleteComponent } from './profiles/profiles-delete.component';

import { AdminService } from './admin.service';
import { ProfilesService } from './profiles/profiles.service';
import { RolesService } from './roles/roles.service';
import { PermissionsService } from './permissions/permissions.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // angular material
    AppMaterialModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminComponent,
    ProfilesComponent,
    RolesComponent,
    PermissionsComponent,
    RolesCreateComponent,
    RolesUpdateComponent,
    RolesDeleteComponent,
    PermissionsDeleteComponent,
    PermissionsUpdateComponent,
    PermissionsCreateComponent,
    ProfilesCreateComponent,
    ProfilesUpdateComponent,
    ProfilesDeleteComponent,
  ],
  providers: [
    AdminService,
    ProfilesService,
    RolesService,
    PermissionsService
  ]
})
export class AdminModule { }
