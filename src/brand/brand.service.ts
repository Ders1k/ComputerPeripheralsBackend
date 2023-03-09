import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllBrands() {
    const brands = await this.prisma.brand.findMany();
    return brands;
  }

  async getBrandById(id: number) {
    const brand = await this.prisma.brand.findUnique({ where: { id } });
    return brand;
  }

  async createBrand(payload: CreateBrandDto) {
    const newBrand = await this.prisma.brand.create({
      data: { brandName: payload.brandName },
    });
    return newBrand;
  }

  async updateBrand(id: number, payload: Partial<UpdateBrandDto>) {
    const updatedBrand = await this.prisma.brand.update({
      where: { id },
      data: { brandName: payload.brandName },
    });
    return updatedBrand;
  }

  async deleteBrand(id: number) {
    const deletedBrand = await this.prisma.brand.delete({ where: { id } });
    return deletedBrand;
  }
}
