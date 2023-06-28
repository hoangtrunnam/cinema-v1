import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

interface IFood {
  id: number;
  giftName: string;
  image: string;
  point: number;
  isStatus: boolean;
  fromDate: string;
  toDate: string;
  description: string;
}

const arrFoodGift: IFood[] = [
  {
    id: 1,
    giftName: "cocacola",
    image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
    point: 30,
    isStatus: true,
    fromDate: "2022-01-02",
    toDate: "2022-01-02",
    description: "mat lanh sang khoai tuyet voi",
  },
  {
    id: 2,
    giftName: "cocacola2",
    image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
    point: 30,
    isStatus: true,
    fromDate: "2022-01-02",
    toDate: "2022-01-02",
    description: "mat lanh sang khoai tuyet voi",
  },
  {
    id: 3,
    giftName: "cocacola3",
    image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
    point: 30,
    isStatus: true,
    fromDate: "2022-01-02",
    toDate: "2022-01-02",
    description: "mat lanh sang khoai tuyet voi",
  },
  {
    id: 4,
    giftName: "cocacola4",
    image: "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png",
    point: 30,
    isStatus: true,
    fromDate: "2022-01-02",
    toDate: "2022-01-02",
    description: "mat lanh sang khoai tuyet voi",
  },
];

const TradeVoucher = () => {
  const [itemGiftPicked, setItemGiftPicked] = useState<IFood>({
    id: -1,
    giftName: "",
    image: "",
    point: -1,
    isStatus: false,
    fromDate: "",
    toDate: "",
    description: "",
  });
  const handleUseGift = (foodPicked: IFood) => {
    console.log(foodPicked);
    setItemGiftPicked(foodPicked);
  };

  return (
    <div>
      <h1>day la man hinh doi qua</h1>
      <h3>Quà tặng của bạn</h3>
      <h3>chỉ được chọn 1 món</h3>
      <div style={{ display: "flex" }}>
        {arrFoodGift?.map((item: IFood) => {
          return (
            <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    item?.image ||
                    "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                  }
                />
                <Card.Body>
                  <Card.Title>{item?.giftName}</Card.Title>
                  <Card.Text>{item?.description}</Card.Text>
                  <Button
                    variant={
                      item?.id === itemGiftPicked.id ? "primary" : "dark"
                    }
                    onClick={() => handleUseGift(item)}
                  >
                    Đổi điểm
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TradeVoucher;
