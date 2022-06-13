import React from "react";

import { Layout, Row, Col } from "antd";
import { PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ShopePage from "../shop-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../product-details";
const { Header, Content, Footer } = Layout;
export default function AppLayout() {
  return (
    <React.Fragment>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            background: "#fff",
          }}
        >
          <Row justify="space-between" gutter={[12, 12]}>
            <Col sm={12} md={8} lg={4}>
              <h3
                className={"primary-color"}
                style={{
                  fontWeight: "700",
                  textAlign: "start",
                  fontSize: "39px",
                }}
              >
                ITFAQ.
              </h3>
            </Col>
            <Col sm={12} md={10}>
              <Row justify="end">
                <Col md={8}>
                  <PhoneOutlined rotate={90} /> Call Center
                </Col>
                <Col md={8}>
                  <ShoppingCartOutlined /> Shipping & Returns
                </Col>
              </Row>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "80px 16px 0",
            overflow: "initial",
            minHeight: "100vh",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/products" element={<ShopePage />}></Route>
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </BrowserRouter>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ITFAQ ©2022 Created by Bashar Zghayar
        </Footer>
      </Layout>
    </React.Fragment>
  );
}
