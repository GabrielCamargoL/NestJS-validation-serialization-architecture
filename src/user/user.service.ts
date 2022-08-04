import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  private users: Array<User> = [{
    id: 1,
    username: 'gabriel',
    email: 'gabriel.cleite@outlook.com',
    password: '1234',
    fullname: 'Gabriel Camargo',
    enterDate: new Date()
  }];

  public create(user: User): User {
    this.users.push(user);

    return user;
  }

  public findByUsername(username: string): User {
    return this.users.find(user => user.username === username);
  }
}