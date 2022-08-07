import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

  constructor(private userService: UserService) { }

  @Get(':username')
  public findByUsername(@Param('username') username: string) {
    const userFound = this.userService.findByUsername(username);
    if (!userFound) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not Found.'
      });
    }
    return userFound;
  }

  @Post()
  public create(@Body() user: User): NestResponse {
    const userCreated = this.userService.create(user);

    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({
        'Location': `/users/${userCreated.username}`
      })
      .withBody(userCreated)
      .build();
  }
}