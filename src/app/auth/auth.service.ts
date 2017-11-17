import { Injectable } from '@angular/core';
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  profiles: Observable<any[]>;

  constructor(private af: AngularFireAuth,
              private dbstore: AngularFirestore,) {
    this.user = af.authState;
  }

  signup(email: string, password: string) {
    return this.af
      .auth
      .createUserWithEmailAndPassword(email, password)
  }

  login(email: string, password: string) {
    return this.af
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.af
      .auth
      .signOut();
  }

}
