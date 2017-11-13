import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const categoriesAll = gql`
query Categories {
categories {
  id
  name
  typeCategory
  subcategories {
    id
    name
  }
  products {
    id
    name
  }
  services {
    id
    name
  }
}
}
`;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loading = true;
  data: any;

  constructor(public authService: AuthService,
              public router: Router,
              private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: categoriesAll
    })
      .valueChanges
      .subscribe(({data, loading}) => {
        this.data = data;
        this.loading = loading;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
