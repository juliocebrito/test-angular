import { Component, OnInit } from '@angular/core';
import { PermissionsService } from './permissions.service';
import { Permission } from '../../models/auth-models'

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {
  permissions: Permission[];
  loading = true;

  constructor(public permissionsService: PermissionsService) { }

  ngOnInit() {
    this.permissionsService.readPermissions().subscribe(permissions => {
      this.permissions = permissions
      this.loading = false;
    },error => {})
  }

}
