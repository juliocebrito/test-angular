import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { PermissionsService } from './permissions.service';
import { Permission } from '../../models/auth-models'

@Component({
  selector: 'app-permissions-update',
  templateUrl: './permissions-update.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsUpdateComponent implements OnInit {
  permissionId: any = null;
  permission: Permission = {
    name: '',
    model: '',
  };

  constructor(
    public permissionsService: PermissionsService,
    public router: Router,
    private route: ActivatedRoute,
  ) {
      this.permissionId = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.permissionsService.readPermission(this.permissionId).subscribe(permission => {
      this.permission = permission
    })
  }

  updatePermission(permission: Permission) {
    this.permissionsService.updatePermission(permission).then((success) => {
      this.router.navigate(['admin/permissions']);
    }, (error) => {

    })
  }

}
