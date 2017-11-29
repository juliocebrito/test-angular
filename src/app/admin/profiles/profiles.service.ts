import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import * as firebase from 'firebase/app';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
// models
import { Profile } from '../../models/auth-models'

@Injectable()
export class ProfilesService {
  profilesCollection: AngularFirestoreCollection<Profile>
  profileDocument: AngularFirestoreDocument<Profile>

  profiles: Observable<Profile[]>;
  profile: Observable<Profile>;

  constructor(private afs: AngularFirestore) { }

  readProfiles() {
    this.profilesCollection = this.afs.collection<Profile>('profiles');
    // this.profiles = this.profilesCollection.valueChanges();
    return this.profiles = this.profilesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Profile;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  readProfile(profileId: string) {
    this.profileDocument = this.afs.doc<Profile>(`profiles/${profileId}`);
    return this.profileDocument.snapshotChanges().map(action => {
      if (action.payload.exists) {
        const data = action.payload.data() as Profile;
        const id = action.payload.id;
        return { id, ...data}
      }
    })
  }

  updateProfile(profile: Profile) {
    this.profileDocument = this.afs.doc<Profile>(`profiles/${profile.id}`);
    return this.profileDocument.update(profile);
  }

}
