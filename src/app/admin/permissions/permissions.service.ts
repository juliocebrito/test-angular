import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// firebase
import * as firebase from 'firebase/app';
import { AngularFirestore,
         AngularFirestoreCollection,
         AngularFirestoreDocument } from 'angularfire2/firestore';
// models
import { Permission } from '../../models/auth-models'

@Injectable()
export class PermissionsService {
  permissionsCollection: AngularFirestoreCollection<Permission>;
  permissions: Observable<Permission[]>;

  permissionDocument: AngularFirestoreDocument<Permission>;
  permission: Observable<Permission>;

  constructor(private afs: AngularFirestore) { }

  readPermissions() {
    this.permissionsCollection = this.afs.collection<Permission>('permissions');
    return this.permissionsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Permission;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  createPermission(permission: Permission) {
    return this.permissionsCollection.add(permission)
  }

  readPermission(permissionId: string) {
    this.permissionDocument = this.afs.doc<Permission>(`permissions/${permissionId}`);
    return this.permissionDocument.snapshotChanges().map(action => {
      if (action.payload.exists) {
        const data = action.payload.data() as Permission;
        const id = action.payload.id;
        return { id, ...data}
      }
    })
  }

  updatePermission(permission: Permission) {
    this.permissionDocument = this.afs.doc<Permission>(`permissions/${permission.id}`);
    // this.permission = this.permissionDocument.valueChanges();
    return this.permissionDocument.update(permission);
  }

  deletePermission(permission: Permission) {
    this.permissionDocument = this.afs.doc<Permission>(`permissions/${permission.id}`);
    // this.permission = this.permissionDocument.valueChanges();
    return this.permissionDocument.delete();
  }

}
