import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateDeviceInfoDto {
  @IsNotEmpty()
  @IsInt()
  @IsPositive()
  deviceId: number;

  @IsNotEmpty()
  @IsString()
  info: string;
}
