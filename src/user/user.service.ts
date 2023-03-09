import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserById(id: number) {
    const userById = await this.prisma.user.findUnique({ where: { id } });
    return userById;
  }

  async getUserByEmail(email: string) {
    const userByEmail = await this.prisma.user.findUnique({ where: { email } });
    return userByEmail;
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

  async updateUser(id: number, payload: Partial<UpdateUserDto>) {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        name: payload.name,
        surname: payload.surname,
        password: payload.password,
        email: payload.email,
      },
    });
    return updatedUser;
  }

  async deleteUser(id: number) {
    const deletedUser = await this.prisma.user.delete({ where: { id } });
    return deletedUser;
  }
}
