import React from "react";
import {
  Card,
  Checkbox,
  Col,
  Collapse,
  Input,
  Row,
  Slider,
  Typography,
} from "antd";
import { FilterOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
export default function Filter() {
  const onSearch = (value: string) => console.log(value);
  return (
    <React.Fragment>
      <Card>
        <div style={{ width: "80%", margin: "0 10%" }}>
          <Row gutter={24} justify="space-around" align="middle">
            <Input.Search
              placeholder="Search Any Product"
              allowClear
              size="middle"
              onSearch={(value: string) => onSearch(value)}
              style={{ width: "100%", margin: "8px 0" }}
            />
          </Row>
          <Row justify="space-between" align="middle">
            <Col md={3}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Price</h3>
            </Col>
            <Col md={2}>
              <FilterOutlined
                style={{ fontSize: "24px", fontWeight: "bold" }}
              />
            </Col>
          </Row>

          <Slider range min={5} max={200} defaultValue={[20, 70]} />
          <br />
          <br />
          <br />
          <Collapse>
            <Panel
              header={
                <Typography.Text strong>Coat and Jackets</Typography.Text>
              }
              key="1"
            >
              <Row>
                <Checkbox />
                <Typography.Text> Long</Typography.Text>
              </Row>
              <Row>
                <Checkbox />
                <Typography.Text> Short</Typography.Text>
              </Row>
            </Panel>
            <Panel
              header={<Typography.Text strong>Dress</Typography.Text>}
              key="2"
            >
              <Row>
                <Checkbox />
                <Typography.Text> Long</Typography.Text>
              </Row>
              <Row>
                <Checkbox />
                <Typography.Text> Short</Typography.Text>
              </Row>
            </Panel>
            <Panel
              header={<Typography.Text strong>Skirts</Typography.Text>}
              key="3"
            >
              <Row>
                <Checkbox />
                <Typography.Text> Long</Typography.Text>
              </Row>
              <Row>
                <Checkbox />
                <Typography.Text> Short</Typography.Text>
              </Row>
            </Panel>
          </Collapse>
        </div>
      </Card>
    </React.Fragment>
  );
}
