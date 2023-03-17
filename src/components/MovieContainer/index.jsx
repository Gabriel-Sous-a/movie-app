import React, { useContext } from "react";
import { MovieContext } from "../../App";
import MovieDisplay from "../MovieDisplay";
import { Movies } from "./style";

export default function MovieContainer() {
  const { movieList } = useContext(MovieContext);

  return (
    <Movies>
      {movieList.map((movie) => (
        <MovieDisplay
          name={movie.title}
          img={movie.image}
          score={movie.imDbRating}
          description={movie.crew}
        />
      ))}
    </Movies>
  );
}
