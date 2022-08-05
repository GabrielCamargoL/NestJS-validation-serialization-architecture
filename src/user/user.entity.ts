import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUniqueUsername } from "./is-unique-username.validator";

export class User {

  id: number;


  @IsUniqueUsername({
    message: 'username must be unique'
  })
  @IsNotEmpty({
    message: 'username is required'
  })
  @IsString()
  username: string;


  @IsEmail({}, {
    message: 'email must be a valid email address.'
  })
  email: string;


  @Exclude({
    toPlainOnly: true
  })
  @IsNotEmpty({
    message: 'password is required'
  })
  password: string;


  @IsNotEmpty({
    message: 'fullname is required'
  })
  @IsString()
  fullname: string;

  joinDate: Date;
}