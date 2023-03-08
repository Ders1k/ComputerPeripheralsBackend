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
  updateBrand(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandService.updateBrand(id, payload);
  }

  @Delete(':id')
  deleteBrand(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.deleteBrand(id);
  }
}
