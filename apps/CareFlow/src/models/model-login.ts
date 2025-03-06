import { Token } from './model-token';
import { currentUser } from './model-user';

export type LoginResponse = {
  currentUser: currentUser;
  jwtResponse: Token;
};

export type LoginCredentials = {
  loginId: string;
  password: string;
  accountType: string;
};
