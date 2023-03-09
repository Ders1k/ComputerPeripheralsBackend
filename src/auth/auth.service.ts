import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    prisma: PrismaService,
  ) {}

  signin(payload) {}

  signup() {}

  logout() {}
}
