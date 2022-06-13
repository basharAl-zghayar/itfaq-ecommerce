import axios from "axios";
import { ICreateUserDto } from "./dtos/create-user";
import { IUserDto } from "./dtos/user";

class UserServices {
  public async getAllUsers(): Promise<Array<IUserDto>> {
    let response = await axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        return response.data;
      });
    return response;
  }
  public async getUser(productId: number): Promise<IUserDto> {
    let response = await axios
      .get(`https://fakestoreapi.com/users/${productId}`)
      .then((response) => {
        return response.data;
      });
    return response;
  }
  public async createUser(createUser: ICreateUserDto): Promise<IUserDto> {
    let response = await axios
      .post(`https://fakestoreapi.com/users/`, { createUser })
      .then((response) => {
        return response.data;
      });
    return response;
  }
  public async deleteUser(userId: number) {
    let response = await axios
      .delete(`https://fakestoreapi.com/users/${userId}`)
      .then((response) => {
        return response.data;
      });
    return response;
  }
}
export default new UserServices();
