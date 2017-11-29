import { Component, OnInit } from '@angular/core';
import { RolesService } from './roles.service';
import { Role } from '../../models/auth-models'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: Role[];
  loading = true;

  constructor(public rolesService: RolesService,) { }

  ngOnInit() {
    this.rolesService.readRoles().subscribe(roles => {
      this.roles = roles;
      this.loading = false;
    },error => {})
  }

}
