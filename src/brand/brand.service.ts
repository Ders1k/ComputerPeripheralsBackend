import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBrands() {
    return await this.prisma.brand.findMany();
  }

  async createBrand(payload: CreateBrandDto) {
    return await this.prisma.brand.create({
      data: { brandName: payload.brandName },
    });
  }

  async updateBrand(id: number, payload: UpdateBrandDto) {
    return await this.prisma.brand.update({
      where: { id },
      data: { brandName: payload.brandName },
    });
  }

  async deleteBrand(id: number) {
    return await this.prisma.brand.delete({ where: { id } });
  }
}
