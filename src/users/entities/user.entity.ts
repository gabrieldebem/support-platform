export class User {
  id: number;
  username: string;
  password: string;
  created_at: Date;
  updated_at?: Date;

  constructor(
    id: number,
    username: string,
    password: string,
    created_at: Date,
    updated_at?: Date,
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
