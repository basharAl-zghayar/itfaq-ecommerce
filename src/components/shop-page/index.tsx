import React, { useEffect, useState } from "react";
import { Card, Row, Col, Spin } from "antd";
import ProductServices from "../../services/products";
import { IProductDto } from "../../services/products/dto";
import ProductCard from "./product-card";
import Filter from "./filter";
import ProductsNavbar from "./navbar";

export default function ShopePage() {
  const [products, setProducts] = useState<Array<IProductDto>>([]);
  const [spinning, setSpinning] = useState(true);
  useEffect(() => {
    if (products.length === 0) {
      setSpinning(true);
      (async () => {
        const data = await ProductServices.getProducts();
        setProducts(data);
        setSpinning(false);
      })();
    }
  }, [products]);

  return (
    <React.Fragment>
      <Spin spinning={spinning}>
        <Row>
          <ProductsNavbar />
        </Row>
        <Card style={{ marginBottom: "16px" }}>
          <Row gutter={24} justify="space-between">
            <Col xs={1} sm={2} md={8} lg={12}></Col>
            <Col xs={23} sm={22} md={16} lg={12}>
              <h1 style={{ fontWeight: "bold", fontSize: "64px" }}>
                Home Shopping,
                <br />
                Your Choice!
              </h1>
              <Row align="middle" justify="center"></Row>
            </Col>
          </Row>
        </Card>
        <Row gutter={[24, 24]} justify="space-between">
          <Col md={24} lg={8}>
            <Filter />
          </Col>
          <Col md={24} lg={16}>
            <Row gutter={[24, 24]} justify="space-between">
              {products &&
                products.map((product: IProductDto) => {
                  return (
                    <Col sm={24} md={12}>
                      <ProductCard {...product} />
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </Spin>
    </React.Fragment>
  );
}
