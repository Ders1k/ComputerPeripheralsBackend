import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ConflictException,
  NotFoundException,
} from '@nestjs/common/exceptions';

import { CreateUserDto, UpdateUserDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getOneUser(@Param('id', ParseIntPipe) id: number) {
    const foundUser = await this.userService.getUserById(id);
    if (!foundUser) {
      throw new NotFoundException('User not found');
    }
    return foundUser;
  }

  @Post()
  async createUser(@Body() payload: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(payload.email);
    if (candidate) {
      throw new ConflictException('User already exist');
    }
    return this.userService.createUser(payload);
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    const candidate = await this.userService.getUserById(id);
    if (!candidate) {
      throw new NotFoundException('User not found');
    }
    return this.userService.updateUser(id, payload);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const candidate = await this.userService.getUserById(id);
    if (!candidate) {
      throw new NotFoundException('User not found');
    }
    return this.userService.deleteUser(id);
  }
}
