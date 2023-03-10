import { IsNotEmpty } from "class-validator";

export class CreateDeviceDto {
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
