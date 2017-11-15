import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const categories = gql`
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

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<any>({
      query: categories
    })
      .valueChanges
      .subscribe(({data, loading}) => {
        this.data = data;
        this.loading = loading;
      });
  }

}
