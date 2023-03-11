import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateDeviceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  brandId: number;

  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  typeId: number;
}
