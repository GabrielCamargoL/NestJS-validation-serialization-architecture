import { Module } from "@nestjs/common";
import { IsUniqueUsernameConstraint } from "./is-unique-username.validator";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    IsUniqueUsernameConstraint,
  ],
})
export class UserModule { }