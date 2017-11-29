export interface Profile {
  id?: string;
  userId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  roles: string[];
}
// export interface ProfileId extends Profile { id: string; }

export interface Role {
  id?: string;
  name: string;
  permissions: string[];
}
// export interface RoleId extends Role { id: string; }

export interface Permission {
  id?: string;
  name: string;
  model: string;
}
// export interface PermissionId extends Permission { id: string; }
