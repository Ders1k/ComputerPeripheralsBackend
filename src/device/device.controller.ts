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
  getOneDevice(@Param('id', ParseIntPipe) id: number) {
    return this.deviceService.getOneDevice(id);
  }

  @Post()
  createDevice(@Body() payload: CreateDeviceDto) {
    return this.deviceService.createDevice(payload);
  }

  @Patch(':id')
  updateDevice(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateDeviceDto,
  ) {
    return this.deviceService.updateDevice(id, payload);
  }

  @Delete(':id')
  deleteDevice(@Param('id', ParseIntPipe) id: number) {
    return this.deviceService.deleteDevice(id);
  }
}
