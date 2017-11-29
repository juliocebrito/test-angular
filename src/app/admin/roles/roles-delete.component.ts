import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { RolesService } from './roles.service';
import { Role, Permission } from '../../models/auth-models';

@Component({
  selector: 'app-roles-delete',
  templateUrl: './roles-delete.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesDeleteComponent implements OnInit {
  roleId: any = null;
  role: Role = {
    name: '',
    permissions: [],
  };

  constructor(
    public rolesService: RolesService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
    this.roleId = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.rolesService.readRole(this.roleId).subscribe(role => {
      this.role = role
    })
  }

  deleteRole(role: Role) {
    this.rolesService.deleteRole(role).then((success) => {
      this.router.navigate(['admin/roles']);
    }, (error) => {
    })
  }

}
