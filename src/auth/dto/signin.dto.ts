import { IsEmail, IsNotEmpty } from 'class-validator';

export class signInDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
