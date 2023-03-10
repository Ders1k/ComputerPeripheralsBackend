import { IsNotEmpty } from "class-validator";

export class CreateTypeDto {
  @IsNotEmpty()
  typeName: string;
}
