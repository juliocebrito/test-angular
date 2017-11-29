import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { RolesService } from './roles.service';
import { Role, Permission } from '../../models/auth-models'
import { PermissionsService } from '../permissions/permissions.service';

@Component({
  selector: 'app-roles-update',
  templateUrl: './roles-update.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesUpdateComponent implements OnInit {
  permissions: Permission[];
  loading = true;
  roleId: any = null;
  role: Role = {
    name: '',
    permissions: [],
  };

  constructor(
    public rolesService: RolesService,
    public permissionsService: PermissionsService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    this.roleId = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.rolesService.readRole(this.roleId).subscribe(role => {
      this.role = role
    })
    this.permissionsService.readPermissions().subscribe(permissions => {
      this.permissions = permissions
      this.loading = false;
    },error => {})
  }

  updateRole(roles: Role) {
    this.rolesService.updateRole(roles).then((success) => {
      this.router.navigate(['admin/roles']);
    }, (error) => {

    })
  }

}
