import React, { useEffect, useState } from "react";
import "./index.css";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useNavigate, useParams } from "react-router-dom";
import {
  getListFood,
  getListGiftForTrade,
  getListSeatByShowTimeId,
  handleCheckSeatPicked,
} from "src/api/film";
import Button from "react-bootstrap/esm/Button";
import { useRecoilState } from "recoil";
import {
  foodPickedState,
  giftPickedState,
  listSeatPickedState,
} from "src/recoil/filmChoosed/atom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IGiftTraded } from "../TradeVoucher";
import Card from "react-bootstrap/Card";
import ToastMessage from "src/hooks/ToastMessage";
import { toast } from "react-toastify";
import { baseUrl } from "src/api/config";
import { FaPlus, FaWindowMinimize } from "react-icons/fa6";
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

export interface IFoodDuck {
  name: string;
  description?: string;
  price: number;
  image: any;
  isDeleted: boolean;
  deleterUserId: any;
  deletionTime: any;
  lastModificationTime: any;
  lastModifierUserId: any;
  creationTime: string;
  creatorUserId: any;
  id: number;
  quantity: any;
}

const PickSeat = () => {
  // const { idShowTime } = state;
  // const { dataCookie } = useCookie<IUserLogin>(CookiesEnum.USER_INFO);
  // const user: any = jwt(dataCookie?.accessToken);

  // console.log("user la:", user);
  const [_listSeatPicked, setListSeatPicked] =
    useRecoilState(listSeatPickedState);
  const [_giftPicked, setgiftPicked] = useRecoilState(giftPickedState);
  const [_foodState, setFoodState] = useRecoilState(foodPickedState);

  const { idShowTime } = useParams();
  const navigate = useNavigate();

  console.log("id show time123", idShowTime);

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [listSeat, setListSeat] = useState<ISeat[]>([]);
  const [giftValue, setGiftValue] = useState<string>("");
  const [giftdata, setGiftData] = useState<IGiftTraded[]>([]);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [listFood, setListFood] = useState<IFoodDuck[]>([]);

  console.log("listFood", listFood);

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

    setFoodState(listFood);
    if (res.data) {
      console.log("this is res check seat", res);
      setListSeatPicked(selectedSeats);
      navigate(`/confirm-ticket`);
    } else {
      alert("Ghế đã có ngừoi chọn, vui lòng chọn lại");
    }
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

  const handlGetListFood = async () => {
    const res = await getListFood();

    if (Array.isArray(res.data) && res.data.length > 0) {
      // setListFood(res.data);
      const tempArray = [...res.data];

      for (let i = 0; i < tempArray.length; i++) {
        tempArray[i].quantity = 0;
      }
      setListFood(tempArray);
    } else {
      setListFood([]);
    }
  };

  const handleDecreaseQuantity = (index: number) => {
    const tempArr = [...listFood];

    tempArr[index].quantity -= 1;

    setListFood(tempArr);
  };

  const handleIncreaseQuantity = (index: number) => {
    const tempArr = [...listFood];

    tempArr[index].quantity += 1;
    setListFood(tempArr);
  };

  useEffect(() => {
    if (giftValue !== "") {
      handleGetGiftByGiftCode();
    }
  }, [giftValue]);

  useEffect(() => {
    handleGetListSeatByShowTimeId();
    handlGetListFood();
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

      <h4>
        Không có mã quà tặng? chúng tôi đã có đồ ăn cho bạn lựa chọn ở đây
      </h4>
      <div style={{ overflow: "auto", maxWidth: "100%" }}>
        <div style={{ display: "flex" }}>
          {listFood?.map((item: any, index) => {
            return (
              <div
                key={item.id}
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      `${baseUrl}/${item.image}` ||
                      "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{item?.name}</Card.Title>
                    <Card.Text>
                      {item?.description || "Ngon trên từng ngón tay"}
                    </Card.Text>
                    <Card.Text>{item?.price}</Card.Text>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <FaWindowMinimize
                        onClick={() => handleDecreaseQuantity(index)}
                      />
                      <p style={{ paddingTop: "16px" }}>{item.quantity}</p>
                      <FaPlus onClick={() => handleIncreaseQuantity(index)} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
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
