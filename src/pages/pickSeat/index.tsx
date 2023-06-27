import React, { useEffect, useState } from "react";
import "./index.css";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useNavigate, useParams } from "react-router-dom";
import { getListSeatByShowTimeId, handleCheckSeatPicked } from "src/api/film";
import Button from "react-bootstrap/esm/Button";
import { useRecoilState } from "recoil";
import { listSeatPickedState } from "src/recoil/filmChoosed/atom";
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

const PickSeat = () => {
  // const { idShowTime } = state;
  // const { dataCookie } = useCookie<IUserLogin>(CookiesEnum.USER_INFO);
  // const user: any = jwt(dataCookie?.accessToken);

  // console.log("user la:", user);
  const [_listSeatPicked, setListSeatPicked] =
    useRecoilState(listSeatPickedState);
  const { idShowTime } = useParams();
  const navigate = useNavigate();

  console.log("id show time123", idShowTime);

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [listSeat, setListSeat] = useState<ISeat[]>([]);

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

  useEffect(() => {
    handleGetListSeatByShowTimeId();
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
