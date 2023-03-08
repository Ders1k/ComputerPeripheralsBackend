import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto, UpdateTypeDto } from './dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTypes() {
    return await this.prisma.type.findMany();
  }

  async createType(payload: CreateTypeDto) {
    return await this.prisma.type.create({
      data: { typeName: payload.typeName },
    });
  }

  async updateType(id, payload: UpdateTypeDto) {
    return await this.prisma.type.update({
      where: { id },
      data: { typeName: payload.typeName },
    });
  }

  async deleteType(id) {
    return await this.prisma.type.delete({ where: { id } });
  }
}
