import { IAdressDto } from "./user-address";

export interface IUserDto {
  id: number;
  email: string;
  username: string;
  password: string;
  name: { firstname: string; lastname: string };
  address: IAdressDto;
  phone: string;
}
