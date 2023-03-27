import { createContext, useEffect, useState } from "react";
import "./App.css";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header";

export const MovieContext = createContext(null);

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [displayedMovieList, setDisplayedMovieList] = useState([]);
  const [typeMovie, setTypeMovie] = useState(true);
  const [url, setUrl] = useState(
    "https://imdb-api.com/en/API/Top250Movies/k_h1ks9c1o"
  );
  useEffect(() => {
    if (typeMovie) {
      setUrl("https://imdb-api.com/en/API/Top250Movies/k_h1ks9c1o");
    } else setUrl("https://imdb-api.com/en/API/ComingSoon/k_h1ks9c1o");
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovieList(data.items))
      .catch((error) => console.log(error));
  }, [typeMovie]);
  useEffect(() => {
    setDisplayedMovieList(movieList);
  }, [movieList]);
  console.log(movieList);
  return (
    <div className="App">
      <MovieContext.Provider
        value={{
          movieList,
          displayedMovieList,
          setDisplayedMovieList,
          typeMovie,
          setTypeMovie,
        }}
      >
        <Header />
        <MovieContainer />
      </MovieContext.Provider>
    </div>
  );
}

function getData(setMovieList) {}
