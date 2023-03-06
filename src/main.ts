import { NestFactory } from '@nestjs/core';
import dotenv from 'dotenv';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';

dotenv.config();
const PORT = process.env.PORT || 3000;

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}

start();
