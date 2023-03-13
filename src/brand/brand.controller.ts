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
import { BrandService } from './brand.service';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Get()
  getAllBrands() {
    return this.brandService.getAllBrands();
  }

  @Post()
  createBrand(@Body() payload: CreateBrandDto) {
    return this.brandService.createBrand(payload);
  }

  @Patch(':id')
  async updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    const brand = await this.brandService.getBrandById(id);
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return this.brandService.updateBrand(id, payload);
  }

  @Delete(':id')
  async deleteBrand(@Param('id', ParseIntPipe) id: number) {
    const brand = await this.brandService.getBrandById(id);
    if (!brand) {
      throw new NotFoundException('Brand not found');
    }
    return this.brandService.deleteBrand(id);
  }
}
