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
import { CreateTypeDto, UpdateTypeDto } from './dto';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Get()
  getAllTypes() {
    return this.typeService.getAllTypes();
  }

  @Post()
  createType(@Body() payload: CreateTypeDto) {
    return this.typeService.createType(payload);
  }

  @Patch(':id')
  updateType(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateTypeDto,
  ) {
    const type = this.typeService.getTypeById(id);
    if (!type) {
      throw new NotFoundException('Type not found');
    }
    return this.typeService.updateType(id, payload);
  }

  @Delete(':id')
  deleteType(@Param('id', ParseIntPipe) id: number) {
    const type = this.typeService.getTypeById(id);
    if (!type) {
      throw new NotFoundException('Type not found');
    }
    return this.typeService.deleteType(id);
  }
}
