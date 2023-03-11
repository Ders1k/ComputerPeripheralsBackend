import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTypeDto {
  @IsNotEmpty()
  @IsString()
  typeName: string;
}
