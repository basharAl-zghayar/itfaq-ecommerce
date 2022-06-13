import axios from "axios";
import { IProductDto } from "./dto";

class ProductServices {
  public async getProducts(): Promise<Array<IProductDto>> {
    let response = await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        return response.data;
      });
    return response;
  }
  public async getProduct(productId: number): Promise<IProductDto> {
    let response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        return response.data;
      });
    return response;
  }
}
export default new ProductServices();
