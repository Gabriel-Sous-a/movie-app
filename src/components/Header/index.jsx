import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import { HeaderContainer, Button } from "./style";
import SearchBar from "../SearchBar";

export default function Header() {
  const { setDisplayedMovieList } = useContext(MovieContext);
  const { DisplayedMovieList } = useContext(MovieContext);
  const { movieList } = useContext(MovieContext);
  const { setTypeMovie } = useContext(MovieContext);
  const { typeMovie } = useContext(MovieContext);
  const handler = (value) => {
    if (value.length === 0) setDisplayedMovieList(DisplayedMovieList);
    setDisplayedMovieList(
      movieList.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <HeaderContainer>
      <Button
        onClick={() => (typeMovie ? setTypeMovie(false) : setTypeMovie(true))}
      >
        Coming Soon
      </Button>
      <SearchBar handler={(e) => handler(e.target.value)} />
    </HeaderContainer>
  );
}
