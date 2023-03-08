import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async signupUser(payload) {
    return
  }

  async signinUser(payload) {
    return
  }

  async updateUserRole(id: number, payload) {
    return
  }
}
