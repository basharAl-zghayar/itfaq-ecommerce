import axios from "axios";
import { ICartDto } from "./dto";

class CartServices {
  public async getCartById(cartId: number): Promise<ICartDto> {
    let response = await axios
      .get(`https://fakestoreapi.com/carts/${cartId}`)
      .then((response) => {
        return response.data;
      });
    return response;
  }
}
export default new CartServices();
