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
import { NotFoundException } from '@nestjs/common/exceptions';
import { DeviceService } from './device.service';
import {
  CreateDeviceDto,
  CreateDeviceInfoDto,
  UpdateDeviceDto,
  UpdateDeviceInfoDto,
} from './dto';

@Controller('device')
export class DeviceController {
  constructor(private readonly deviceService: DeviceService) {}

  @Get()
  getAllDevices() {
    return this.deviceService.getAllDevices();
  }

  @Get(':id')
  async getOneDevice(@Param('id', ParseIntPipe) id: number) {
    const device = await this.deviceService.getOneDevice(id);
    if (!device) {
      throw new NotFoundException('Device not found');
    }
    return device;
  }

  @Get('/brand/:id')
  async getDevicesByBrand(@Param('id', ParseIntPipe) id: number) {
    const devices = await this.deviceService.getDeviceByBrand(id);
    if (devices.length < 1) {
      throw new NotFoundException('Devices with this brand not found');
    }
    return devices;
  }

  @Get('/type/:id')
  async getDevicesByType(@Param('id', ParseIntPipe) id: number) {
    const devices = await this.deviceService.getDeviceByType(id);
    if (devices.length < 1) {
      throw new NotFoundException('Devices with this type not found');
    }
    return devices;
  }

  @Get('/deviceInfo/:id')
  async getDevicesInfoByDeviceId(@Param('id', ParseIntPipe) id: number) {
    const devicesInfo = await this.deviceService.getDevicesInfoByDeviceId(id);
    if (!devicesInfo) {
      throw new NotFoundException('No info about this device');
    }
    return devicesInfo;
  }

  @Post()
  createDevice(@Body() payload: CreateDeviceDto) {
    return this.deviceService.createDevice(payload);
  }

  @Post('/deviceInfo')
  createDeviceInfo(@Body() payload: CreateDeviceInfoDto) {
    return this.deviceService.createDeviceInfo(payload);
  }

  @Patch(':id')
  async updateDevice(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateDeviceDto,
  ) {
    const device = await this.deviceService.getOneDevice(id);
    if (!device) {
      throw new NotFoundException('Device not found');
    }
    return this.deviceService.updateDevice(id, payload);
  }

  @Patch('/deviceInfo/:id')
  async updateDeviceInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateDeviceInfoDto,
  ) {
    const deviceInfo = await this.deviceService.getDeviceInfoById(id);
    if (!deviceInfo) {
      throw new NotFoundException('No info found about this device');
    }
    return this.deviceService.updateDeviceInfo(id, payload);
  }

  @Delete(':id')
  async deleteDevice(@Param('id', ParseIntPipe) id: number) {
    const device = await this.deviceService.getOneDevice(id);
    if (!device) {
      throw new NotFoundException('Device not found');
    }
    return this.deviceService.deleteDevice(id);
  }

  @Delete('/deviceInfo/:id')
  async deleteDeviceInfo(@Param('id', ParseIntPipe) id: number) {
    const deviceInfo = await this.deviceService.getDeviceInfoById(id);
    if (!deviceInfo) {
      throw new NotFoundException('No info found about this device');
    }
    return this.deviceService.deleteDeviceInfo(id);
  }
}
