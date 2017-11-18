import { Injectable } from '@angular/core';
// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

export interface Profile {
  user: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  role: string;
}

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private profilesCollection: AngularFirestoreCollection<Profile>
  profiles: Observable<Profile[]>;

  constructor(private af: AngularFireAuth,
              private afs: AngularFirestore,) {
    this.user = af.authState;
    this.profilesCollection = afs.collection<Profile>('profiles');
    this.profiles = this.profilesCollection.valueChanges();
  }

  signup(email: string, password: string) {
    return this.af
      .auth
      .createUserWithEmailAndPassword(email, password)
  }

  addProfile(profile: Profile) {
    return this.profilesCollection.add(profile);
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
