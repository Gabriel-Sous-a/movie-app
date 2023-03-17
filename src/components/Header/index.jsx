import React, { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../App";
import { HeaderContainer } from "./style";
import SearchBar from "../SearchBar";

export default function Header() {
  const { setMovieList } = useContext(MovieContext);
  const { movieList } = useContext(MovieContext);
  const [tempMovieList, setTempMovieList] = useState(movieList);
  useEffect(() => {
    setTempMovieList(movieList);
  }, []);
  const handler = (value) => {
    if (value.length === 0) setMovieList(tempMovieList);
    setMovieList(
      movieList.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <HeaderContainer>
      <SearchBar handler={(e) => handler(e.target.value)} />
    </HeaderContainer>
  );
}
