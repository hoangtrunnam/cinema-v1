import React, { useEffect, useState } from "react";
import "./index.css";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useParams } from "react-router-dom";
import { getAllSeatByShowTime } from "src/api/film";

export interface ISeat {
  id: number;
  location: string;
  status: number;
  price: number;
  seatRankName: string;
  customerId: null | number;
  empoyeeId: null | number;
}

const PickSeat = () => {
  const [listSeat, setListSeat] = useState<ISeat[]>([]);

  const { idShowTime } = useParams();

  console.log("id show time123", idShowTime);

  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);

  console.log("selected seat:", selectedSeats);

  let sum = 0;

  selectedSeats.forEach((seat: ISeat) => {
    return (sum += seat.price);
  });

  const handleGetAllSeat = async () => {
    if (idShowTime !== undefined) {
      const res = await getAllSeatByShowTime(+idShowTime);

      if (res.statusCode === 200 && Array.isArray(res.data)) {
        setListSeat(res.data);
      } else {
        setListSeat([]);
      }
    }
  };

  useEffect(() => {
    handleGetAllSeat();
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
        ban da chon <span className="count">{selectedSeats.length}</span> ghe va
        tong so tien la: <span className="total">{sum}$</span>
      </p>
    </div>
  );
};

export default PickSeat;
