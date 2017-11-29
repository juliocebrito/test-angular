import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// apollo
import { Apollo } from 'apollo-angular';
import { queryEstaciones } from '../fragments/queries';

@Injectable()
export class EstacionesService {

  constructor(private apollo: Apollo) { }

  readEstaciones() {
    return this.apollo
      .watchQuery<any>({ query: queryEstaciones })
      .valueChanges;
  }

}
