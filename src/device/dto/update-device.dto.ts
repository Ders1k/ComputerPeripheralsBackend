import { IsNotEmpty } from 'class-validator';

export class UpdateDeviceDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  img: string;

  @IsNotEmpty()
  brandId: number;

  @IsNotEmpty()
  typeId: number;
}
