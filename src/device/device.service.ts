import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  CreateDeviceDto,
  CreateDeviceInfoDto,
  UpdateDeviceDto,
  UpdateDeviceInfoDto,
} from './dto';

@Injectable()
export class DeviceService {
  constructor(private prisma: PrismaService) {}

  getAllDevices() {
    return this.prisma.device.findMany();
  }

  getOneDevice(id: number) {
    return this.prisma.device.findUnique({ where: { id } });
  }

  getDeviceInfoById(id: number) {
    return this.prisma.deviceInfo.findUnique({
      where: { id },
    });
  }

  getDevicesInfoByDeviceId(deviceId: number) {
    return this.prisma.deviceInfo.findMany({ where: { deviceId } });
  }

  createDevice(payload: CreateDeviceDto) {
    return this.prisma.device.create({
      data: {
        name: payload.name,
        price: payload.price,
        img: payload.img,
        typeId: payload.typeId,
        brandId: payload.brandId,
      },
    });
  }

  createDeviceInfo(payload: CreateDeviceInfoDto) {
    return this.prisma.deviceInfo.create({
      data: { info: payload.info, deviceId: payload.deviceId },
    });
  }

  updateDevice(id: number, payload: UpdateDeviceDto) {
    return this.prisma.device.update({
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

  updateDeviceInfo(id: number, payload: UpdateDeviceInfoDto) {
    return this.prisma.deviceInfo.update({
      where: { id },
      data: { info: payload.info },
    });
  }

  deleteDevice(id: number) {
    return this.prisma.device.delete({ where: { id } });
  }

  deleteDeviceInfo(id: number) {
    return this.prisma.deviceInfo.delete({ where: { id } });
  }
}
