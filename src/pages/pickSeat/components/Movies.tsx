import React from "react";
import "../index.css";
interface IProps {
  movie: any;
  onChange: (value: any) => void;
  movies: any[];
}

const Movies = (props: IProps) => {
  const { movie, onChange, movies } = props;

  return (
    <div className="Movies">
      <label htmlFor="movie">Pick a movie</label>
      <select
        id="movie"
        value={movie.name}
        onChange={(e) => {
          onChange(movies.find((movie) => movie.name === e.target.value));
        }}
      >
        {movies.map((movie) => (
          <option key={movie.name} value={movie.name}>
            {movie.name} (${movie.price})
          </option>
        ))}
      </select>
    </div>
  );
};

export default Movies;
