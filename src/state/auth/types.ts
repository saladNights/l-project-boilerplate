export type State = {
  isLoggedIn?: boolean;
  accessToken: string | null;
  userData: object | null;
  isAdmin?: boolean;
};

export type UserCredentials = {
  userName: string;
  password: string;
};
