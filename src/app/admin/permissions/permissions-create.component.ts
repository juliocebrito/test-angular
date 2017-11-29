import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { PermissionsService } from './permissions.service';
import { Permission } from '../../models/auth-models'

@Component({
  selector: 'app-permissions-create',
  templateUrl: './permissions-create.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsCreateComponent implements OnInit {
  permission: Permission = {
    name: '',
    model: '',
  };

  constructor(
    public permissionsService: PermissionsService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  createPermission() {
    this.permissionsService.createPermission(this.permission).then((success) => {
      this.permission.name = '';
      this.permission.model = '';
      this.router.navigate(['admin/permissions']);
    }, (error) => {
      this.permission.name = '';
      this.permission.model = '';
    })
  }

}
