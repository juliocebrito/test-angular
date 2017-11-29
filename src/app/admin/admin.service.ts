import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import * as firebase from 'firebase/app';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class AdminService {

  constructor(private afs: AngularFirestore) {

  }

}
