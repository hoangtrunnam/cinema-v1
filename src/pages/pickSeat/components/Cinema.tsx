import React from "react";
import "../index.css";
import clsx from "clsx";
interface IProps {
  movie: any;
  selectedSeats: any;
  onSelectedSeatsChange: any;
  seats: any[];
}

const Cinema = (props: IProps) => {
  const { movie, selectedSeats, onSelectedSeatsChange, seats } = props;

  function handleSelectedState(seat: any) {
    const isSelected = selectedSeats.includes(seat);

    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat: any) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);

          return (
            <span
              tabIndex={0}
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? undefined : () => handleSelectedState(seat)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cinema;
