import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateOrderDto } from './dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  getAllOrders() {
    return this.prisma.order.findMany();
  }

  getOrderById(id: number) {
    return this.prisma.order.findUnique({ where: { id } });
  }

  getUserOrders(userId: number) {
    return this.prisma.order.findMany({
      where: { userId: userId },
    });
  }

  createOrder(userId: number) {
    return this.prisma.order.create({
      data: { userId: userId },
    });
  }

  async createOrderDevice(
    orderId: number,
    quantity: number,
    devices: number[],
  ) {
    const orderDevice = devices.map((deviceId) =>
      this.prisma.orderDevice.create({
        data: { deviceId: deviceId, orderId: orderId, quantity: quantity },
      }),
    );
    return Promise.all(orderDevice);
  }

  updateOrder(id: number, payload: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: { status: payload.status },
    });
  }

  deleteOrder(id: number) {
    return this.prisma.order.delete({ where: { id } });
  }
}
