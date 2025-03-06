export type UserType = 'ADMIN' | 'WARD' | 'STAFF';

export type User = {
  id: number;
  name: string;
  type: UserType;
  wardId?: number;
};

export type currentUser = {
  accountId: number;
  accountStatus: 'ACTIVE' | 'INACTIVE';
  firstLogin: boolean | null;
  name: string;
  passwordChangeRequested: boolean;
  requestStatus: boolean | null;
  role: UserType;
};
