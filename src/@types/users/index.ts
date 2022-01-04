export interface IUser {
  username: string;
  password: string;
}

export interface IUserDoc extends IUser {
  user_id: string;
  create_at: string;
  updated_at: string;
  username: string;
  password: string;
}
