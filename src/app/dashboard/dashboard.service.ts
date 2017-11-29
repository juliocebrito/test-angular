import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// apollo
import { Apollo } from 'apollo-angular';
import { queryCategories } from './fragments/queries';

@Injectable()
export class DashboardService {
  categories: Observable<any>;

  constructor(private apollo: Apollo) {
    this.categories = this.apollo
      .watchQuery({ query: queryCategories })
      .valueChanges;
  }

  getCategories() {
    return this.categories
  }

}
