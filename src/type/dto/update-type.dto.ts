import { IsNotEmpty } from "class-validator";

export class UpdateTypeDto {
  @IsNotEmpty()
  typeName: string;
}
