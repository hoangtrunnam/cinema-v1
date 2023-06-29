import React, { useEffect, useState } from "react";
import "./index.css";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useNavigate, useParams } from "react-router-dom";
import {
  getListGiftForTrade,
  getListSeatByShowTimeId,
  handleCheckSeatPicked,
} from "src/api/film";
import Button from "react-bootstrap/esm/Button";
import { useRecoilState } from "recoil";
import {
  giftPickedState,
  listSeatPickedState,
} from "src/recoil/filmChoosed/atom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IGiftTraded } from "../TradeVoucher";
import Card from "react-bootstrap/Card";
import ToastMessage from "src/hooks/ToastMessage";
import { toast } from "react-toastify";
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
  const [giftValue, setGiftValue] = useState<string>("");
  const [giftdata, setGiftData] = useState<IGiftTraded[]>([]);
  const [isDisable, setIsDisable] = useState<boolean>(false);

  console.log("giftdata", giftdata);

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
    navigate(`/confirm-ticket`);
  };

  // const handleNavigateToSelectFood = () => {
  //   // navigate(`/pick-food`);
  //   navigate(`/confirm-ticket`);
  // };

  const handleGetGiftByGiftCode = async () => {
    const res = await getListGiftForTrade(giftValue); // chỉ truyền gift code vào để lấy ra gift

    console.log("handleGetGiftByGiftCode", res);
    if (res.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
      setGiftData(res.data);
    } else {
      setGiftData([]);
    }
  };
  const handleUseGift = (giftPicked: IGiftTraded) => {
    console.log(giftPicked);
    setgiftPicked(giftPicked);
    toast(`Đã áp dụng ${giftPicked.giftName}`);
    setIsDisable(true);

    // setItemGiftPicked(giftPicked);
  };

  useEffect(() => {
    if (giftValue !== "") {
      handleGetGiftByGiftCode();
    }
  }, [giftValue]);

  useEffect(() => {
    handleGetListSeatByShowTimeId();
  }, []);

  return (
    <div className="App">
      <ToastMessage />
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

      <InputGroup className="mb-3" style={{ width: "20%" }}>
        <InputGroup.Text>Gift code</InputGroup.Text>
        <Form.Control
          aria-label=""
          onChange={(e) => {
            setGiftValue(e.target.value);
          }}
        />
      </InputGroup>

      {giftdata.length > 0 ? (
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "8px", paddingRight: "8px" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                }
              />
              <Card.Body>
                <Card.Title>{giftdata[0]?.giftName}</Card.Title>
                <Button
                  disabled={isDisable}
                  variant="primary"
                  onClick={() => handleUseGift(giftdata[0])}
                >
                  Áp dụng
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : null}

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
