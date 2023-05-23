import React from "react";
import "../index.css";
import clsx from "clsx";
import { ISeat } from "..";
interface IProps {
  selectedSeats: ISeat[];
  onSelectedSeatsChange: (arraySeat: any) => void;
  seats: ISeat[];
}

const Cinema = (props: IProps) => {
  const { selectedSeats, onSelectedSeatsChange, seats } = props;

  function handleSelectedState(seatobj: ISeat) {
    const isSelected = selectedSeats.some(
      (itemSeat) => itemSeat.id === seatobj.id
    );

    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(
          (selectedSeat: ISeat) => selectedSeat.id !== seatobj.id
        )
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seatobj]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.some(
            (itemSeat) => itemSeat.id === seat.id
          );
          const isOccupied = seat.status !== 0 ? true : false; // ghe da duoc chon

          return (
            <div key={seat.id}>
              <span
                tabIndex={0}
                key={seat.id}
                className={clsx(
                  "seat",
                  isSelected && "selected",
                  isOccupied && "occupied"
                )}
                onClick={
                  isOccupied ? undefined : () => handleSelectedState(seat)
                }
              />
              <p>{seat.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cinema;
