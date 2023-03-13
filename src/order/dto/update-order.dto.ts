import { IsEnum, IsNotEmpty } from 'class-validator';

enum Status {
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  PENDING = 'PENDING',
}

export class UpdateOrderDto {
  @IsNotEmpty()
  @IsEnum(Status)
  status: Status;
}
