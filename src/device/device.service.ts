import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeviceDto, UpdateDeviceDto } from './dto';

@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

  async getAllDevices() {
    return await this.prisma.device.findMany();
  }

  async getOneDevice(id: number) {
    return await this.prisma.device.findUnique({ where: { id } });
  }

  async createDevice(payload: CreateDeviceDto) {
    return await this.prisma.device.create({
      data: {
        name: payload.name,
        price: payload.price,
        img: payload.img,
        typeId: payload.typeId,
        brandId: payload.brandId,
      },
    });
  }

  async updateDevice(id: number, payload: UpdateDeviceDto) {
    return await this.prisma.device.update({
      where: { id },
      data: {
        name: payload.name,
        price: payload.price,
        img: payload.img,
        typeId: payload.typeId,
        brandId: payload.brandId,
      },
    });
  }

  async deleteDevice(id: number) {
    return await this.prisma.device.delete({ where: { id } });
  }
}
