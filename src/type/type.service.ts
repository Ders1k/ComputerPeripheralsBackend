import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto, UpdateTypeDto } from './dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllTypes() {
    const types = await this.prisma.type.findMany();
    return types;
  }

  async getTypeById(id: number) {
    const type = await this.prisma.type.findUnique({ where: { id } });
    return type;
  }

  async createType(payload: CreateTypeDto) {
    const newType = await this.prisma.type.create({
      data: { typeName: payload.typeName },
    });
    return newType;
  }

  async updateType(id: number, payload: Partial<UpdateTypeDto>) {
    const updatedType = await this.prisma.type.update({
      where: { id },
      data: { typeName: payload.typeName },
    });
    return updatedType;
  }

  async deleteType(id: number) {
    const deletedType = await this.prisma.type.delete({ where: { id } });
    return deletedType;
  }
}
