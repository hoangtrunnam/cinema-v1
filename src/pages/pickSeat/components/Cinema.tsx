import React from "react";
import "../index.css";
import clsx from "clsx";
import { ISeat } from "..";
interface IProps {
  selectedSeats: ISeat[];
  onSelectedSeatsChange: (id: any) => void;
  seats: ISeat[];
}

const Cinema = (props: IProps) => {
  const { selectedSeats, onSelectedSeatsChange, seats } = props;

  function handleSelectedState(seat: ISeat) {
    const isSelected = selectedSeats.some(
      (selectedSeat: ISeat) => selectedSeat.id === seat.id
    );

    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(
          (selectedSeat: ISeat) => selectedSeat.id !== seat.id
        )
      );
    } else {
      const tempObj = [...selectedSeats];

      onSelectedSeatsChange([...tempObj, seat]);
    }
  }

  const enumColorSeatText = {
    Standard: "standardText",
    Vip: "vipText",
    SweetBox: "sweetBoxText",
  };

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat: ISeat) => {
          const isSelected = selectedSeats.some(
            (selectedSeat) => selectedSeat.id === seat.id
          );
          const isOccupied = false;

          return (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
                {/* van chay ok */}
                <p className={clsx(enumColorSeatText[seat.seatRankName])}>
                  {seat.location}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cinema;
