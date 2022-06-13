import { IProductDto } from "../products/dto";

export interface ICartDto {
  userId: string;
  date: Date;
  products: IProductDto[];
  id: number;
}
