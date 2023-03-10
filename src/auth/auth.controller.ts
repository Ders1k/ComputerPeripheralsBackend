import { Body, Controller, Post } from '@nestjs/common';
import {
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common/exceptions/';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { signInDto, signUpDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/signin')
  async signIn(@Body() payload: signInDto) {
    const user = await this.userService.getUserByEmail(payload.email);

    if (!user) {
      throw new UnauthorizedException('User does not exist');
    }

    const isPasswordMatchFlag = await this.authService.isPasswordMatch(
      user.password,
      payload.password,
    );

    if (!isPasswordMatchFlag) {
      throw new UnauthorizedException('Incorrect email or password');
    }

    return this.authService.signIn(payload);
  }

  @Post('/signup')
  async signUp(@Body() payload: signUpDto) {
    const candidate = this.userService.getUserByEmail(payload.email);
    if (candidate) {
      throw new ConflictException('User already exist');
    }
    this.userService.createUser(payload);
    return this.authService.signUp(payload);
  }
}
