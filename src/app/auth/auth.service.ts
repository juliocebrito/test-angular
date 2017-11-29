import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
// models
import { Profile} from '../models/auth-models'

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private profilesCollection: AngularFirestoreCollection<Profile>
  profiles: Observable<Profile[]>;

  constructor(private afa: AngularFireAuth,
              private afs: AngularFirestore,) {
    this.user = afa.authState;
    this.profilesCollection = afs.collection<Profile>('profiles');
    this.profiles = this.profilesCollection.valueChanges();
  }

  signup(email: string, password: string) {
    return this.afa
      .auth
      .createUserWithEmailAndPassword(email, password)
  }

  addProfile(profile: Profile) {
    return this.profilesCollection.add(profile)
    // .then((docRef) => {
    //     console.log('New document with id: ', docRef.id);
    // })
    // .catch((error) => {
    //     console.error('Error adding document: ', error);
    // });
  }

  login(email: string, password: string) {
    return this.afa
      .auth
      .signInWithEmailAndPassword(email, password)
  }

  logout() {
    this.afa
      .auth
      .signOut();
  }

}
