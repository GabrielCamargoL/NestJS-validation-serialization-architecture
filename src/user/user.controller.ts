import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(private userService: UserService) { }

  @Get(':username')
  public findByUsername(@Param('username') username: string) {
    const userFound = this.userService.findByUsername(username);
    return userFound;
  }

  @Post()
  public create(@Body() user: User): User {
    const userCreated = this.userService.create(user);

    return userCreated;
  }
}