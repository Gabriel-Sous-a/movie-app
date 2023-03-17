import { createContext, useEffect, useState } from "react";
import "./App.css";
import MovieContainer from "./components/MovieContainer";
import Header from "./components/Header";

export const MovieContext = createContext(null);

export default function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetch("https://imdb-api.com/en/API/Top250Movies/k_h1ks9c1o")
      .then((response) => response.json())
      .then((data) => setMovieList(data.items))
      .catch((error) => console.log(error));
  }, []);
  console.log(movieList)
  return (
    <div className="App">
      <MovieContext.Provider value={{ movieList, setMovieList }}>
        <Header />
        <MovieContainer />
      </MovieContext.Provider>
    </div>
  );
}

function getData(setMovieList) {}
