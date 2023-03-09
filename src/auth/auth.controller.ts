import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signin() {}

  @Post('/signup')
  signup() {}

  @Post('/logout')
  logout() {}
}
