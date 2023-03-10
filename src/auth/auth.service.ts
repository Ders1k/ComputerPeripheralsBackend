import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';
import { signInDto, signUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  signIn(payload: signInDto) {
    this.userService.getUserByEmail(payload.email);
    const token = this.generateToken(payload.email);
    return token;
  }

  signUp(payload: signUpDto) {
    const token = this.generateToken(payload.email);
    return token;
  }

  async isPasswordMatch(existPassword: string, rawPassword: string) {
    const isMatch = await bcrypt.compare(rawPassword, existPassword);
    return isMatch;
  }

  generateToken(email: string) {
    const token = this.jwtService.sign({ email });
    return token;
  }
}
