import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { RolesService } from './roles.service';
import { Role, Permission } from '../../models/auth-models'
import { PermissionsService } from '../permissions/permissions.service'

@Component({
  selector: 'app-roles-create',
  templateUrl: './roles-create.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesCreateComponent implements OnInit {
  permissions: Permission[];
  loading = true;
  role: Role = {
    name: '',
    permissions: [],
  };

  constructor(
    public rolesService: RolesService,
    public permissionsService: PermissionsService,
  ) { }

  ngOnInit() {
    this.permissionsService.readPermissions().subscribe(permissions => {
      this.permissions = permissions
      this.loading = false;
    },error => {})
  }

  createRole() {
    this.rolesService.createRole(this.role).then((success) => {
      this.role.name = '';
      this.role.permissions = [];
    }, (error) => {
      this.role.name = '';
      this.role.permissions = [];
    })
  }

}
