export class Client {
  id: number;
  name: string;
  email: string;
  userId: number;
  createdAt: Date;
  updatedAt?: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    userId: number,
    createdAt: Date,
    updatedAt?: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
