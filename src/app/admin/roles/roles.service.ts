import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import * as firebase from 'firebase/app';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
// models
import { Role } from '../../models/auth-models'

@Injectable()
export class RolesService {
  rolesCollection: AngularFirestoreCollection<Role>;
  roles: Observable<Role[]>;

  roleDocument: AngularFirestoreDocument<Role>;
  role: Observable<Role>;

  constructor(private afs: AngularFirestore) { }

  readRoles() {
    this.rolesCollection = this.afs.collection<Role>('roles');
    return this.rolesCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Role;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createRole(role: Role) {
    return this.rolesCollection.add(role)
  }

  readRole(roleId: string) {
    this.roleDocument = this.afs.doc<Role>(`roles/${roleId}`);
    return this.roleDocument.snapshotChanges().map(action => {
      if (action.payload.exists) {
        const data = action.payload.data() as Role;
        const id = action.payload.id;
        return { id, ...data}
      }
    })
  }

  updateRole(role: Role) {
    this.roleDocument = this.afs.doc<Role>(`roles/${role.id}`);
    return this.roleDocument.update(role);
  }

  deleteRole(role: Role) {
    this.roleDocument = this.afs.doc<Role>(`roles/${role.id}`);
    return this.roleDocument.delete();
  }

}
