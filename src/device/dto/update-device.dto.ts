import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class UpdateDeviceDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  price: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  img: string;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @IsOptional()
  brandId: number;

  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  @IsOptional()
  typeId: number;
}
