import React, { useState } from "react";
import "./index.css";
import Movies from "./components/Movies";
import ShowCase from "./components/ShowCase";
import Cinema from "./components/Cinema";
import { useLocation, useParams } from "react-router-dom";

const movies = [
  {
    name: "Avenger",
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: "Joker",
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: "Toy story",
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: "the lion king",
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

const PickSeat = () => {
  const location = useLocation();
  // const { idShowTime } = state;

  console.log("id show time", location);
  const { idShowTime } = useParams();

  console.log("id show time123", idShowTime);

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className="App">
      <Movies
        movie={selectedMovie}
        onChange={(movie) => {
          setSelectedSeats([]);
          setSelectedMovie(movie);
        }}
        movies={movies}
      />
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={(selectedSeats: any) =>
          setSelectedSeats(selectedSeats)
        }
        seats={seats}
      />

      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{" "}
        seats for the price of{" "}
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>
    </div>
  );
};

export default PickSeat;
