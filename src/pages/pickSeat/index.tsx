import React, { useEffect, useState } from "react";
import "./index.css";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useNavigate, useParams } from "react-router-dom";
import {
  getListGift,
  getListSeatByShowTimeId,
  handleCheckSeatPicked,
} from "src/api/film";
import Button from "react-bootstrap/esm/Button";
import { useRecoilState } from "recoil";
import {
  giftPickedState,
  listSeatPickedState,
} from "src/recoil/filmChoosed/atom";
import Card from "react-bootstrap/Card";
// import { useCookie } from "src/hooks/useCookie";
// import { CookiesEnum, IUserLogin } from "src/types/auth";
// import jwt from "jwt-decode";
export interface ISeat {
  id: number;
  location: string;
  status: number;
  price: number;
  seatRankName: string;
  customerId: any;
  empoyeeId: any;
}

export interface IFood {
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

const PickSeat = () => {
  // const { idShowTime } = state;
  // const { dataCookie } = useCookie<IUserLogin>(CookiesEnum.USER_INFO);
  // const user: any = jwt(dataCookie?.accessToken);

  // console.log("user la:", user);
  const [_listSeatPicked, setListSeatPicked] =
    useRecoilState(listSeatPickedState);
  const [_giftPicked, setgiftPicked] = useRecoilState(giftPickedState);
  const { idShowTime } = useParams();
  const navigate = useNavigate();

  console.log("id show time123", idShowTime);

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [listSeat, setListSeat] = useState<ISeat[]>([]);
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

  console.log("selectedSeats", selectedSeats);

  const handleGetListSeatByShowTimeId = async () => {
    if (idShowTime) {
      const res = await getListSeatByShowTimeId(+idShowTime);

      if (res.statusCode && Array.isArray(res.data)) {
        setListSeat(res.data);
      } else {
        setListSeat([]);
      }
    } else {
      console.log("id show time is undefined", idShowTime);
    }
  };

  const handleCheckSeatPickedByUser = async () => {
    const selectedSeatId = selectedSeats.map((item: ISeat) => item.id);
    const res = await handleCheckSeatPicked(selectedSeatId);

    console.log("this is res check seat", res);
    setListSeatPicked(selectedSeats);
    setgiftPicked(itemGiftPicked);
    navigate(`/confirm-ticket`);
  };

  const handleUseGift = (foodPicked: IFood) => {
    console.log(foodPicked);
    setItemGiftPicked(foodPicked);
  };

  // const handleNavigateToSelectFood = () => {
  //   // navigate(`/pick-food`);
  //   navigate(`/confirm-ticket`);
  // };

  const handleGetListGift = async () => {
    const res = await getListGift();

    console.log("res list gift", res);
  };

  useEffect(() => {
    handleGetListSeatByShowTimeId();
    handleGetListGift();
  }, []);

  return (
    <div className="App">
      <ShowCase />
      <Cinema
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats: any) =>
          setSelectedSeats(selectedSeats)
        }
        seats={listSeat}
      />

      <p className="info">
        Bạn đã chọn <span className="count">{selectedSeats.length}</span> ghế và
        có tổng giá là:{" "}
        <span className="total">
          {selectedSeats.reduce((acc, obj) => acc + obj.price, 0)}VND
        </span>
      </p>

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
                    Áp dụng
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div>
        <Button
          variant="success"
          // disabled={selectedSeats.length === 0 ? true : false}
          size="lg"
          onClick={() => handleCheckSeatPickedByUser()}
        >
          Tiếp tục
        </Button>
      </div>
    </div>
  );
};

export default PickSeat;
