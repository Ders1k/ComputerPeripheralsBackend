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
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { CreateOrderDto, UpdateOrderDto } from './dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  async getAllOrders() {
    const orders = await this.orderService.getAllOrders();
    return orders;
  }

  @Get(':id')
  async getOrderById(@Param('id', ParseIntPipe) id: number) {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  @Get('/user/:id')
  async getUserOrders(@Param('id', ParseIntPipe) userId: number) {
    const userOrders = await this.orderService.getUserOrders(userId);
    if (userOrders.length < 1) {
      throw new NotFoundException('You do not have any orders');
    }
    return userOrders;
  }

  @Post()
  async createOrder(@Body() payload: CreateOrderDto) {
    const { device, userId, quantity } = payload;
    try {
      const order = await this.orderService.createOrder(userId);
      const orderDevice = await this.orderService.createOrderDevice(
        order.id,
        quantity,
        device,
      );
      return orderDevice;
    } catch (err) {
      this.orderService.deleteOrder(userId);
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  async updateOrder(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDto,
  ) {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return this.orderService.updateOrder(id, payload);
  }

  @Delete(':id')
  async deleteOrder(@Param('id', ParseIntPipe) id: number) {
    const order = await this.orderService.getOrderById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return this.orderService.deleteOrder(id);
  }
}
