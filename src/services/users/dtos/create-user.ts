import { IAdressDto } from "./user-address";

export interface ICreateUserDto {
  email: string;
  username: string;
  password: string;
  name: { firstname: string; lastname: string };
  address: IAdressDto;
  phone: string;
}
