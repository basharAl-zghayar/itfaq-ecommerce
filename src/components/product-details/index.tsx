import React, { useState, useEffect } from "react";
import { Button, Card } from "antd";
import { IProductDto } from "../../services/products/dto";
import ProductServices from "../../services/products";
import { useNavigate, useParams } from "react-router-dom";
const { Meta } = Card;
const ProductDetails = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [productDetails, setProductDetails] = useState<IProductDto>(
    {} as IProductDto
  );

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await ProductServices.getProduct(Number(id));
        if (data) {
          setProductDetails(data);
          setLoading(false);
        }
      })();
    }
  }, [id]);
  return (
    <React.Fragment>
      <Card
        title={productDetails.title}
        extra={<Button onClick={() => navigate('/products', { replace: true })}>Back</Button>}
        loading={loading}
        cover={<img alt="example" src={productDetails.image} />}
      ></Card>
      <Meta
        title={productDetails.title}
        description={productDetails.description}
      />
    </React.Fragment>
  );
};
export default ProductDetails;
