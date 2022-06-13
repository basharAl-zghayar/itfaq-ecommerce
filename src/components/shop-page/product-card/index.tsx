import { useEffect, useState } from "react";
import { Card, Row, Skeleton } from "antd";
import CutString from "../../../shared/CutString";
import { IProductDto } from "../../../services/products/dto";
import { useNavigate } from "react-router-dom";

export default function ProductCard(itemData: IProductDto) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    if (itemData !== undefined) {
      setLoading(false);
    }
  }, [itemData]);
  return (
    <Skeleton loading={loading} active>
      <Card
        hoverable
        style={{ height: "600px", overflowY: "clip" }}
        cover={
          <Row style={{ overflow: "hidden", width: "100%", height: "400px" }}>
            <img
              alt="Product_Image"
              src={`${itemData.image}`}
              style={{ width: "100%" }}
            />
          </Row>
        }
        onClick={() => {
          navigate(`${itemData.id}`, { replace: true });
        }}
      >
        <Card.Meta
          title={<h3>{itemData.title}</h3>}
          description={<CutString text={itemData.description} limit={150} />}
        />
      </Card>
    </Skeleton>
  );
}
