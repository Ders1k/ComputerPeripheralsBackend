import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  getUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async createUser(payload: CreateUserDto) {
    const password = await bcrypt.hash(payload.password, 10);
    const newUser = await this.prisma.user.create({
      data: {
        name: payload.name,
        surname: payload.surname,
        password: password,
        email: payload.email,
      },
    });
    return newUser;
  }

  updateUser(id: number, payload: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: payload.name,
        surname: payload.surname,
        password: payload.password,
        email: payload.email,
      },
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
