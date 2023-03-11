import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDeviceInfoDto {
  @IsNotEmpty()
  @IsString()
  info: string;
}
