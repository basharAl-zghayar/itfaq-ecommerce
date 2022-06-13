import React from "react";
import { Menu, Row, Col, Input, Badge } from "antd";
import type { MenuProps } from "antd";
import {
  BellOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default function ProductsNavbar() {
  const items: MenuProps["items"] = ["Shop", "Promo", "About", "Blog"].map(
    (item: string) => ({
      key: item,
      label: item,
    })
  );
  const onSearch = (value: string) => console.log(value);

  return (
    <React.Fragment>
      <Row style={{ width: "100%", background: "#fff", marginBottom: "16px" }}>
        <Col sm={8}>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["Shop"]}
            items={items}
          />
        </Col>
        <Col sm={8}>
          <Input.Search
            placeholder="Search Any Product"
            allowClear
            size="middle"
            onSearch={(value: string) => onSearch(value)}
            style={{ width: "80%", margin: "8px 0" }}
          />
        </Col>
        <Col sm={8}>
          <Row align="middle" justify="space-evenly" style={{ height: "100%" }}>
            <HeartOutlined style={{ fontSize: "24px" }} />
            <Badge count={3}>
              <ShoppingCartOutlined style={{ fontSize: "24px" }} />
            </Badge>
            <UserOutlined style={{ fontSize: "24px" }} />
            <BellOutlined style={{ fontSize: "24px" }} />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
