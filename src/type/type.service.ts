import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTypeDto, UpdateTypeDto } from './dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTypes() {
    return this.prisma.type.findMany();
  }

  getTypeById(id: number) {
    return this.prisma.type.findUnique({ where: { id } });
  }

  createType(payload: CreateTypeDto) {
    return this.prisma.type.create({
      data: { typeName: payload.typeName },
    });
  }

  updateType(id: number, payload: UpdateTypeDto) {
    return this.prisma.type.update({
      where: { id },
      data: { typeName: payload.typeName },
    });
  }

  deleteType(id: number) {
    return this.prisma.type.delete({ where: { id } });
  }
}
