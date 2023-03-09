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
import { CreateDeviceDto, UpdateDeviceDto } from './dto';

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

  @Post()
  createDevice(@Body() payload: CreateDeviceDto) {
    return this.deviceService.createDevice(payload);
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

  @Delete(':id')
  async deleteDevice(@Param('id', ParseIntPipe) id: number) {
    const device = await this.deviceService.getOneDevice(id);
    if (!device) {
      throw new NotFoundException('Device not found');
    }
    return this.deviceService.deleteDevice(id);
  }
}
