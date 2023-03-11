import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  surname?: string;

  @IsEmail()
  @IsOptional()
  @IsNotEmpty()
  email?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsNotEmpty()
  @IsOptional()
  @IsEnum(Role)
  role?: Role;
}
