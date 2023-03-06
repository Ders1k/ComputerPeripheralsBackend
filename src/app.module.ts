import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DeviceModule } from './device/device.module';

@Module({
  imports: [PrismaModule, DeviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
