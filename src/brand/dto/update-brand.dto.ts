import { IsNotEmpty } from "class-validator";

export class UpdateBrandDto {
  @IsNotEmpty()
  brandName: string;
}
