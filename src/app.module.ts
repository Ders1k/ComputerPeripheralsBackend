import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { DeviceModule } from './device/device.module';
import { TypeModule } from './type/type.module';
import { BrandModule } from './brand/brand.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, DeviceModule, TypeModule, BrandModule, UserModule, AuthModule],
})
export class AppModule {}
