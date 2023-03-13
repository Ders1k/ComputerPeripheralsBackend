import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBrandDto, UpdateBrandDto } from './dto';

@Injectable()
export class BrandService {
  constructor(private readonly prisma: PrismaService) {}

  getAllBrands() {
    return this.prisma.brand.findMany();
  }

  getBrandById(id: number) {
    return this.prisma.brand.findUnique({ where: { id } });
  }

  createBrand(payload: CreateBrandDto) {
    return this.prisma.brand.create({
      data: { brandName: payload.brandName },
    });
  }

  updateBrand(id: number, payload: UpdateBrandDto) {
    return this.prisma.brand.update({
      where: { id },
      data: { brandName: payload.brandName },
    });
  }

  deleteBrand(id: number) {
    return this.prisma.brand.delete({ where: { id } });
  }
}
