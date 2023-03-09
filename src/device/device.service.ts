import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDeviceDto, UpdateDeviceDto } from './dto';

@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

  async getAllDevices() {
    const devices = await this.prisma.device.findMany();
    return devices;
  }

  async getOneDevice(id: number) {
    const device = await this.prisma.device.findUnique({ where: { id } });
    return device;
  }

  async createDevice(payload: CreateDeviceDto) {
    const newDevice = await this.prisma.device.create({
      data: {
        name: payload.name,
        price: payload.price,
        img: payload.img,
        typeId: payload.typeId,
        brandId: payload.brandId,
      },
    });
    return newDevice;
  }

  async updateDevice(id: number, payload: Partial<UpdateDeviceDto>) {
    const updatedDevice = await this.prisma.device.update({
      where: { id },
      data: {
        name: payload.name,
        price: payload.price,
        img: payload.img,
        typeId: payload.typeId,
        brandId: payload.brandId,
      },
    });
    return updatedDevice;
  }

  async deleteDevice(id: number) {
    const deletedDevice = await this.prisma.device.delete({ where: { id } });
    return deletedDevice;
  }
}
