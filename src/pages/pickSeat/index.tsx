import React, { useEffect, useState } from "react";
import "./index.css";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useParams } from "react-router-dom";
import { getListSeatByShowTimeId } from "src/api/film";

export interface ISeat {
  id: number;
  location: string;
  status: number;
  price: number;
  seatRankName: string
  customerId: any;
  empoyeeId: any;
}


const PickSeat = () => {
  // const { idShowTime } = state;

  const { idShowTime } = useParams();

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

  useEffect(() => {
    handleGetListSeatByShowTimeId();
  }, [])

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
        Bạn đã chọn <span className="count">{selectedSeats.length}</span>{" "}
        ghế và có tổng giá là:{" "}
        <span className="total">
          {selectedSeats.reduce((acc, obj) => acc + obj.price, 0)}VND
        </span>
      </p>
    </div>
  );
};

export default PickSeat;
